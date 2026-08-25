"use client";

import React, { useRef, useState, useEffect } from "react";
import { Trash2, Edit2, Check } from "lucide-react";

export default function Sketchpad() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("#E75D0B"); // default orange accent
  const [penSize, setPenSize] = useState(3);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);

  const colors = [
    { value: "#1F1E1B", label: "Dark" },
    { value: "#E75D0B", label: "Orange" },
    { value: "#316E4D", label: "Green" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI screens
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.scale(2, 2);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;

    // Fill background with elevated bg color
    ctx.fillStyle = "#FCF9F5";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
  }, [penColor, penSize]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    setIsDrawing(true);
    setIsCanvasEmpty(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = "#FCF9F5";
    ctx.fillRect(0, 0, rect.width, rect.height);
    setIsCanvasEmpty(true);
  };

  return (
    <div className="space-y-4 w-full">
      {/* Control bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4 rounded-2xl shadow-sm text-xs font-semibold">
        <div className="flex items-center gap-4">
          {/* Colors */}
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-text-muted)] font-mono text-[10px]">COLOR:</span>
            <div className="flex gap-1.5">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setPenColor(c.value)}
                  className="w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: c.value }}
                  aria-label={c.label}
                >
                  {penColor === c.value && (
                    <Check className={`h-3 w-3 ${c.value === "#FCF9F5" ? "text-black" : "text-white"}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="flex items-center gap-2 border-l border-[var(--color-border)] pl-4">
            <span className="text-[var(--color-text-muted)] font-mono text-[10px]">PEN SIZE:</span>
            <input
              type="range"
              min="1"
              max="10"
              value={penSize}
              onChange={(e) => setPenSize(parseInt(e.target.value))}
              className="w-20 accent-[var(--color-accent)] cursor-pointer"
            />
            <span className="font-mono text-[10px] text-[var(--color-text-secondary)]">{penSize}px</span>
          </div>
        </div>

        {/* Clear */}
        <button
          onClick={clearCanvas}
          disabled={isCanvasEmpty}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] hover:border-red-500 hover:text-red-500 disabled:opacity-50 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-4 py-2 transition-colors duration-200 cursor-pointer text-[11px]"
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Clear Canvas</span>
        </button>
      </div>

      {/* Canvas Drawing Area */}
      <div className="relative border border-[var(--color-border)] bg-[#FCF9F5] rounded-3xl overflow-hidden h-[350px] shadow-inner select-none cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full block"
        />

        {isCanvasEmpty && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-6 space-y-2 select-none">
            <Edit2 className="h-8 w-8 text-[var(--color-text-muted)] animate-bounce" />
            <h4 className="font-heading text-sm font-bold text-[var(--color-text-muted)]">
              Leave a Sketch
            </h4>
            <p className="text-[10px] text-[var(--color-text-muted)] font-mono max-w-[250px] leading-relaxed">
              Use your mouse or touchscreen to draw a message, logo, or signature on my portfolio board!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
