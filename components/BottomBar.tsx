import Link from "next/link";
import React, { useState } from "react";
import {
  UserCircleIcon,
  PencilSquareIcon,
  InformationCircleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import ThemeBtn from "./ThemeBtn";
import Modal from "./Modal";
import NoteForm from "./forms/NoteForm";
import { useDataContext } from "@/context/dataContext";

const BottomBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchNotes } = useDataContext();

  const handleSuccess = async () => {
    setIsModalOpen(false);
    await fetchNotes();
  };
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-slate-200 bg-opacity-75
    border-t-2 border-slate-500 dark:border-fuchsia-300 rounded-t-md py-2.5 md:hidden dark:bg-fuchsia-950 dark:bg-opacity-75"
    >
      <Link href={"/"}>
        <div className="p-2 rounded-2xl border border-slate-500">
          <HomeIcon className="w-8 h-8 icon" />
        </div>
      </Link>
      <button onClick={() => setIsModalOpen(true)}>
        <div className="p-2 rounded-2xl border border-slate-500">
          <PencilSquareIcon className="w-8 h-8 icon" />
        </div>
      </button>
      <Link href={"/profile"}>
        <div className="p-2 rounded-2xl border border-slate-500">
          <UserCircleIcon className="w-8 h-8 icon" />
        </div>
      </Link>
      <Link href={"/about"}>
        <div className="p-2 rounded-2xl border border-slate-500">
          <InformationCircleIcon className="w-8 h-8 icon" />
        </div>
      </Link>
      <div className="p-2 rounded-2xl border border-slate-500">
        <ThemeBtn />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm action="Create" onSuccess={handleSuccess} />
      </Modal>
    </div>
  );
};

export default BottomBar;
