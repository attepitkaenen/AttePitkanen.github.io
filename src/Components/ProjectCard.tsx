import { Link } from "react-router-dom";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  var tags = project.tags.map((tag) => {
    return <div className="bg-black p-2">{tag}</div>;
  });

  return (
    <Link
      to={"/portfolio/" + project.title}
      className="border text-white hover:text-gray-500 text-2xl w-auto h-auto flex flex-col basis-1/2"
    >
      <div className="container aspect-video bg-slate-500 grow grow-1">
        <img src={project.thumbnail} alt="" className=""/>
      </div>
      <div className="p-4 flex flex-col h-auto gap-2">
        <h1 className="protest-riot-regular text-6xl mt-auto">{project.title}</h1>
        <p className="">{project.description}</p>
        <div className="flex gap-2">{tags}</div>
      </div>
    </Link>
  );
};
