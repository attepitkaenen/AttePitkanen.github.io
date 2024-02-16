import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-around w-screen static top-0 bg-slate-700 py-6">
      <Link to={"/"} className="border text-red-500 hover:text-black p-4 text-2xl">Home</Link>
      <Link to={"webdev"} className="border text-red-500 hover:text-black p-4 text-2xl">Web development</Link>
      <Link to={"gamedev"} className="border text-red-500 hover:text-black p-4 text-2xl">Game development</Link>
      <Link to={"contact"} className="border text-red-500 hover:text-black p-4 text-2xl">contact</Link>
    </div>
  );
};
