"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const end = new Date("2025-01-15").getTime();
    const i = setInterval(() => {
      const d = end - Date.now();
      if (d <= 0) {
        setTimeLeft("Drop Ended");
        clearInterval(i);
        return;
      }
      const days = Math.floor(d / (1000 * 60 * 60 * 24));
      const hours = Math.floor((d / (1000 * 60 * 60)) % 24);
      setTimeLeft(`${days}d ${hours}h`);
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-sky-50 to-violet-100 text-neutral-900 p-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-center mb-6"
      >
        Nero ✨ Fantasy Playmats & Stickers
      </motion.h1>

      <p className="text-center text-lg mb-8">
        Cute light-fantasy art • Limited drops
      </p>

      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 rounded-full bg-white shadow font-semibold">
          Drop ends in: {timeLeft}
        </span>
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 text-center">
        <img
          src="/art/sample.jpg"
          className="rounded-2xl mb-6"
          alt="Artwork"
        />
        <h2 className="text-2xl font-bold mb-2">Mystic Sorceress</h2>
        <p className="mb-4">$35 • Playmat</p>
        <a
          href="https://fourthwall.com"
          className="inline-block px-6 py-3 rounded-xl bg-sky-400 text-white font-semibold hover:bg-sky-500"
        >
          Buy on Fourthwall
        </a>
      </div>
    </main>
  );
}
