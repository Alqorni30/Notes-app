import { Note } from "../models/note.model";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IBuatNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const BuatNotes: React.FC<IBuatNotesProps> = ({ notes, setNotes }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const saveNotesToLocalStorage = (notes: Note[]) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Semua Harus Diisi!!");
    }

    setError("");
    const newNote: Note = {
      id: new Date().toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: new Date().toString(),
    };

    setNotes([...notes, newNote]);
    saveNotesToLocalStorage([...notes, newNote]);

    // Mengarahkan kembali ke halaman beranda (home)
    navigate("/"); // Sesuaikan dengan path beranda Anda

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="font-bold text-xl mb-3 ">Buat Notes</h2>
        <hr className="border-1 mb-3 border-slate-400" />
        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> {error}
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-2">
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
              Judul
            </label>
            <input
              type="text"
              ref={titleRef}
              placeholder="Tulis Judul Notes"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
            ></input>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
              Text
            </label>
            <textarea
              ref={textRef}
              rows={5}
              placeholder="Tulis Notes kamu"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
            ></textarea>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="colorInput"
                title="Ganti Warna kamu"
                type="color"
                ref={colorRef}
                defaultValue="#dfdfdf"
                className="w-8 h-8 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              ></input>
            </div>
            <label
              htmlFor="colorInput"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Warna Notes
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
          
        </form>
      </div>
    </>
  );
};

export default BuatNotes;
