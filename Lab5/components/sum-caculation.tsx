"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useCalculation } from "@/hooks/useCalculation";

export default function SumCalculation() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  const sum = useCalculation(list);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 4: Sum Calculation</CardTitle>
        <CardDescription>
         Nhập số và nhấn Enter để thêm vào danh sách. Tổng các số sẽ được tính toán tự động bằng useMemo để tránh tính toán lại không cần thiết.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
       
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Nhập số..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && value.trim() !== "") {
                setList([...list, value]);
                setValue("");
              }
            }}
          />

          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => {
              if (value.trim() === "") return;
              setList([...list, value]);
              setValue("");
            }}
          >
            
            Thêm
          </button>
        </div>

    
        <div className="space-y-2">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded border bg-muted"
            >
              <span>
                {index + 1}. {item}
              </span>

              <button
                className="text-red-500 font-semibold"
                onClick={() =>
                  setList(list.filter((_, i) => i !== index))
                }
              >
                XÓA
              </button>
            </div>
          ))}
        </div>

       
        <div className="font-semibold">
          Tổng: <span className="text-blue-600">{sum}</span>
        </div>
      </CardContent>
    </Card>
  );
}
