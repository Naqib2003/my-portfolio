"use client";
import React, { useState } from "react";
import { Zap, AlertTriangle, RotateCcw } from "lucide-react";

export const ReactorCore = () => {
  const [powerOn, setPowerOn] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [overloaded, setOverloaded] = useState(false);

  const handleCoreClick = () => {
    if (overloaded) return;
    const next = clickCount + 1;
    setClickCount(next);

    // Overloads after 5 clicks
    if (next >= 5) {
      setOverloaded(true);
      setPowerOn(false);
    }
  };

  const rebootCore = () => {
    setOverloaded(false);
    setClickCount(0);
    setPowerOn(true);
  };

  return (
    <div
      className={`relative p-6 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between overflow-hidden ${
        overloaded
          ? "bg-red-950/40 border-red-500/50 shadow-lg shadow-red-900/30"
          : powerOn
          ? "bg-slate-900/60 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
          : "bg-slate-950 border-slate-800"
      } backdrop-blur-xl`}
    >
      <div className="flex items-center justify-between z-10">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-mono flex items-center gap-1.5">
          <Zap className={`w-4 h-4 ${powerOn ? "text-cyan-400" : "text-slate-600"}`} />
          Lab Power Matrix
        </span>
        <button
          onClick={() => !overloaded && setPowerOn(!powerOn)}
          disabled={overloaded}
          className={`text-xs px-2.5 py-1 rounded-full font-mono transition-colors ${
            powerOn
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          {overloaded ? "FUSE BLOWN" : powerOn ? "ONLINE" : "OFFLINE"}
        </button>
      </div>

      <div className="my-6 flex flex-col items-center justify-center z-10">
        <button
          onClick={handleCoreClick}
          className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-transform active:scale-90 cursor-pointer ${
            overloaded
              ? "bg-red-900/60 border-2 border-red-500 animate-pulse"
              : powerOn
              ? "bg-cyan-950/80 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)]"
              : "bg-slate-800 border-2 border-slate-700 opacity-50"
          }`}
          title="Click repeatedly to simulate surge overload"
        >
          {overloaded ? (
            <AlertTriangle className="w-10 h-10 text-red-400 animate-bounce" />
          ) : (
            <div
              className={`w-10 h-10 rounded-full ${
                powerOn ? "bg-cyan-400 animate-ping" : "bg-slate-600"
              }`}
            />
          )}
        </button>
        <span className="text-xs text-slate-400 mt-3 font-mono">
          {overloaded
            ? "⚠️ Fuse blown! Power disrupted."
            : clickCount > 0
            ? `Surge Load: ${clickCount * 20}%`
            : "Click core to surge power"}
        </span>
      </div>

      {overloaded ? (
        <button
          onClick={rebootCore}
          className="z-10 flex items-center justify-center gap-2 py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Replace Fuse & Reboot Core
        </button>
      ) : (
        <div className="text-[11px] text-slate-500 font-mono text-center">
          Interactive Lab Unit • Quazi Naqibul Alam
        </div>
      )}
    </div>
  );
};