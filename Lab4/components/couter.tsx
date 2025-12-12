"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [count, setCount] = useState(5); 

  const tang = () => {
    setCount(count + 1);
  };

  const giam = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 5: Counter</CardTitle>
        <CardDescription>
          Sử dụng các button để tăng/giảm giá trị counter
        </CardDescription>
      </CardHeader>

      <CardContent className="flex items-center gap-6 text-2xl">
       
        <Button onClick={giam} className="!bg-red-500 cursor-pointer px-6" >
          — GIẢM
        </Button>

        <div className="font-bold w-10 text-center">
          {count}
        </div>

        <Button onClick={tang} className="!bg-green-500 cursor-pointer px-6">
          + TĂNG
        </Button>
      </CardContent>
    </Card>
  );
}
