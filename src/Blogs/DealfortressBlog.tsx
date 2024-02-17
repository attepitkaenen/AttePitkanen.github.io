import { Blog } from "../Components/Blog";

export const DealFortressBlog = () => {
  return (
    <Blog title="DealFortress"> 
      <div className="mx-2 lg:mx-32 p-4 flex flex-col gap-6 bg-slate-500">
          <a href="https://github.com/DealFortress/DealFortress" className="text-2xl text-white" target="_blank">• Project repository</a>
          <p className="text-2xl">Dealfortress is a second hand marketplace for computer parts.</p>
        </div>
    </Blog>
  );
};
