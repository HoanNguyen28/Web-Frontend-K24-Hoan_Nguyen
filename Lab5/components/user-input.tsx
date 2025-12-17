"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserInput } from "@/hooks/useUserInput";

export default function UserInput() {
  const { value, handleChange, showAlert, handleKeyDown } = useUserInput("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 2: Managing User Input with State Hook</CardTitle>
        <CardDescription>
          Sử dụng custom hook để quản lý input
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div className="flex gap-3">
        <Input
          id="input-real-time"
          type="text"
          placeholder="Nhập gì đó..."
          value={value}
          onChange={handleChange}
        onKeyDown={handleKeyDown}
        />

        <Button onClick={showAlert} className="w-fit">
          Hiển thị
        </Button>
        </div>
      </CardContent>

  
    </Card>
    
  );
}
