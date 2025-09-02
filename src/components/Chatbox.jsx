import React, { useState, useRef, useEffect } from "react";

const N8N_WEBHOOK_URL = "https://aware-lemming-rich.ngrok-free.app/webhook/ask"; 

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // ✅ auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function handleSend() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askAI(userMsg);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err) {
      console.error("❌ Error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Error connecting to the service. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleInputKeyDown(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      {/* Floating Button */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-all duration-300 flex items-center justify-center"
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-80 max-w-xs bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: open ? "400px" : "0", maxHeight: "70vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-blue-600 rounded-t-xl">
          <span className="text-white font-semibold">Chatbot</span>
          <button
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="text-white hover:text-gray-200"
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-8">
              Start chatting with AI 🤖
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100 bg-white flex items-center gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            disabled={loading}
            autoFocus={open}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition ${
              loading || !input.trim() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </>
  );
}

// ✅ Function to call n8n webhook
async function askAI(userMessage) {
  const res = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: userMessage }),
  });

  if (!res.ok) throw new Error("Network error");
  const data = await res.json();

  console.log("🔎 Response from n8n:", data);

  // { "reply": "..." }
  if (data && data.reply) return data.reply;

  
  if (Array.isArray(data) && data[0]?.json?.reply) return data[0].json.reply;


  if (typeof data === "string") return data;

  return "I couldn't understand the reply. Please try again.";
}


