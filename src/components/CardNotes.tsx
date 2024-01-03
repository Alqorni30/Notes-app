import React from "react";
import { Note } from "../models/note.model";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const CardNotes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  const isDarkBackground = (bgColor: string) => {
    const rgb = parseInt(bgColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const formatTanggal = (tanggalString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(tanggalString).toLocaleDateString("id-ID", options);
  };

  const cardClassName = `mb-4 p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
    isDarkBackground(note.color) ? "text-white" : "text-black"
  }`;

  const titleClassName = `mb-2 text-2xl font-bold tracking-tight ${
    isDarkBackground(note.color) ? "text-white" : "text-gray-900"
  }`;
  const dateClassName = `mb-3 font-normal ${
    isDarkBackground(note.color) ? "text-white" : "text-black"
  }`;

  return (
    <>
      <div className={cardClassName} style={{ backgroundColor: note.color }}>
        <h5 className={titleClassName}>{note.title}</h5>
        <p
          className={`mb-3 font-normal ${
            isDarkBackground(note.color) ? "text-white" : "text-black"
          }`}
        >
          {note.text}
        </p>
        <p className={dateClassName}>
          <em>Dibuat Pada {formatTanggal(note.date)}</em>
        </p>
        <button
          className={`text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
          onClick={() => handleDelete(note.id)}
        >
          Hapus
        </button>
      </div>
    </>
  );
};

export default CardNotes;
