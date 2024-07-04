import { multiFormatDateString } from "@/lib/utils";
import { Note } from "@/types";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import NoteForm from "./forms/NoteForm";
import axios from "axios";
import DropdownMenu from "./DropdownMenu";
import ShowMore from "./ShowMore";


const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 40; // 50% to 100% saturation
    const lightness = Math.floor(Math.random() * 30) + 50; // 40% to 70% lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };


type Props = {
  note: Note;
};

const NoteCard = ({ note }: Props) => {
  const { title, text, createdAt, _id } = note;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const [bgColor, setBgColor] = useState("");


  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);


  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete('/api/notes?_id=' + _id)
      if (response) {
        console.log("Note deleted successfully");
   
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };


  return (
    <div style={{ backgroundColor: bgColor}}className="bg-opacity-65 p-2 relative shadow-text rounded-xl 
    shadow-lg shadow-slate-400 dark:shadow-cyan-950">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm action="Update" note={note} onSuccess={() => setIsModalOpen(false)} />
        </Modal>
        <Modal isOpen={isShowMoreOpen} onClose={() => setIsShowMoreOpen(false)}>
        <ShowMore note={note} />
         </Modal>
        <div className="flex items-center justify-end p-1">
            <DropdownMenu onEdit={() => setIsModalOpen(true)}
            onDelete={handleDeleteNote}/>
        </div>
        <div className="px-2 pb-1">
        <h1 className="text-sm text font-bold mb-1">{`${title.substring(0,10)} ${'...'}`}</h1>
        </div>
        <div className="px-2 py-1 min-h-[150px] md:min-h-[140px] rounded-md">
        <p className="text text-sm">
        {text.substring(0, 80)}
        </p>
        {text.length > 80 && (
          <button onClick={() => setIsShowMoreOpen(true)} 
          className="text-gray-200 text-xs lowercase underline mt-2">
            Show More
          </button>
        )}
        </div>
       <div className="font-extralight tracking-tight text-xs absolute bottom-2 right-3 flex items-center
       mt-2 dark:text-slate-900 pt-1 text-gray-100">
        <span>Created: {multiFormatDateString(createdAt)}</span>
      </div>
    </div>
  );
};

export default NoteCard;