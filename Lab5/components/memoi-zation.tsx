"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { useMemoization } from "@/hooks/useMemoization";

export default function MouseEvents() {
  const [isHover, setIsHover] = useState(false);

  const boxClass = useMemoization(isHover);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 3: Implementing Memoization with useMemo</CardTitle>
        <CardDescription>
          Di chuột vào box bên dưới để thay đổi màu nền. Style của box được
          tính toán bằng useMemo để tránh tính toán lại không cần thiết.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className={boxClass}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Hover Me!
        </div>
      </CardContent>
    </Card>
  );
}
