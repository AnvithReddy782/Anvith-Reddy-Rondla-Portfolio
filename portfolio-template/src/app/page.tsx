"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeInUp from "../components/FadeInUp";
import TimezoneClock from "../components/TimezoneClock";
import Sketchpad from "../components/Sketchpad";
import { ArrowUpRight, Folder, Sparkles, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialCanvasX = 0;
const initialCanvasY = 850;

interface FolderCardProps {
  name: string;
  label: string;
  sublabel?: string;
  link: string;
  initialX: number;
  initialY: number;
  rotate: number;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  selectedFolder: string | null;
  setSelectedFolder: (folder: string | null) => void;
}

const FolderCard = ({
  name,
  label,
  sublabel,
  link,
  initialX,
  initialY,
  rotate,
  canvasRef,
  selectedFolder,
  setSelectedFolder,
}: FolderCardProps) => {
  const isSelected = selectedFolder === name;

  return (
    <motion.div
      drag
      dragConstraints={canvasRef}
      dragElastic={0.05}
      dragMomentum={false}
      initial={{ x: initialX, y: initialY, rotate: rotate, scale: 1.6 }}
      whileHover={{ scale: 1.7 }}
      whileDrag={{ scale: 1.8, cursor: "grabbing" }}
      className={`absolute left-1/2 top-1/2 -ml-10 -mt-12 w-20 flex flex-col items-center justify-center p-2 rounded-xl transition-colors cursor-grab active:cursor-grabbing select-none z-10 ${
        isSelected ? "bg-blue-500/15 border border-blue-500/30" : "hover:bg-neutral-500/5"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedFolder(name);
      }}
      onDoubleClick={() => {
        window.location.href = link;
      }}
    >
      <img
        src="/folder_icon.svg"
        className="w-12 h-12 object-contain select-none pointer-events-none"
        alt=""
      />
      <div className="mt-1 flex flex-col items-center">
        <span
          className={`px-1.5 py-0.5 rounded text-[10px] font-bold text-center leading-none select-none font-mono ${
            isSelected
              ? "bg-[#E75D0B] text-white"
              : "text-[#1F1E1B]"
          }`}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-[8px] font-mono text-[#807A70] mt-0.5 select-none uppercase font-bold">
            {sublabel}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [todoList, setTodoList] = useState([
    { text: "Deploy Blubeez feature updates", completed: true },
    { text: "Map user flows for upcoming sprint features", completed: true },
    { text: "Work on community garden", completed: false },
    { text: "Finish up case studies - portfolio", completed: false },
  ]);

  const [activeFinderTab, setActiveFinderTab] = useState<"work" | "sketch">("work");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  // Resize scaling handler for Bento Grid
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 902) {
        const padding = w < 640 ? 24 : 48;
        const availableWidth = Math.max(300, w - padding);
        setScale(availableWidth / 902);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTodo = (index: number) => {
    const newList = [...todoList];
    newList[index].completed = !newList[index].completed;
    setTodoList(newList);
  };

  const desktopConstraintsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 flex flex-col overflow-x-hidden">
      <Header />

      {/* Main Spacing for Hero positioning */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-12">
        
        {/* Style block for Bento absolute grid positions */}
        <style>{`
          .bento-wrapper {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .bento-container {
            width: 902px;
            height: 736px;
            position: relative;
            flex-shrink: 0;
            overflow: visible;
          }

          /* Default Desktop Coordinates (>= 1200px) */
          .bento-hero {
            position: absolute;
            z-index: 2;
            width: 328px;
            height: auto;
            top: -590px;
            left: 50%;
            transform: translateX(-50%);
          }
          .bento-todo {
            position: absolute;
            z-index: 1;
            width: 554px;
            height: 220px;
            top: 158px;
            left: 65px;
          }
          .bento-clock {
            position: absolute;
            z-index: 1;
            width: 160px;
            height: 197px;
            top: 155px;
            left: 651px;
          }
          .bento-tags {
            position: absolute;
            z-index: 1;
            width: auto;
            height: auto;
            bottom: 113px;
            left: 27px;
          }
          .bento-since-when {
            position: absolute;
            width: min-content;
            height: min-content;
            bottom: 296px;
            left: 679px;
          }
          .bento-work-on {
            position: absolute;
            width: max-content;
            height: min-content;
            bottom: 292px;
            left: 59px;
          }
          .bento-where-from {
            position: absolute;
            width: min-content;
            height: min-content;
            top: 104px;
            left: 634px;
          }
          .bento-todo-sticker {
            position: absolute;
            width: min-content;
            height: min-content;
            top: 97px;
            left: 91px;
          }
          .bento-cv {
            position: absolute;
            width: auto;
            height: auto;
            bottom: 114px;
            left: 50%;
            transform: translateX(-50%);
          }
          .bento-metric {
            position: absolute;
            width: 234px;
            height: 149px;
            bottom: 125px;
            left: 642px;
          }
          .bento-rainbow {
            position: absolute;
            z-index: 0;
            width: 995px;
            height: 1010px;
            bottom: -397px;
            left: 53%;
            transform: translateX(-50%);
          }

          /* Tablet Coordinates (810px to 1199.98px) */
          @media (min-width: 810px) and (max-width: 1199.98px) {
            .bento-hero {
              top: -506px;
              left: 48%;
            }
            .bento-todo {
              top: 97px;
              left: 102px;
              right: 102px;
              width: auto;
              height: 178px;
            }
            .bento-clock {
              top: 105px;
              left: 608px;
              width: 160px;
              height: 197px;
            }
            .bento-tags {
              bottom: -56px;
              left: 66px;
            }
            .bento-since-when {
              bottom: 137px;
              left: 630px;
            }
            .bento-work-on {
              bottom: 134px;
              left: 100px;
            }
            .bento-where-from {
              top: 65px;
              left: 587px;
            }
            .bento-todo-sticker {
              top: 30px;
              left: 165px;
            }
            .bento-cv {
              bottom: -36px;
            }
            .bento-metric {
              bottom: -49px;
              left: 593px;
              width: 234px;
              height: 149px;
            }
          }

          /* Mobile Coordinates (< 810px) */
          @media (max-width: 809.98px) {
            .bento-hero {
              top: -196px;
              left: 49%;
              width: auto;
            }
            .bento-todo {
              top: 73px;
              left: 254px;
              right: 254px;
              width: auto;
              height: 178px;
            }
            .bento-clock {
              top: 73px;
              left: 536px;
              width: 110px;
              height: 134px;
            }
            .bento-tags {
              bottom: 113px;
              left: 273px;
            }
            .bento-since-when {
              bottom: 234px;
              left: 544px;
            }
            .bento-work-on {
              bottom: 237px;
              left: 291px;
            }
            .bento-where-from {
              top: 23px;
              left: 522px;
            }
            .bento-todo-sticker {
              top: 19px;
              left: 291px;
            }
            .bento-cv {
              bottom: 49px;
              height: 32px;
            }
            .bento-metric {
              bottom: 121px;
              left: 485px;
              width: 142px;
              height: 91px;
            }
          }
        `}</style>

        {/* 1. Bento Grid Component Wrapper */}
        <div 
          className={`bento-wrapper transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{
            height: `${736 * scale}px`,
            marginTop: `${620 * scale}px`,
            marginBottom: `${80 * scale}px`,
          }}
        >
          <div
            className="bento-container"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            {/* Rainbow BG */}
            <div className="bento-rainbow select-none pointer-events-none opacity-40">
              <img src="/rainbow_bg.svg" alt="" className="w-full h-full object-contain" />
            </div>

            {/* Hero ID Card */}
            <div className="bento-hero">
              {/* Card Header lanyard attachment */}
              <div className="flex flex-col items-center relative -bottom-2 z-10">
                <div 
                  className="w-16 h-8 rounded-t-xl shadow-md flex items-center justify-center" 
                  style={{ backgroundColor: 'rgb(124, 118, 110)' }}
                >
                  <div className="w-8 h-2.5 rounded-full bg-[#1F1E1B] opacity-60 border border-white/20"></div>
                </div>
              </div>

              {/* ID Badge Frame */}
              <div 
                className="bg-[#FAF6F0] border border-[#CECAC3] rounded-[32px] p-6 shadow-[20px_16px_40px_rgba(0,0,0,0.18)]"
              >
                {/* Vertical Portrait Photo */}
                <div className="relative overflow-hidden rounded-[20px] bg-neutral-100 border border-[#CECAC3] aspect-[3/4]">
                  <img 
                    src="https://framerusercontent.com/images/32Yr1ZQCIergFg0HpTDj2Vw4N0.png" 
                    alt="Harini Portrait" 
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>

                {/* Line Decoration */}
                <div className="h-[1px] bg-[#CECAC3] my-5 relative">
                  <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-[#CECAC3]"></div>
                </div>

                {/* Text Labels */}
                <div className="text-center space-y-1">
                  <h1 className="font-serif italic text-3xl font-extrabold tracking-tight text-[#1F1E1B] leading-none">
                    Harini
                  </h1>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E75D0B]">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Sticker: My current to-do list */}
            <div className="bento-todo-sticker flex flex-col items-start select-none">
              <span className="font-handwritten text-sm text-[#807A70] rotate-[-5deg]">My current to-do list</span>
              <img src="/todo_arrow.svg" alt="" className="w-10 h-auto mt-1 opacity-70 pointer-events-none" />
            </div>

            {/* Todo Checklist Container */}
            <div className="bento-todo">
              <div className="bg-[#FFF3EB] border border-[#E8D5CA] rounded-[28px] p-6 shadow-[4px_6px_12px_rgba(231,93,11,0.04)] flex flex-col justify-between h-full hover:border-[#EDB798] transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8D5CA]/60 pb-2.5">
                    <span className="text-[10px] font-bold font-mono text-[#A67E67] uppercase tracking-wider">Interactive Tasks</span>
                    <span className="text-[10px] font-bold font-mono text-[#E75D0B] bg-white px-2 py-0.5 rounded-full border border-[#E8D5CA]">
                      {todoList.filter(t => t.completed).length}/{todoList.length} Done
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5 pt-1">
                    {todoList.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => toggleTodo(index)}
                        className="flex items-start gap-3 cursor-pointer select-none group"
                      >
                        <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                          item.completed 
                            ? "bg-[#E75D0B] border-[#E75D0B] text-white shadow-sm" 
                            : "border-[#CECAC3] bg-white group-hover:border-[#E75D0B]"
                        }`}>
                          {item.completed && <span className="text-[10px] font-bold">✓</span>}
                        </span>
                        <span className={`text-[11px] leading-snug transition-all duration-200 ${
                          item.completed 
                            ? "line-through text-[#A67E67] opacity-60" 
                            : "text-[#544F47] font-semibold group-hover:text-[#1F1E1B]"
                        }`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sticker: Where am I from? */}
            <div className="bento-where-from flex flex-col items-end select-none">
              <span className="font-handwritten text-sm text-[#807A70] rotate-[4deg]">Where am i from?</span>
              <img src="/where_from_arrow.svg" alt="" className="w-10 h-auto mt-1 opacity-70 pointer-events-none" />
            </div>

            {/* Postage Stamp Timezone Clock */}
            <div className="bento-clock">
              <TimezoneClock />
            </div>

            {/* Sticker: What do I work on? */}
            <div className="bento-work-on flex items-center gap-2 bg-[#FAF6F0] border border-[#CECAC3] px-3.5 py-1.5 rounded-2xl shadow-sm rotate-[-3deg] select-none hover:rotate-0 transition-transform duration-300">
              <Folder className="w-3.5 h-3.5 text-[#E75D0B]" />
              <span className="font-mono text-[9px] text-[#544F47] font-extrabold uppercase tracking-wide">What do i work on?</span>
            </div>

            {/* Tag List */}
            <div className="bento-tags flex flex-col gap-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#807A70] font-bold">harini’s work</div>
              <div className="flex flex-wrap gap-1.5 max-w-[280px]">
                {["Visual design", "Design Systems", "Website design", "Branding", "UI & UX"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 text-[10px] font-mono font-bold border border-[#CECAC3] rounded-full bg-[#FAF6F0] text-[#544F47] shadow-sm select-none hover:border-[#1F1E1B] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CV Wrapper */}
            <div className="bento-cv">
              <Link 
                href="/resume" 
                className="px-6 py-2.5 bg-neutral-950 dark:bg-white text-white dark:text-black rounded-full text-xs font-bold hover:bg-[#E75D0B] dark:hover:bg-[#E75D0B] hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-1.5 shadow-md hover:scale-105 transform"
              >
                <span>Download CV</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Sticker: Since when? */}
            <div className="bento-since-when flex flex-col items-center select-none">
              <span className="font-handwritten text-sm text-[#807A70] rotate-[-5deg]">Since when?</span>
              <img src="/since_when_arrow.svg" alt="" className="w-10 h-auto mt-1 opacity-70 pointer-events-none" />
            </div>

            {/* 3+ Years Metric Panel */}
            <div className="bento-metric">
              <div className="bg-[#FFF3EB] border border-[#EDB798] rounded-[28px] p-5 flex flex-col justify-center h-full shadow-sm select-none hover:border-[#E75D0B] transition-colors duration-300">
                <div className="font-heading text-3xl font-extrabold text-[#E75D0B] tracking-tight">3+ Years</div>
                <div className="font-mono text-[9px] text-[#A67E67] uppercase tracking-wider mt-1.5 leading-snug font-extrabold">
                  Consumer, fintech, Conversational AI, ed tech
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mid-Separator Text */}
        <FadeInUp>
          <div className="text-center py-6 max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-[#1F1E1B]">
              3+ Years Building &amp; Scaling Early-Stage Products.
            </h2>
            <p className="text-xs text-[#544F47] font-mono leading-relaxed">
              Drag, zoom, draw or inspect folders below to navigate my key product case studies.
            </p>
          </div>
        </FadeInUp>

        {/* 2. Finder-style Projects Section */}
        <section className="space-y-6">
          <FadeInUp>
            {/* macOS Finder window container */}
            <div className="bg-[#FCF9F5] border border-[#CECAC3] rounded-3xl shadow-xl overflow-hidden flex flex-col h-[650px] w-full">
              
              {/* Window Title Bar */}
              <div className="bg-[#F0ECE6] border-b border-[#CECAC3] h-11 px-4 flex items-center justify-between shrink-0 select-none">
                {/* Close, Minimize, Expand Window Dots */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer" title="Close"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer" title="Minimize"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer" title="Zoom"></div>
                </div>

                {/* Window Title */}
                <div className="text-xs font-mono font-bold text-[#544F47]">
                  harini’s work
                </div>

                {/* Right Spacing to center title */}
                <div className="w-14"></div>
              </div>

              {/* Window Layout (Sidebar + Content Pane) */}
              <div className="flex flex-1 min-h-0 flex-col md:flex-row relative">
                
                {/* Left Sidebar */}
                <div className="w-full md:w-56 bg-[#EBE5DC] md:border-r border-b md:border-b-0 border-[#CECAC3] flex flex-row md:flex-col p-2 gap-1.5 md:p-3 select-none overflow-x-auto md:overflow-x-visible">
                  
                  {/* Favourites Section */}
                  <div className="flex flex-row md:flex-col w-full gap-1">
                    <div className="hidden md:block text-[8px] font-bold tracking-widest text-[#807A70] font-mono uppercase px-2 pt-2 pb-1.5">
                      favourites
                    </div>
                    <button
                      onClick={() => setActiveFinderTab("work")}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold w-full text-left transition-colors cursor-pointer shrink-0 ${
                        activeFinderTab === "work"
                          ? "bg-[#CECAC3]/40 text-[#1F1E1B]"
                          : "text-[#544F47] hover:bg-[#CECAC3]/20"
                      }`}
                    >
                      <Folder className="w-3.5 h-3.5 text-[#E75D0B]" />
                      <span>Work projects</span>
                    </button>
                  </div>

                  {/* Explore Section */}
                  <div className="flex flex-row md:flex-col w-full gap-1">
                    <div className="hidden md:block text-[8px] font-bold tracking-widest text-[#807A70] font-mono uppercase px-2 pt-4 pb-1.5">
                      Explore
                    </div>
                    <button
                      onClick={() => setActiveFinderTab("sketch")}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold w-full text-left transition-colors cursor-pointer shrink-0 ${
                        activeFinderTab === "sketch"
                          ? "bg-[#CECAC3]/40 text-[#1F1E1B]"
                          : "text-[#544F47] hover:bg-[#CECAC3]/20"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E75D0B]" />
                      <span>leave a sketch</span>
                    </button>
                  </div>
                </div>

                {/* Right Content Pane */}
                <div 
                  ref={desktopConstraintsRef}
                  className="flex-1 bg-[#FCF9F5] relative overflow-hidden select-none"
                >
                  <AnimatePresence mode="wait">
                    {activeFinderTab === "work" ? (
                      /* Draggable Folder Desktop Canvas (Tab A) */
                      <motion.div
                        key="canvas-tab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full relative"
                        onClick={() => setSelectedFolder(null)}
                      >
                        {/* Desktop Background Canvas */}
                        <motion.div
                          ref={canvasRef}
                          drag
                          dragConstraints={{ left: -1400, right: 1400, top: 100, bottom: 1400 }}
                          dragElastic={0.1}
                          dragMomentum={true}
                          initial={{ x: initialCanvasX, y: initialCanvasY }}
                          className="absolute w-[3200px] h-[2200px] cursor-grab active:cursor-grabbing origin-center"
                          style={{
                            backgroundImage: "radial-gradient(#CECAC3 1.5px, transparent 1.5px)",
                            backgroundSize: "32px 32px",
                            left: "50%",
                            top: "50%",
                            marginLeft: "-1600px",
                            marginTop: "-1100px"
                          }}
                        >
                          {/* Instructions Overlay */}
                          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none p-4 max-w-sm select-none">
                            <p className="text-[10px] font-mono font-bold text-[#807A70] uppercase tracking-widest leading-relaxed">
                              ✦ drag background to explore ✦
                            </p>
                            <p className="text-[9px] font-mono text-[#807A70] uppercase tracking-widest leading-relaxed mt-1">
                              double-click folders to open case studies
                            </p>
                          </div>

                          {/* Folder cards */}
                          <FolderCard
                            name="khyaal"
                            label="Khyaal"
                            link="/khyaal-case-study-main"
                            initialX={-773}
                            initialY={-916}
                            rotate={-6}
                            canvasRef={canvasRef}
                            selectedFolder={selectedFolder}
                            setSelectedFolder={setSelectedFolder}
                          />

                          <FolderCard
                            name="blubees"
                            label="Blubees"
                            sublabel="Wip"
                            link="/my-work"
                            initialX={-1079}
                            initialY={-755}
                            rotate={-6}
                            canvasRef={canvasRef}
                            selectedFolder={selectedFolder}
                            setSelectedFolder={setSelectedFolder}
                          />

                          <FolderCard
                            name="nonlinear"
                            label="Nonlinear"
                            sublabel="Wip"
                            link="/my-work"
                            initialX={1020}
                            initialY={-911}
                            rotate={11}
                            canvasRef={canvasRef}
                            selectedFolder={selectedFolder}
                            setSelectedFolder={setSelectedFolder}
                          />

                          <FolderCard
                            name="others"
                            label="Others"
                            sublabel="Wip"
                            link="/my-work"
                            initialX={1312}
                            initialY={-844}
                            rotate={-10}
                            canvasRef={canvasRef}
                            selectedFolder={selectedFolder}
                            setSelectedFolder={setSelectedFolder}
                          />
                        </motion.div>
                      </motion.div>
                    ) : (
                      /* Interactive Sketchpad (Tab B) */
                      <motion.div
                        key="sketch-tab"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full p-6 overflow-y-auto flex flex-col justify-center items-center"
                      >
                        <div className="max-w-xl w-full">
                          <Sketchpad />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </FadeInUp>
        </section>

        {/* Collaborators' Testimonial Notes */}
        <section className="space-y-6">
          <FadeInUp>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--color-text)]">
              Collaborator Notes
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Subrojith Dasgupta testimonial */}
            <FadeInUp>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-3xl p-6 space-y-4 shadow-sm relative overflow-hidden group hover:border-[var(--color-border-hover)] transition-all duration-300">
                <div className="absolute top-0 right-0 h-16 w-16 bg-neutral-100 dark:bg-neutral-800 border-l border-b border-[var(--color-border)] flex items-center justify-center rounded-bl-3xl">
                  <Award className="h-6 w-6 text-[#E75D0B]" />
                </div>
                
                <p className="text-xs leading-relaxed italic text-[var(--color-text-secondary)] pr-12">
                  "Working with Harini was one of the most collaborative and creatively rewarding experiences. She has a very artistic approach to design... Her file structures were organized, scalable, and easy to work with, following consistent spacing systems that made development much more efficient."
                </p>
                <div className="border-t border-[var(--color-border)] pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-semibold">
                  <div className="text-[var(--color-text)]">Subrojith Dasgupta</div>
                  <div className="text-[var(--color-text-muted)] font-mono text-[11px]">Senior Dev @ Khyaal</div>
                </div>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Anupama Bandopadyay */}
              <FadeInUp delay={0.05}>
                <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-3xl p-6 flex flex-col justify-between h-44 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                  <p className="text-xs leading-relaxed italic text-[var(--color-text-secondary)]">
                    "Harini was patient, clear, and genuinely invested in helping me grow. She explained her design decisions well and gave feedback that was constructive without being prescriptive."
                  </p>
                  <div className="border-t border-[var(--color-border)] pt-3 text-xs font-semibold space-y-0.5 mt-auto">
                    <div className="text-[var(--color-text)]">Anupama Bandopadyay</div>
                    <div className="text-[var(--color-text-muted)] font-mono text-[10px]">Senior Designer @ Khyaal</div>
                  </div>
                </div>
              </FadeInUp>

              {/* Usha Gattigere */}
              <FadeInUp delay={0.1}>
                <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-3xl p-6 flex flex-col justify-between h-44 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                  <p className="text-xs leading-relaxed italic text-[var(--color-text-secondary)]">
                    "Harini turned our ideas into a gorgeous, sleek web design that is both highly functional and visually captivating. She has an amazing ability to capture the exact vibe and strategic direction of a project from day one."
                  </p>
                  <div className="border-t border border-[var(--color-border)] pt-3 text-xs font-semibold space-y-0.5 mt-auto">
                    <div className="text-[var(--color-text)]">Usha Gattigere</div>
                    <div className="text-[var(--color-text-muted)] font-mono text-[10px]">Founder @ Blubees</div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
