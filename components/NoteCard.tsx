import { multiFormatDateString } from "@/lib/utils";
import { Note } from "@/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import NoteForm from "./forms/NoteForm";



type Props = {
  note: Note;
};

const NoteCard = ({ note}: Props) => {
  const { title, text, createdAt, _id } = note;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteNote = async () => {
    try {
      const response = await fetch(`https://crud-notes.vercel.app/notes/${_id}/note`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer `,
        },
      });

      if (response.ok) {
        console.log("Note deleted successfully");
         
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="bg-cyan-200  bg-opacity-65 dark:bg-gradient-to-t dark:from-[#17065c] dark:to-fuchsia-800 p-6 
    shadow-text rounded-md shadow-lg shadow-emerald-300 dark:shadow-cyan-950">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm action="Update" note={note} onSuccess={() => setIsModalOpen(false)} />
      </Modal>
        <div className="flex items-center justify-between p-1 mb-2">
            <button onClick={() => setIsModalOpen(true)}>
            <PencilIcon className="w-6 h-6 icon"/>
            </button>
            <Button variant="ghost" onClick={handleDeleteNote}>
            <TrashIcon className="w-6 h-6 icon"/>
            </Button>
        </div>
        <div className="p-2 border-t border-emerald-400">
        <h1 className="text-xl text font-bold mb-2">{title}</h1>
        </div>
        <div className="p-2 min-h-[100px] rounded-md">
        <p className="text text-sm">
        {isExpanded ? text : `${text.substring(0, 100)}...`}
        </p>
        {text.length > 100 && (
          <button onClick={toggleText} className="text-blue-500 text-xs lowercase underline mt-2">
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
        </div>
      <div className="text-xs flex items-center mt-2 dark:text-cyan-200 border-t border-emerald-400 pt-2 text-gray-400">
        <span>Created: {multiFormatDateString(createdAt)}</span>
      </div>
    </div>
  );
};

export default NoteCard;