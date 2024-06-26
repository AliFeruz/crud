import { useState } from 'react';
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { UserIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import Modal from './Modal';
import NoteForm from './forms/NoteForm';

type Props = {
    fetchNotes: () => void;
  };
  

const Topbar = ({ fetchNotes } : Props ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = async () => {
    setIsModalOpen(false); 
    await fetchNotes(); 
  };


  return (
    <nav>
      <div className="flex-between fixed top-0 bg-gradient-to-l from-cyan-100 via-cyan-50 to-cyan-100 
        dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-[#180c49] 
        dark:border-b border-b border-emerald-500 z-30 w-full py-3 md:py-6">
        <div className="flex-between mx-auto w-5/6">
          <div className="flex items-center justify-around w-full gap-16">
            <Link href="/">
              <h1 className="logo">CRUD</h1>
            </Link>
            <div className="md:flex hidden items-center justify-around w-2/5">
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-3">
                <PencilSquareIcon className="h-[30px] w-[30px] icon" />
                <p className="icon uppercase text-xl">Add Note</p>
              </button>
              <Link href='/profile' className="flex items-center gap-3">
                <p className="icon text-xl uppercase">Profile</p>
                <UserIcon className="h-[30px] w-[30px] icon" />
              </Link>
            </div>
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
