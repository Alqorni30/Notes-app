import { useState } from 'react';
import BuatNotes from "../components/BuatNotes"
import Navbar from "../components/Navbar"
import NotesContent from "../components/NotesContent"
import { Note } from '../models/note.model'


const Home = () => {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: " Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);

  return (
    <>
      <Navbar/>
      <div className="container lg:flex mt-6">
        <div className="lg:w-1/2 lg:mx-4">
          <BuatNotes notes={notes} setNotes={ setNotes}/>
        </div>
        <div className="lg:w-1/2 lg:mx-4">
          <NotesContent notes={notes} setNotes={ setNotes}/>
        </div>
      </div>
    </>
  )
}

export default Home