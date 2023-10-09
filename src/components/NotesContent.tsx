import { Note } from "../models/note.model";
import React from "react";
import CardNotes from "./CardNotes";
import {GrNotes} from 'react-icons/gr'

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesContent: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    // Menghapus catatan dari local storage
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = storedNotes.filter((note: Note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Menghapus catatan dari tampilan
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return (
        <CardNotes key={note.id} note={note} handleDelete={handleDelete} />
      );
    });
  };

  return (
    <>
      <h2 className="mb-3 font-bold text-xl flex items-center gap-2"><GrNotes/> Notes</h2>
      <div>
        <p className="ml-2 mb-2 text-base text-blue-700">
          {notes.length} Notes
        </p>
        {notes.length === 0 ? (
          <p className="text-center text-xl">Notes kosong</p>
        ) : (
          renderNotes()
        )}
      </div>
    </>
  );
};

export default NotesContent;
