"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../../../ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  className,
}: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-1 w-full ",
        className
      )}
    >
      <Search size={18} className="text-muted-foreground " />
    <Input
    value={value}
   onChange={(e) => onChange(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder={placeholder}
  className="flex-1 h-15 px-3 py-4 text-lg  focus-visible:ring-0 bg-gray-200"
/>

    </div>
  );
};
