"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  count: number;
  max?: number;
  className?: string;
}

export const Badge = ({
  count,
  max = 99,
  className,
}: BadgeProps) => {
  if (count === 0) return null;

  const displayCount = count > max ? `${max}+` : count;

  return (
    <span
      className={cn(
        "inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-destructive px-1.5 text-[11px] font-medium text-destructive-foreground",
        className
      )}
    >
      {displayCount}
    </span>
  );
};
