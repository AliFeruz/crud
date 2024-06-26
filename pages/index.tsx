import NoteCard from "@/components/NoteCard";
import RootLayout from "@/components/RootLayout";
import { Note } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(()=> {
    axios.get('/api/notes').then(res => {
      setNotes(res.data)
    })
  },[])
  

  return (
    <RootLayout>
    <div className="flex flex-1 mt-24">
    <div className="common-container">
    <div className="grid-container auto-rows-auto">
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
