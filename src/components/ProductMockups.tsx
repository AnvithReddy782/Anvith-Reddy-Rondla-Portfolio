"use client";

import React from "react";
import { 
  CheckCircle2, 
  MapPin, 
  Camera, 
  Wifi, 
  ShieldCheck, 
  Search, 
  Database, 
  Sparkles,
  ShoppingBag,
  Radio,
  Check,
  Clock
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DpmumsMockup() {
  return (
    <Card className="overflow-hidden border-line bg-sunk shadow-xs">
      {/* Top Device Status Bar */}
      <div className="flex items-center justify-between border-b border-line bg-surface/90 px-4 py-2.5 font-mono text-[11px] text-muted">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-signal" />
          <span className="text-text font-medium">DPMUMS Mobile v1.4</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-signal">
            <Wifi size={12} /> Live Hub Sync
          </span>
          <span>Patna, Bihar</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Verification Summary Card */}
        <div className="border border-line bg-surface p-3.5 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Geofence Status</span>
              <div className="mt-0.5 flex items-center gap-1.5 font-heading text-sm font-semibold text-text">
                <MapPin size={14} className="text-accent" />
                <span>Patna District Office (Radius 100m)</span>
              </div>
            </div>
            <Badge variant="signal">
              <CheckCircle2 size={11} /> INSIDE (34m)
            </Badge>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs sm:grid-cols-3">
            <div className="border border-line/60 bg-sunk/60 p-2">
              <span className="block text-[10px] text-muted">GPS Accuracy</span>
              <span className="font-medium text-text">25.5941° N, 85.13° E</span>
            </div>
            <div className="border border-line/60 bg-sunk/60 p-2">
              <span className="block text-[10px] text-muted">Camera Identity</span>
              <span className="flex items-center gap-1 font-medium text-signal">
                <Camera size={11} /> Matched (99.2%)
              </span>
            </div>
            <div className="col-span-2 border border-line/60 bg-sunk/60 p-2 sm:col-span-1">
              <span className="block text-[10px] text-muted">Storage Layer</span>
              <span className="font-medium text-text">IndexedDB Sync</span>
            </div>
          </div>
        </div>

        {/* 4-Slot Attendance Log */}
        <div>
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted">
            Daily Attendance Requirement / 4-Slot Gate
          </span>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { slot: "01. Morning", time: "09:14 AM", status: "VALIDATED", done: true },
              { slot: "02. Midday", time: "01:05 PM", status: "VALIDATED", done: true },
              { slot: "03. Evening", time: "04:30 PM", status: "VALIDATED", done: true },
              { slot: "04. Exit", time: "06:00 PM", status: "PENDING", done: false },
            ].map((s) => (
              <div
                key={s.slot}
                className={`border p-2.5 ${
                  s.done ? "border-line bg-surface" : "border-dashed border-line bg-sunk/40"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-muted">{s.slot}</span>
                  {s.done ? (
                    <Check size={11} className="text-signal" />
                  ) : (
                    <Clock size={11} className="text-faint" />
                  )}
                </div>
                <span className="mt-1 block font-mono text-xs font-semibold text-text">
                  {s.time}
                </span>
                <span
                  className={`mt-0.5 block font-mono text-[9px] uppercase tracking-wider ${
                    s.done ? "text-signal font-medium" : "text-muted"
                  }`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Offline Queue Bar */}
        <div className="flex items-center justify-between border border-line bg-surface px-3 py-2 font-mono text-xs">
          <span className="flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            IndexedDB Local Cache: 0 records pending
          </span>
          <span className="font-semibold text-accent">Auto-Sync Active</span>
        </div>
      </div>
    </Card>
  );
}

export function AnnapurnaMockup() {
  return (
    <Card className="overflow-hidden border-line bg-sunk shadow-xs">
      <div className="flex items-center justify-between border-b border-line bg-surface/90 px-4 py-2.5 font-mono text-[11px] text-muted">
        <div className="flex items-center gap-2">
          <ShoppingBag size={13} className="text-accent" />
          <span className="font-heading font-semibold tracking-wide text-text">ANNAPURNA COLLECTIONS</span>
        </div>
        <Badge variant="signal">
          <ShieldCheck size={11} /> Razorpay Verified
        </Badge>
      </div>

      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-stretch">
          {/* Product Preview Left */}
          <div className="flex flex-col justify-between border border-line bg-surface p-4 sm:col-span-7">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Heritage Collection</span>
                  <h4 className="font-heading text-base font-semibold text-text">Temple Kundan Choker</h4>
                </div>
                <span className="font-mono text-sm font-semibold text-text">₹42,500</span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-secondary">
                Handcrafted gold foil kundan with emerald drops. Managed via Sanity GROQ schema.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="border border-line bg-sunk px-2 py-0.5 text-muted">22K Gold Foil</span>
              <span className="border border-line bg-sunk px-2 py-0.5 text-muted">Sanity ID: prd_8921</span>
              <span className="border border-line bg-sunk px-2 py-0.5 text-signal font-medium">In Stock (12)</span>
            </div>
          </div>

          {/* Cart Engine & Verification Right */}
          <div className="flex flex-col justify-between space-y-2 border border-line bg-surface p-4 sm:col-span-5">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Server Cart Calculation</span>
              <div className="mt-2 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>₹42,500</span>
                </div>
                <div className="flex justify-between text-signal">
                  <span>Coupon: HERITAGE10</span>
                  <span>-₹4,250</span>
                </div>
                <Separator className="my-1.5" />
                <div className="flex justify-between font-semibold text-text">
                  <span>Total Payable</span>
                  <span>₹38,250</span>
                </div>
              </div>
            </div>

            <div className="border-t border-line pt-2.5">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted">
                <span>Webhook Security</span>
                <span className="text-signal font-medium">HMAC SHA256 OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ApaarMockup() {
  return (
    <Card className="overflow-hidden border-line bg-sunk shadow-xs">
      <div className="flex items-center justify-between border-b border-line bg-surface/90 px-4 py-2.5 font-mono text-[11px] text-muted">
        <div className="flex items-center gap-2">
          <Database size={13} className="text-accent" />
          <span className="font-semibold text-text">APAAR Analytics Pipeline</span>
        </div>
        <span className="font-mono text-[10px] text-muted">20,412,890 Records Queryable</span>
      </div>

      <div className="p-4 sm:p-5 space-y-3.5">
        {/* Natural Language Query Input */}
        <div className="flex items-center gap-2.5 border border-line bg-surface p-2.5">
          <Search size={14} className="shrink-0 text-accent" />
          <span className="font-mono text-xs text-text flex-1">
            Compare secondary school enrollment ratios in Nalanda vs Gaya for 2024
          </span>
          <Badge variant="default" className="shrink-0">
            <Sparkles size={10} /> Gemini RAG
          </Badge>
        </div>

        {/* Execution Benchmark */}
        <div className="flex flex-wrap items-center justify-between gap-2 border border-line bg-surface px-3 py-2 font-mono text-xs">
          <span className="text-muted">
            SQL Execution: <span className="font-semibold text-signal">1.82s</span> (Composite Index Hit)
          </span>
          <span className="text-muted">
            Source: <span className="font-medium text-text">Indexed PostgreSQL / 75,000 Schools</span>
          </span>
        </div>

        {/* Data Projection Visualization */}
        <div className="border border-line bg-surface p-3.5">
          <div className="mb-2.5 flex items-center justify-between font-mono text-[11px]">
            <span className="text-muted">District Enrollment Comparison</span>
            <span className="text-signal font-semibold">Accuracy 98.5%</span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div>
              <div className="flex justify-between text-secondary">
                <span>Nalanda District (Secondary)</span>
                <span className="font-medium text-text">92.4% / 312,400 students</span>
              </div>
              <div className="mt-1 h-2 w-full bg-sunk">
                <div className="h-full bg-accent" style={{ width: "92.4%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-secondary">
                <span>Gaya District (Secondary)</span>
                <span className="font-medium text-text">86.1% / 448,100 students</span>
              </div>
              <div className="mt-1 h-2 w-full bg-sunk">
                <div className="h-full bg-signal" style={{ width: "86.1%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function FieldReporterMockup() {
  return (
    <Card className="overflow-hidden border-line bg-sunk shadow-xs">
      <div className="flex items-center justify-between border-b border-line bg-surface/90 px-4 py-2.5 font-mono text-[11px] text-muted">
        <div className="flex items-center gap-2">
          <Radio size={13} className="text-accent" />
          <span className="font-medium text-text">Field Reporter PWA / Telecom Patrol</span>
        </div>
        <Badge variant="signal">
          <CheckCircle2 size={11} /> Offline Ready (idb v3)
        </Badge>
      </div>

      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="border border-line bg-surface p-3">
            <span className="font-mono text-[10px] uppercase text-muted">Active Fiber Span</span>
            <span className="mt-0.5 block font-heading text-sm font-semibold text-text">
              Span #408 (Nalanda to Rajgir)
            </span>
            <span className="mt-1 block font-mono text-[11px] text-secondary">
              Nearest Tower: T-NAL-18 · 140m ahead
            </span>
          </div>

          <div className="border border-line bg-surface p-3">
            <span className="font-mono text-[10px] uppercase text-muted">Offline Queue Status</span>
            <span className="mt-0.5 block font-heading text-sm font-semibold text-signal">
              2 Patrol Logs Cached
            </span>
            <span className="mt-1 block font-mono text-[11px] text-muted">
              Auto-sync triggers on 3G/4G recovery
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
