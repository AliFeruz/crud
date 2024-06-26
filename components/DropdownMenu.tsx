import { useState, useRef, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

const DropdownMenu = ({ onEdit, onDelete }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={toggleMenu} className="py-1">
        <EllipsisVerticalIcon className="w-6 h-5 text-slate-600 dark:text-slate-950" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-200 border rounded-xl shadow-lg">
          <button onClick={onEdit} className="flex items-center p-2 w-full text-left hover:bg-gray-300">
            <PencilIcon className="w-4 h-4 mr-2 icon dark:text-slate-950" />
            Edit
          </button>
          <button onClick={onDelete} className="flex items-center p-2 w-full text-left hover:bg-gray-300">
            <TrashIcon className="w-4 h-4 mr-2 icon dark:text-slate-950" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
