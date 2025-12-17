"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

export default function SearchDebounce() {
  const { value, setValue, loading, results } = useSearch(500);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 5: Debouncing Search</CardTitle>
        <CardDescription>
       Nhập từ khóa để tìm kiếm. Chức năng tìm kiếm sẽ chỉ được thực hiện sau khi bạn ngừng gõ 500ms, giúp tránh gọi API quá nhiều lần.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        
         <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="pl-10"
          />
        </div>

            {loading && (
          <div className="flex justify-center py-4">
            <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}


        {!loading &&
          results.map((item, index) => (
            <div key={index} className="p-3 border rounded bg-muted">
              <div className="font-semibold">{item}</div>
              <div className="text-sm text-muted-foreground">
                Mô tả chi tiết cho kết quả tìm kiếm {index + 1}
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
