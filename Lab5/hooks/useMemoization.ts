
"use client";

import { useMemo } from "react";

export function useMemoization(isHover: boolean) {
  const boxClass = useMemo(() => {
    console.log(" Tính toán style box");

    return `
      w-40 h-40
      ${isHover ? "bg-red-500" : "bg-blue-500"}
      transition-colors duration-300
      rounded-lg
      flex justify-center items-center
      text-sm font-semibold
      text-white
    `;
  }, [isHover]);

  return boxClass;
}
