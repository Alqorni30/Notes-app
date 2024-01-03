import BuatNotes from "../components/BuatNotes";
import { Note } from "../models/note.model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuatNotespage = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: " Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <BuatNotes notes={notes} setNotes={setNotes} />
      <div className="p-5">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Kembali ke Beranda
          
        </button>
      </div>
    </>
  );
};

export default BuatNotespage;
