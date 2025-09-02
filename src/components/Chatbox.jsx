import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Salam 👋! Ask me anything from the PDF." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ⚠️ حط هنا الـ URL متاع ngrok + webhook n8n
  const N8N_WEBHOOK_URL =
    "https://aware-lemming-rich.ngrok-free.app/webhook/ask";

  const sendMessage = async () => {
    if (!input.trim()) return;

    // ضيف message متاع user
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }), // 👈 هذا يوصل للنود في n8n
      });

      const data = await response.json();

      // ضيف reply متاع bot
      setMessages([
        ...newMessages,
        { sender: "bot", text: data.reply || "⚠️ No reply from n8n." },
      ]);
    } catch (err) {
      console.error("❌ Error:", err);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col">
        {/* Chat window */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 p-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200 text-black self-start mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="text-gray-400 text-sm">Bot is typing...</div>
          )}
        </div>

        {/* Input box */}
        <div className="p-4 border-t flex">
          <input
            className="flex-1 border rounded-lg p-2 mr-2"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
