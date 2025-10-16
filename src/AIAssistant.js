import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/ai/assistant", {
        message: input,
      });
      const aiMsg = { role: "ai", text: res.data.reply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg = { role: "ai", text: "⚠️ Error: AI not responding." };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-6">
        <Link to="/" className="text-blue-600 font-semibold underline mb-4 inline-block">
          ← Back to Search
        </Link>

        <h1 className="text-2xl font-bold text-blue-700 text-center mb-4">
          🤖 AI Flight Assistant
        </h1>

        {/* Chat Box */}
        <div className="bg-gray-50 border rounded-lg h-96 overflow-y-auto p-4 mb-4 shadow-inner">
          {messages.length === 0 && (
            <p className="text-gray-400 text-center mt-20">
              💬 Ask something like “Best flight from Delhi to Mumbai tomorrow?”
            </p>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex gap-3">
          <input
            type="text"
            className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ask your travel question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>

  );
}
