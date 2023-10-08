import { Note } from "../models/note.model";
import React from "react";
import CardNotes from "./CardNotes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesContent: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <CardNotes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    <>
      <h2 className="my-3 font-bold text-xl">Notes</h2>
      <div>{ renderNotes() }</div>
    </>
  );
};

export default NotesContent;
