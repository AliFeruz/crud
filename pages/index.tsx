import NoteCard from "@/components/NoteCard";
import RootLayout from "@/components/RootLayout";
import { useDataContext } from "@/context/dataContext";
import { Note } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {
  const { notes, fetchNotes } = useDataContext();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <RootLayout>
    <div className="flex items-center justify-center mt-24">
    <div className="common-container">
    <div className="w-full px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-auto">
    {notes.slice().reverse().map((note) => (
      <NoteCard
        key={note._id}
        note={note}
      />
    ))}
    </div>
    </div>
    </div>
    </RootLayout>
  );
}
