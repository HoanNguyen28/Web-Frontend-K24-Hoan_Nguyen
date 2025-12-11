"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Note = {
  text: string;
  done: boolean;
};

export function NoteForm() {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotes((prev) => [...prev, { text: note, done: false }]);
    setNote("");
  };

  const toggleDone = (index: number) => {
    setNotes((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeNote = (index: number) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">

      <div className="flex w-full max-w-sm items-center gap-2">
        <Input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()} 
          placeholder="Nhập note..."
        />
        <Button onClick={addNote}>+</Button>
      </div>


<div className="w-full max-w-sm space-y-2">
  {notes.map((item: Note, index: number) => (
    <div
      key={index}
      className={`flex justify-between items-center p-3 rounded-lg border
        ${item.done ? "bg-green-500 border-green-600 text-white" : "bg-white border-gray-300"}
      `}
    >
      <span className="font-medium">{item.text}</span>

      <div className="flex gap-2">
        
        <Button
          size="sm"
          variant="ghost"
          onClick={() => toggleDone(index)}
          className="text-green-500"
        >
          ✔
        </Button>

       
        <Button
          size="sm"
          variant="ghost"
          onClick={() => removeNote(index)}
        >
          X
        </Button>
      </div>
    </div>
  ))}
</div>


<div className="w-full max-w-sm text-center mt-2 text-sm text-gray-600">
  tasks remaining: {notes.filter(n => !n.done).length}
</div>

    </div>
  );
}
