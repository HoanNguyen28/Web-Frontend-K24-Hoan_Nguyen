"use client";

import { useEffect, useState } from "react";

export default function MouseEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative w-full h-[400px] white rounded-lg overflow-hidden">
      {/* Vệt sáng */}
      <div
        className="pointer-events-none absolute w-40 h-40 rounded-full 
                   bg-black opacity-30 blur-3xl transition-transform duration-75"
        style={{
          transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`
        }}
      ></div>

     
    </div>
  );
}
