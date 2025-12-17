"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCounter } from "@/hooks/useCounter";

export default function Counter() {
  const { count, increase, decrease, clear } = useCounter(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 1: Creating and Using a Counter Hook</CardTitle>
        <CardDescription>
          Sử dụng custom hook useCounter để quản lý state của counter
        </CardDescription>
      </CardHeader>

      <CardContent className="flex items-center gap-6 text-2xl">
        <Button onClick={decrease} className="!bg-green-500 px-6">
          — GIẢM
        </Button>

        <div className="font-bold w-10 text-center">
          {count}
        </div>

        <Button onClick={increase} className="!bg-green-500 px-6">
          + TĂNG
        </Button>

        <Button onClick={clear} className="!bg-gray-500 px-6">
          CLEAR
        </Button>
      </CardContent>
       <CardFooter>  
      <p>giới hạn: -10 đến 10 </p>
      </CardFooter>
    </Card>
  );
}
