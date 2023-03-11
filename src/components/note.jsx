import Link from "next/link";
import { getFormattedDate } from "@/utils/date";
import { useRef } from "react";
import { motion } from "framer-motion";
import { NoteCardAnimation } from "@/content/FramerMotionVariants";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { deleteNote } from "@/utils/createNote";

export default function Note({ note, refreshNotes, animate = true }) {
  const noteRef = useRef(null);
  return (
    <motion.article
      ref={noteRef}
      variants={NoteCardAnimation}
      initial={animate && "hidden"}
      whileInView={animate ? "visible" : ""}
      viewport={{ once: true }}
      className="bg-white dark:bg-darkSecondary rounded-2xl p-2 flex flex-col sm:flex-row items-center w-full sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg"
    >
      <div className="flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5 md:pr-5">
        <div className="flex items-center justify-between">
          <Link
            href={`/notes/${note._id}`}
            className="font-bold text-neutral-900 md:text-xl dark:text-neutral-200 hover:underline"
          >
            {note.title}
          </Link>
          <div className="flex items-center gap-2">
            <AiOutlineEdit
              title="Edit Note"
              className="text-2xl cursor-pointer"
            />
            <AiOutlineDelete
              title="Delete Note"
              className="text-2xl cursor-pointer"
              onClick={() => {
                refreshNotes();
                deleteNote(note._id);
              }}
            />
          </div>
        </div>
        <p className="mt-3 text-sm sm:text-xs md:text-sm  text-gray-600 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
          {note.content}
        </p>

        <div className="flex-row items-center justify-between mt-auto">
          <div className="z-10 flex items-center gap-3 font-barlow">
            <div className="flex">
              Created at: {getFormattedDate(new Date(note.createdAt))}
            </div>
          </div>

          {note.updatedAt && note.createdAt !== note.updatedAt && (
            <p className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-dark-3 md:text-sm">
              <span>
                Updated at: {getFormattedDate(new Date(note.updatedAt))}
              </span>
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
