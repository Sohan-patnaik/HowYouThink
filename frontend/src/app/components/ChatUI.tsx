"use client";

<<<<<<< HEAD
import { useState, FormEvent, useEffect, useRef } from "react";
import EmbedBox from "./Embed";
=======
import { useState, FormEvent } from "react";

>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
interface Message {
  sender: "user" | "bot" | "error";
  text: string;
}

interface ChatUIProps {
<<<<<<< HEAD
  botId: string;
=======
  botId: string; // pass the bot id from your Next page
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
}

export default function ChatUI({ botId }: ChatUIProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMsg, setUserMsg] = useState("");
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const embedCode = `<script src="http://localhost:8000/widget.js" bot-id="${botId}"></script>`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedMsg = userMsg.trim();
    if (!trimmedMsg || loading) return;

    const userMessage: Message = { sender: "user", text: trimmedMsg };

    setMessages((prev) => [...prev, userMessage]);
    setUserMsg("");
    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

      const res = await fetch(`${API_URL}/chat/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          msg: trimmedMsg,
          bot_id: botId,
        }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const data = await res.json();

      const botMessage: Message = {
        sender: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "error", text: "Failed to get response from bot." },
      ]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-2xl mx-auto my-8 p-4 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center border-b pb-4">
        Chat Bot
      </h2>

      <div className="flex-grow p-4 rounded-xl overflow-y-auto bg-gray-50/50 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-md p-3 rounded-2xl shadow-sm ${
                m.sender === "user"
                  ? "bg-blue-600 text-white"
                  : m.sender === "bot"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-red-100 text-red-700"
              }`}
            >
              <p className="whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-gray-500 text-sm">Bot is thinking...</div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex mt-4 gap-2">
=======

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
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
        <input
          type="text"
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
<<<<<<< HEAD
          placeholder="Ask your bot anything..."
          required
          disabled={loading}
          className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold disabled:bg-blue-400"
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
      <div>
        <EmbedBox embedCode={embedCode} />
      </div>
=======
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
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
    </div>
  );
}
