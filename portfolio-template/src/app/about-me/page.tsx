"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Heart, Camera, Compass } from "lucide-react";

// Image and decoration base URL
const IMAGES_PREFIX = "https://framerusercontent.com/images/";

interface CardPosition {
  top: string;
  left: string;
  width: string;
  height: string;
}

interface PolaroidCardData {
  id: string;
  title: string;
  rotation: string;
  images: string[];
  decorations: Array<{
    src: string;
    style: React.CSSProperties;
    className?: string;
  }>;
}

// Coordinates from the system prompt
const cardPositions: Record<string, { default: CardPosition; tablet: CardPosition; mobile: CardPosition }> = {
  catan: {
    default: { top: "1076px", left: "48px", width: "376px", height: "401px" },
    tablet: { top: "1079px", left: "72px", width: "296px", height: "316px" },
    mobile: { top: "882px", left: "75px", width: "288px", height: "307px" },
  },
  painting: {
    default: { top: "91px", left: "1356px", width: "460px", height: "371px" },
    tablet: { top: "299px", left: "849px", width: "362px", height: "292px" },
    mobile: { top: "103px", left: "690px", width: "352px", height: "284px" },
  },
  crafts: {
    default: { top: "873px", left: "1644px", width: "389px", height: "536px" },
    tablet: { top: "868px", left: "1075px", width: "306px", height: "422px" },
    mobile: { top: "671px", left: "866px", width: "298px", height: "411px" },
  },
  gallery: {
    default: { top: "3px", left: "814px", width: "403px", height: "385px" },
    tablet: { top: "268px", left: "755px", width: "317px", height: "303px" },
    mobile: { top: "220px", left: "65px", width: "309px", height: "295px" },
  },
  eating: {
    default: { top: "1180px", left: "594px", width: "362px", height: "375px" },
    tablet: { top: "1192px", left: "423px", width: "285px", height: "295px" },
    mobile: { top: "1092px", left: "349px", width: "278px", height: "288px" },
  },
  cooking: {
    default: { top: "491px", left: "1657px", width: "397px", height: "369px" },
    tablet: { top: "608px", left: "1063px", width: "312px", height: "290px" },
    mobile: { top: "419px", left: "909px", width: "304px", height: "283px" },
  },
  water: {
    default: { top: "544px", left: "9px", width: "350px", height: "372px" },
    tablet: { top: "688px", left: "-18px", width: "275px", height: "293px" },
    mobile: { top: "550px", left: "0px", width: "268px", height: "285px" },
  },
  croshet: {
    default: { top: "35px", left: "376px", width: "326px", height: "405px" },
    tablet: { top: "302px", left: "138px", width: "257px", height: "319px" },
    mobile: { top: "35px", left: "413px", width: "250px", height: "311px" },
  },
  flower: {
    default: { top: "1144px", left: "1176px", width: "451px", height: "401px" },
    tablet: { top: "1140px", left: "795px", width: "355px", height: "316px" },
    mobile: { top: "987px", left: "663px", width: "345px", height: "307px" },
  },
};

const polaroidsData: PolaroidCardData[] = [
  {
    id: "croshet",
    title: "Crochet therapy",
    rotation: "rotate(-2deg)",
    images: [
      "vJBGEDpm38vuVsuwdQkFD5cB2pw.webp",
      "GOlnfXXKie33ojplac9P42W4.webp",
      "nmNIr2wr8NYFebwFQdOh2Uxzk4.webp",
      "vGKuNSQFFCw0iTGuLdDuYITw28.webp",
      "yqNgWBGzZnRKWCdYFCSHmdEca8.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}Wy5i0mCB4GamWDmdQKe4pEb3AQs.svg`, // tape
        style: { top: "-18px", left: "25%", width: "110px", transform: "rotate(-4deg)" },
      },
      {
        src: `${IMAGES_PREFIX}lGL381B6OcvZKAcHP6wvRBq8.svg`, // star
        style: { top: "-25px", right: "-25px", width: "65px", transform: "rotate(15deg)" },
      },
    ],
  },
  {
    id: "gallery",
    title: "Art hunting",
    rotation: "rotate(-1deg)",
    images: [
      "xqsfBkJuO0MJQSi1znJEHm85VI.webp",
      "71Lphwb4fAEWx1f0M40xCEVrpg.webp",
      "xPE26pUwn5oLmVXY45kR5EX2Y.webp",
      "exZ5XoZTx2ZhuT0ysUasHuqUQ.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}w2RYYQGtODzjHUe8yY86ReM28.svg`, // pin/decor
        style: { top: "-24px", left: "45%", width: "45px" },
      },
    ],
  },
  {
    id: "painting",
    title: "Acrylic strokes",
    rotation: "rotate(-2deg)",
    images: [
      "Dq7Kad3EK8MOhrO5eeEuBW0eqM.webp",
      "1VFbic6wDqscEJcGtW2GUToGJM.webp",
      "AgPxwzl0arZWswDfyqxSnhKU.webp",
      "RypuxHuZWl9X4QwBQyX5OQcXlic.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}sCL41MIVJFgTcDuhWjr6oYpxI.svg`, // safety pin
        style: { top: "-24px", left: "-12px", width: "55px", transform: "rotate(-25deg)" },
      },
    ],
  },
  {
    id: "water",
    title: "Seaside views",
    rotation: "rotate(2deg)",
    images: [
      "BjhZVtalYXk2US5MIoNPps6CmY.webp",
      "2zA4q8juWukbHDt9Oc6k9G5bXFU.webp",
      "buthiQh9UB5RJPx4NRBVjBRshYw.webp",
      "oA54hMp2etXWhIr3EOPLc8FMazc.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}7TnHLo89copAKEncgpXEl7XOXes.svg`, // tape
        style: { top: "-20px", left: "30px", width: "100px", transform: "rotate(8deg)" },
      },
    ],
  },
  {
    id: "cooking",
    title: "Chef mode",
    rotation: "rotate(-3deg)",
    images: [
      "eWnhOHU6bzKSqgZbhSntjHJHwEs.webp",
      "V6JZatKB3GFYdtzRKSV08Unb2qc.webp",
      "FD1kWhKuoZYQYUywV37NBXe8xk.webp",
      "bNYMja4y5hqxE2SvKE7Xk1qYnbQ.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}sCL41MIVJFgTcDuhWjr6oYpxI.svg`, // safety pin
        style: { top: "-20px", right: "-10px", width: "55px", transform: "rotate(35deg)" },
      },
    ],
  },
  {
    id: "crafts",
    title: "Handcrafted miniatures",
    rotation: "rotate(1deg)",
    images: [
      "POx2plbBYBXBwVNLiQGpPYsAzuM.webp",
      "l7lgLSraVacVYQ4O7cxIvpHqg.webp",
      "hTg7MkfKBPDY0PBk99S4ddJqmzE.webp",
      "cJOSUnJ9kyqA3cyIPs3GVDIBXew.webp",
      "DR8qjMhUWmPopLy9O7QCaKVh6uc.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}7TnHLo89copAKEncgpXEl7XOXes.svg`, // tape
        style: { top: "-18px", right: "40px", width: "105px", transform: "rotate(12deg)" },
      },
      {
        src: `${IMAGES_PREFIX}lGL381B6OcvZKAcHP6wvRBq8.svg`, // star
        style: { bottom: "40px", left: "-25px", width: "70px", transform: "rotate(-10deg)" },
      },
    ],
  },
  {
    id: "catan",
    title: "Catan nights",
    rotation: "rotate(2deg)",
    images: [
      "JoZqWiwgFNuYy5sLxv9krvq1AQU.webp",
      "jlj8bPuNfAfpBKFKGQvm48hCc.webp",
      "1jDPttpXNBVOEB7V1skaLIATns.webp",
      "SZkMGbuL1rDeOz7VAtLQcEhLLK8.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}Wy5i0mCB4GamWDmdQKe4pEb3AQs.svg`, // tape
        style: { top: "-20px", left: "25%", width: "115px", transform: "rotate(-5deg)" },
      },
    ],
  },
  {
    id: "eating",
    title: "Yummy food spots",
    rotation: "rotate(3deg)",
    images: [
      "IYI8ICvyrhEs7QJADj7g9jkejc8.webp",
      "rtWrDEeI7axLgKWcniFdMRHVQ.webp",
      "jTJuGzuJVcq21YrIQNrhQ4sEko4.webp",
      "WEYOOGPGZXDzdHFCwB0oaqnBc.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}w2RYYQGtODzjHUe8yY86ReM28.svg`, // pin/decor
        style: { top: "-22px", left: "20px", width: "45px" },
      },
    ],
  },
  {
    id: "flower",
    title: "Fresh blooms",
    rotation: "rotate(1.5deg)",
    images: [
      "655sX5B2YpLJwwqBZr10cOz4fXg.webp",
      "ne58DpF902aK3y6ksVUWBTsXUu8.webp",
      "ieZt2VfMWbAei3ReoCvGbRbI.webp",
      "xKDO4kmrPCDdWyAwTo7Z4WEMnI0.webp",
      "Rq1cJVJ8ew6P3c58ne0EoF74hHI.webp",
    ].map((img) => `${IMAGES_PREFIX}${img}`),
    decorations: [
      {
        src: `${IMAGES_PREFIX}7TnHLo89copAKEncgpXEl7XOXes.svg`, // tape
        style: { top: "-22px", right: "35px", width: "110px", transform: "rotate(18deg)" },
      },
    ],
  },
];

// Layout for central story note and plant seed note
const journalPositions = {
  journal: {
    default: { top: "410px", left: "460px", width: "700px", height: "620px" },
    tablet: { top: "390px", left: "410px", width: "600px", height: "640px" },
    mobile: { top: "350px", left: "320px", width: "450px", height: "650px" },
  },
  seed: {
    default: { top: "440px", left: "1190px", width: "330px", height: "390px" },
    tablet: { top: "30px", left: "40px", width: "280px", height: "250px" },
    mobile: { top: "20px", left: "50px", width: "280px", height: "180px" },
  },
};

export default function AboutMe() {
  const [layoutMode, setLayoutMode] = useState<"default" | "tablet" | "mobile">("default");
  const [mounted, setMounted] = useState(false);
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);
  const [seeds, setSeeds] = useState<string[]>([]);
  
  // Track image cycling stack indices
  const [indexes, setIndexes] = useState<Record<string, number>>({
    catan: 0,
    painting: 0,
    crafts: 0,
    gallery: 0,
    eating: 0,
    cooking: 0,
    water: 0,
    croshet: 0,
    flower: 0,
  });

  useEffect(() => {
    setMounted(true);
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setLayoutMode("mobile");
      } else if (w < 1024) {
        setLayoutMode("tablet");
      } else {
        setLayoutMode("default");
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const plantSeed = () => {
    const plants = ["🌱", "🌿", "🍀", "🌸", "🌻", "🌼", "🎋", "🌲", "🌳", "🍁"];
    const randomPlant = plants[Math.floor(Math.random() * plants.length)];
    setSeeds((prev) => [...prev, randomPlant]);
  };

  const cycleImage = (cardId: string) => {
    if (isDraggingCanvas) return;
    const card = polaroidsData.find((p) => p.id === cardId);
    if (!card) return;
    setIndexes((prev) => ({
      ...prev,
      [cardId]: (prev[cardId] + 1) % card.images.length,
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 flex flex-col overflow-hidden select-none">
      <Header />

      {/* Main viewport with hidden scrollbars for full infinite-canvas experience */}
      <main className="flex-1 w-full h-[calc(100vh-64px)] relative overflow-hidden">
        {/* Drag Bounds wrapper */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          
          {/* Draggable Canvas container */}
          <motion.div
            drag
            dragMomentum={true}
            dragTransition={{ power: 0.12, timeConstant: 250 }}
            dragConstraints={{
              left: -850,
              right: 850,
              top: -650,
              bottom: 650,
            }}
            onDragStart={() => setIsDraggingCanvas(true)}
            onDragEnd={() => setTimeout(() => setIsDraggingCanvas(false), 50)}
            className="w-[2000px] h-[1500px] bg-[#FAF9F6] dark:bg-[#121110] border border-neutral-300/60 dark:border-neutral-800 relative shadow-inner cursor-grab active:cursor-grabbing transition-colors duration-300"
            style={{
              backgroundImage: `radial-gradient(var(--color-border) 1.5px, transparent 1.5px)`,
              backgroundSize: "32px 32px",
            }}
          >
            {/* Center Journal Book / Story Board */}
            <div
              className="absolute bg-[#FCF9F5] dark:bg-[#1D1B1A] border border-neutral-300/60 dark:border-neutral-800 rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col justify-between group"
              style={{
                top: journalPositions.journal[mounted ? layoutMode : "default"].top,
                left: journalPositions.journal[mounted ? layoutMode : "default"].left,
                width: journalPositions.journal[mounted ? layoutMode : "default"].width,
                height: journalPositions.journal[mounted ? layoutMode : "default"].height,
              }}
            >
              {/* Notebook binding edge ring decorations */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-6 select-none pointer-events-none z-10 opacity-70">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#EBE5DC] dark:bg-[#0B0A09] border border-neutral-300/80 dark:border-neutral-800 shadow-inner" />
                ))}
              </div>

              {/* Journal tape overlays */}
              <img
                src={`${IMAGES_PREFIX}Wy5i0mCB4GamWDmdQKe4pEb3AQs.svg`}
                alt="Tape decoration"
                style={{ top: "-22px", left: "40px", width: "110px", transform: "rotate(-40deg)", opacity: 0.85 }}
                className="absolute select-none pointer-events-none z-10 dark:brightness-75"
              />
              <img
                src={`${IMAGES_PREFIX}7TnHLo89copAKEncgpXEl7XOXes.svg`}
                alt="Tape decoration"
                style={{ top: "-18px", right: "50px", width: "105px", transform: "rotate(30deg)", opacity: 0.85 }}
                className="absolute select-none pointer-events-none z-10 dark:brightness-75"
              />

              {/* Main journal text content */}
              <div className="space-y-6 flex-1 overflow-y-auto pr-2 scrollbar-thin border-l-2 border-red-100 dark:border-red-950/40 pl-6 md:pl-8">
                <div className="space-y-3">
                  <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
                    About me
                  </div>
                  <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text)] leading-tight">
                    My Story & <span className="font-serif italic text-[var(--color-accent)] font-normal">Design Mind</span>
                  </h1>
                  <p className="text-xs md:text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    Product designer focused on building 0→1 consumer and AI products across growth stage startups. Previously contributed to scaling Khyaal from 50K → 5M users, currently designing AI native experiences at Blubeez.
                  </p>
                </div>

                {/* Bento Philosophy Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#FAF9F6] dark:bg-[#121110] border border-[var(--color-border)] rounded-2xl p-5 space-y-2.5 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                    <h3 className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-[var(--color-accent)] animate-pulse" />
                      <span>A Familiar Lightness</span>
                    </h3>
                    <p className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
                      I believe great design is less about rebuilding everything and more about extending what works with fresh accents. Introduce section-level pastel colors to evoke emotion, and let the existing structural tokens carry the cognitive load.
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] dark:bg-[#121110] border border-[var(--color-border)] rounded-2xl p-5 space-y-2.5 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                    <h3 className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>Developer-Friendly</span>
                    </h3>
                    <p className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
                      Framer and Next.js are great partners. My design system files are always organized with consistent spacing systems, typographic hierarchies, and clean layout patterns, ensuring development runs smoothly.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Journal bottom footer */}
              <div className="mt-6 border-t border-[var(--color-border)] pt-4 flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <div>HSK JOURNAL • PAGE 01</div>
                <div>2026-06-06</div>
              </div>
            </div>

            {/* Sticky post-it note: Plant a Seed */}
            <div
              className="absolute bg-[#FFFDE7] dark:bg-[#202018] border border-amber-200/50 dark:border-neutral-800 p-6 shadow-[2px_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[4px_12px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between"
              style={{
                top: journalPositions.seed[mounted ? layoutMode : "default"].top,
                left: journalPositions.seed[mounted ? layoutMode : "default"].left,
                width: journalPositions.seed[mounted ? layoutMode : "default"].width,
                height: journalPositions.seed[mounted ? layoutMode : "default"].height,
                transform: "rotate(-1deg)",
              }}
            >
              {/* Post-it tape overlay */}
              <img
                src={`${IMAGES_PREFIX}Wy5i0mCB4GamWDmdQKe4pEb3AQs.svg`}
                alt="Tape decoration"
                style={{ top: "-18px", left: "20%", width: "95px", transform: "rotate(2deg)", opacity: 0.8 }}
                className="absolute select-none pointer-events-none z-10 dark:brightness-75"
              />

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-neutral-800 dark:text-neutral-200">
                    Plant a Seed! 🌱
                  </h3>
                  <p className="text-[10px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Click the button to plant a seed and watch something grow here! A small interactive space representing micro-developments.
                  </p>
                </div>

                {/* Render Plant Emojis */}
                <div className="flex flex-wrap justify-start gap-1.5 min-h-[4rem] max-h-[8rem] overflow-y-auto p-2 border border-dashed border-amber-200/70 dark:border-neutral-800 rounded-lg bg-[#FFFBE2] dark:bg-[#1A1A14]">
                  {seeds.length === 0 ? (
                    <span className="text-[10px] italic text-neutral-400 dark:text-neutral-600 self-center mx-auto">Empty pot...</span>
                  ) : (
                    seeds.map((plant, idx) => (
                      <span key={idx} className="text-xl inline-block transform hover:scale-125 transition-transform duration-200 animate-[bounce_1s_infinite]">
                        {plant}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <button
                onClick={plantSeed}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black py-2 text-xs font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer shadow-sm mt-3"
              >
                <Heart className="h-3 w-3 fill-red-500 text-red-500 animate-pulse" />
                <span>Plant Seed</span>
              </button>
            </div>

            {/* 9 Scattered Polaroid Cards */}
            {polaroidsData.map((card) => {
              const activePos = cardPositions[card.id][mounted ? layoutMode : "default"];
              const currentIndex = indexes[card.id];

              return (
                <div
                  key={card.id}
                  onClick={() => cycleImage(card.id)}
                  className="absolute cursor-pointer select-none group"
                  style={{
                    top: activePos.top,
                    left: activePos.left,
                    width: activePos.width,
                    height: activePos.height,
                    transform: card.rotation,
                    zIndex: 20,
                  }}
                >
                  {/* Decorative Pin and Tape Overlays */}
                  {card.decorations.map((decor, idx) => (
                    <img
                      key={idx}
                      src={decor.src}
                      style={decor.style}
                      className="absolute select-none pointer-events-none z-30 dark:brightness-75"
                      alt="Card decoration decoration"
                    />
                  ))}

                  {/* Polaroid Main Stack Card */}
                  <div className="w-full h-full p-3.5 pb-10 flex flex-col bg-[#FCF9F5] dark:bg-[#1D1B1A] border border-neutral-300/50 dark:border-neutral-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] group-hover:scale-[1.015] transition-all duration-300 relative rounded-sm">
                    
                    {/* Shadow sheets stack effect behind card for high-fidelity look */}
                    {card.images.length > 1 && (
                      <>
                        <div
                          className="absolute inset-0 bg-[#FCF9F5] dark:bg-[#1D1B1A] border border-neutral-300/40 dark:border-neutral-800/60 shadow-sm rounded-sm"
                          style={{
                            transform: "rotate(2deg) translate(1px, 2px)",
                            zIndex: -1,
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-[#FCF9F5] dark:bg-[#1D1B1A] border border-neutral-300/40 dark:border-neutral-800/60 shadow-sm rounded-sm"
                          style={{
                            transform: "rotate(-1.5deg) translate(-2px, 1px)",
                            zIndex: -2,
                          }}
                        />
                      </>
                    )}

                    {/* Image Area container with Polaroid photo inset aspect */}
                    <div className="relative flex-1 bg-neutral-100 dark:bg-neutral-900 overflow-hidden border border-neutral-200/50 dark:border-neutral-800 rounded-sm">
                      
                      {/* Smooth crossfade animate presence for cycling image stacks */}
                      <AnimatePresence mode="popLayout">
                        <motion.img
                          key={currentIndex}
                          src={card.images[currentIndex]}
                          alt={card.title}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                        />
                      </AnimatePresence>

                      {/* Small camera/photos stack label inside photo corner */}
                      <div className="absolute top-2 right-2 bg-black/40 text-[9px] text-white px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <Camera className="w-2.5 h-2.5" />
                        <span>
                          {currentIndex + 1}/{card.images.length}
                        </span>
                      </div>
                    </div>

                    {/* Handwritten Caption at Polaroid frame footer */}
                    <div
                      className="text-center font-handwritten text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mt-3 h-5 flex items-center justify-center pointer-events-none"
                      style={{ fontFamily: "var(--font-handwritten)" }}
                    >
                      {card.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Rotating Marquee Badge - Pinned to the screen corner */}
        <div className="fixed bottom-6 right-6 z-40 pointer-events-none select-none">
          <div className="relative flex items-center justify-center">
            {/* Spinning Text SVG */}
            <svg viewBox="0 0 100 100" className="w-28 h-28 md:w-36 md:h-36 animate-[spin_20s_linear_infinite]">
              <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[7.2px] tracking-[0.16em] uppercase fill-neutral-600 dark:fill-neutral-400 font-bold" style={{ fontFamily: "var(--font-handwritten)" }}>
                <textPath href="#circlePath">
                  please flip through the book • please flip through the book •
                </textPath>
              </text>
            </svg>
            
            {/* Center interactive compass/finger helper badge */}
            <div className="absolute w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200/60 dark:border-neutral-700 flex items-center justify-center">
              <Compass className="w-4 h-4 text-[var(--color-accent)] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Floating Instruction Pill helper at bottom */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-neutral-900/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200/50 dark:border-neutral-800 text-[10px] md:text-xs font-semibold text-neutral-500 dark:text-neutral-400 shadow-sm z-40 pointer-events-none select-none flex items-center gap-2.5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping" />
            🖱️ Click & drag background to pan canvas
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span>📸 Click polaroids to flip photo stack</span>
        </div>
      </main>
    </div>
  );
}
