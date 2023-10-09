import { useState } from "react";
import BuatNotes from "../components/BuatNotes";
import Navbar from "../components/Navbar";
import NotesContent from "../components/NotesContent";
import { Note } from "../models/note.model";

const Home = () => {
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
      <div className="bg-slate-200 min-h-screen">
        <Navbar />
        <div className="container lg:flex lg:justify-center mt-4">
          <div className="lg:w-1/2  lg:mx-4 bg-white p-6 rounded-lg mb-4">
            <NotesContent notes={notes} setNotes={setNotes} />
          </div>
          <div className="lg:w-1/2 hidden lg:block lg:mx-4" id="buatnotes">
            <BuatNotes notes={notes} setNotes={setNotes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
