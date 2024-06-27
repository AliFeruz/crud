import { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Modal from "./Modal";
import NoteForm from "./forms/NoteForm";
import { useDataContext } from "@/context/dataContext";
import Profile from "./Profile";


const Topbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchNotes } = useDataContext();

  const handleSuccess = async () => {
    setIsModalOpen(false);
    await fetchNotes();
  };

  return (
    <nav>
      <div
        className="flex items-center justify-center fixed top-0 bg-gradient-to-l from-slate-300 via-gray-100 to-slate-300 
        dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-[#180c49] 
        dark:border-b border-b border-gray-500 z-30 w-full py-3 md:py-6"
      >
        <div className="flex items-center mx-4 justify-between w-full md:mx-auto md:w-5/6">
          <Link href="/" className="">
          <h1 className="logo md:pl-20">CRUD</h1>
          </Link>
          <div className="flex items-center md:space-x-20">
          <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-3" >
          <PencilSquareIcon className="h-[30px] w-[30px] icon" />
          <p className="icon text-base hidden md:block uppercase">Add Note</p>
          </button>
          <div className="flex justify-end">
          <Profile/>
          </div>
          {/* <Link href="/profile" className="flex items-center p-3 -mr-2 rounded-full border-2 border-slate-500">
          <UserIcon className="h-[30px] w-[30px] icon" />
          </Link> */}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm action="Create" onSuccess={handleSuccess} />
      </Modal>
    </nav>
  );
};

export default Topbar;
