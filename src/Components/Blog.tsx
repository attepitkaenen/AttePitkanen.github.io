import { Link } from "react-router-dom";

type Props = {
  title: string;
  children: React.ReactNode
};

export const Blog = ({ title, children }: Props) => {
  return (
    <div className="w-auto flex flex-col gap-12 items-center mx-12 grad shadow-lg min-h-screen">
      <Link to="/portfolio" className="fa-solid fa-home text-white text-2xl lg:text-6xl fixed right-16 top-6"></Link>
      <h1 className="protest-riot-regular text-4xl lg:text-9xl pt-12">{title}</h1>
      {children}
    </div>
  );
};
