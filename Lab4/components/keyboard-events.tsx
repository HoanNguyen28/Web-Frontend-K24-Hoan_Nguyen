"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function KeyboardEvents() {
  const [value, setValue] = useState("");           
  const [list, setList] = useState<string[]>([]);   

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      setList([...list, value]); 
      setValue("");              
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 4: Handling Keyboard Events</CardTitle>
        <CardDescription>
          Nhập text và nhấn Enter để thêm vào danh sách
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Input
            id="input-real-time"
            type="text"
            placeholder="Nhập gì đó..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="space-y-2">
          {list.map((item, index) => (
            <div
              key={index}
              className="p-2 rounded border bg-muted"
            >
              {index+1}. {item}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
