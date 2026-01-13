"use client";
import { useState } from "react";
import { SearchBar } from "@/components/header-atomic/header-top-atomic/search/search-bar";

export function HeaderTopCenter() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex-1 px-4">
      <SearchBar
        value={searchText}
        onChange={setSearchText}      
        onSearch={() => console.log("Searching:", searchText)}
        placeholder="Search products..."
      />
    </div>
  );
}
