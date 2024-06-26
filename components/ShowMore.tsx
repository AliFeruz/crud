import { Note } from "@/types";
import { multiFormatDateString } from "@/lib/utils";

type Props = {
  note: Note;
};

const ShowMore = ({ note }: Props) => {
  const { title, text, createdAt } = note;

  return (
    <div className="p-6 rounded-xl bg-gray-100">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <p className="text-sm mb-4">{text}</p>
      <div className="text-xs text-gray-600 dark:text-cyan-200">
        <span>Created: {multiFormatDateString(createdAt)}</span>
      </div>
    </div>
  );
};

export default ShowMore;
