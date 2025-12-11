"use client";

import { useState } from "react";

import { NoteForm } from "@/components/note/note-form";
import Albums from "@/components/albums/albums";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [tab, setTab] = useState("note");

  return (
    <div className="p-4 space-y-4">

      <h1 className="text-yellow-700 flex justify-center text-2xl">
        Notes Page
      </h1>

      {/* Nút đổi tab */}
      <div className="flex justify-center gap-3">
        <Button
          variant={tab === "note" ? "default" : "outline"}
          onClick={() => setTab("note")}
        >
          Notes
        </Button>

        <Button
          variant={tab === "view" ? "default" : "outline"}
          onClick={() => setTab("view")}
        >
          Albums
        </Button>
      </div>

     
      {tab === "note" && <NoteForm/>}
      {tab === "view" && <Albums />}
    </div>
  );
}
