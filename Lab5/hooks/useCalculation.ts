"use client";

import { useMemo } from "react";

export function useCalculation(list: string[]) {
  const sum = useMemo(() => {
    console.log("Tính lại tổng");

    return list.reduce((total, item) => {
      const num = Number(item);
      return isNaN(num) ? total : total + num;
    }, 0);
  }, [list]);

  return sum;
}