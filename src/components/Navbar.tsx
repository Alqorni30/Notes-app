import ButtonNotes from "./ButtonNotes";

const Navbar = () => {
  return (
    <header className="pt-4 container ">
      <nav className="bg-slate-500 px-4 py-3 rounded-xl">
        <div className="mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-semibold text-xl">Notes.bayo</h1>
            <ButtonNotes/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
