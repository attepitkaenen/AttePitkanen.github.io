import { ProjectCard } from "../Components/ProjectCard";

export const GameDevPage = () => {
  const gameProjects: Project[] = [
    {
      title: "Roadtrip",
      description: "",
      thumbnail: "https://github.com/attepitkaenen/RoadTrip/assets/118916517/1943f087-433b-4bd2-91e3-3c0ea67254f3",
      tags: ["Game", "Development", "Godot", "C#", "Multiplayer", "3D"]
    }
  ];
  return (
    <div className="flex">
      <ProjectCard project={gameProjects[0]} />
    </div>
  );
};
