import React from "react";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";

const ButtonNotes: React.FC = () => {
  return (
    <>
      <button
        type="button"
        className="flex justify-center"
      >
        <Link
          to="/buatnotes" // Sesuaikan dengan path yang sesuai dengan komponen BuatNotes
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-2 px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800 text-black"
        >
          <IoMdCreate /> BuatNotes
        </Link>
      </button>
    </>
  );
};

export default ButtonNotes;
