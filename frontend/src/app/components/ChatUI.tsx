"use client";

import { useState, FormEvent } from "react";

interface Message {
  sender: "user" | "bot" | "error";
  text: string;
}

interface ChatUIProps {
  botId: string; // pass the bot id from your Next page
}

export default function ChatUI({ botId }: ChatUIProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMsg, setUserMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = userMsg.trim();
    if (!trimmed) return;

    // Add user message locally
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setUserMsg("");
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
    try {
      const resp = await fetch(`${API_URL}/get`, {
        // adjust URL to your Flask endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: trimmed, bot_id: botId }),
      });

      if (!resp.ok) {
        throw new Error(await resp.text());
      }

      const data = await resp.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "error", text: "Error sending message." },
      ]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-amber-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Chat with your Bot
      </h2>

      <div className="border border-gray-200 p-4 rounded-xl h-80 overflow-y-auto bg-white shadow-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-3 p-2 rounded-lg ${
              m.sender === "user"
                ? "bg-blue-50 text-blue-700 self-end"
                : m.sender === "bot"
                ? "bg-green-50 text-green-700 self-start"
                : "bg-red-50 text-red-700"
            }`}
          >
            {m.sender === "user" && <strong>You: </strong>}
            {m.sender === "bot" && <strong>Bot: </strong>}
            {m.sender === "error" && <strong>Error: </strong>}
            <span>{m.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex mt-4 gap-3">
        <input
          type="text"
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          placeholder="Type a message..."
          required
          className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
