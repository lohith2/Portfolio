"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { chatbotPrompts, knowledgeBase } from "@/data/site";

function getAnswer(question) {
  const normalized = question.toLowerCase();
  const scored = knowledgeBase
    .map((entry) => ({
      entry,
      score: entry.keywords.reduce(
        (total, keyword) => total + (normalized.includes(keyword) ? 1 : 0),
        0
      ),
    }))
    .sort((a, b) => b.score - a.score);

  const match = scored[0];

  if (match && match.score > 0) {
    return match.entry.answer;
  }

  return "You can ask about my projects, technical skills, AI systems focus, education, experience timeline, or contact details. The chatbot answers from the portfolio data.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I am Lohith's portfolio assistant. Ask me about my projects, AI systems focus, technical skills, education, experience timeline, or contact details.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function sendMessage(question) {
    const trimmed = question.trim();
    if (!trimmed) return;

    const answer = getAnswer(trimmed);
    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer },
    ]);
    setInput("");
  }

  return (
    <>
      <button className="chatbot-trigger" type="button" onClick={() => setOpen((v) => !v)}>
        <span className="chatbot-trigger-ping" />
        {open ? "Close Chat" : "Ask About Me"}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            className="chatbot-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.24 }}
          >
            <div className="chatbot-head">
              <div>
                <p className="mini-label">Chat Assistant</p>
                <h3>Portfolio Q and A</h3>
              </div>
              <span className="chatbot-live">Online</span>
            </div>

            <div className="chatbot-prompts">
              {chatbotPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="prompt-chip"
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="chatbot-feed">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  className={`chat-bubble ${message.role === "user" ? "is-user" : ""}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <span className="bubble-role">
                    {message.role === "user" ? "You" : "Assistant"}
                  </span>
                  <p>{message.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="chatbot-input-row">
              <input
                className="chatbot-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, skills, education, experience, or contact"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage(input);
                  }
                }}
              />
              <button
                className="chatbot-send"
                type="button"
                onClick={() => sendMessage(input)}
                disabled={!canSend}
              >
                Send
              </button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
