"use client";

import { policies } from "@/data/site";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Message = {
  role: "studio" | "visitor";
  text: string;
};

function answerFor(input: string) {
  const normalized = input.toLowerCase();
  if (normalized.includes("price") || normalized.includes("cost") || normalized.includes("budget")) return policies.pricing;
  if (normalized.includes("heal") || normalized.includes("aftercare")) return policies.aftercare;
  if (normalized.includes("prepare") || normalized.includes("before")) return policies.preparation;
  if (normalized.includes("book") || normalized.includes("appointment") || normalized.includes("deposit")) return policies.booking;
  return "Share your idea, placement, size, references, budget, and preferred dates. The studio can then recommend the right artist and next step.";
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "studio", text: "Ask about pricing, booking, preparation, healing, aftercare, or studio policies." },
  ]);

  const quickPrompts = useMemo(() => ["Pricing", "Booking", "Aftercare"], []);

  const submit = (value = input) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { role: "visitor", text: trimmed },
      { role: "studio", text: answerFor(trimmed) },
    ]);
    setInput("");
    setOpen(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[65]">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mb-4 w-[min(92vw,380px)] overflow-hidden rounded-lg border border-white/12 bg-obsidian/94 shadow-premium backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-obsidian">
                <Bot size={18} />
              </span>
              <div>
                <p className="font-semibold">Studio Assistant</p>
                <p className="text-xs text-pearl/58">Policy and booking guidance</p>
              </div>
            </div>
            <button type="button" aria-label="Close assistant" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-white/12">
              <X size={16} />
            </button>
          </div>
          <div className="max-h-[360px] space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg px-4 py-3 text-sm leading-6 ${
                  message.role === "visitor" ? "ml-10 bg-gold text-obsidian" : "mr-10 bg-white/8 text-pearl"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              className="form-field py-2"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") submit();
              }}
              placeholder="Ask a question"
            />
            <button type="button" aria-label="Send message" onClick={() => submit()} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-obsidian">
              <Send size={17} />
            </button>
          </div>
        </motion.div>
      )}
      <div className="flex justify-end gap-2">
        {!open && quickPrompts.map((prompt) => (
          <button key={prompt} type="button" onClick={() => submit(prompt)} className="hidden rounded-full border border-white/12 bg-obsidian/80 px-3 py-2 text-xs text-pearl backdrop-blur md:inline-flex">
            {prompt}
          </button>
        ))}
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-gold text-obsidian shadow-gold">
          <MessageCircle size={22} />
        </button>
      </div>
    </div>
  );
}
