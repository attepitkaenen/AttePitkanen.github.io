import { ProjectCard } from "../Components/ProjectCard";
import { GameProjects } from "../Projects/GameProjects";
import { WebProjects } from "../Projects/WebProjects";

export const HomePage = () => {
  const webCards = WebProjects.map((project) => {
    return <ProjectCard project={project} />;
  });

  const gameCards = GameProjects.map((project) => {
    return <ProjectCard project={project} />;
  });

  return (
    <>
    <div className="mx-6 lg:mx-12 grad shadow-lg flex flex-col gap-12">
      <div className="flex h-screen w-auto relative z-0 mx-4 lg:mx-10 border-b flex-col-reverse lg:flex-row">
        <div className="container aspect-square">
          <img
            src="https://i.imgur.com/0U5NVPQ.png"
            alt="Atte Pitkänen and his cats"
          />
        </div>
        <div className="text-center w-full h-full flex flex-col justify-center gap-2">
          <h1 className="protest-riot-regular text-4xl lg:text-9xl">Hello you!</h1>
          <p className="quicksand-test text-sm lg:text-2xl">Welcome! I'm Atte Pitkänen, a 21 year old full-stack .Net developer who is eager to dive into any tech related challenges, such as art, 3D modeling, full-stack and game development! </p>
        </div>
      </div>
      <div className="mx-6 lg:mx-12">
        <h2 className="protest-riot-regular text-4xl lg:text-9xl w-full text-start my-10 border-b">Projects</h2>
        <div className="p-6 lg:p-12">
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
              {webCards}
              {gameCards}
          </div>
        </div>
      </div>
      <div>
        <h2 className="protest-riot-regular text-4xl lg:text-9xl w-full text-center my-10">Contact</h2>
        <p className="px-10 text-2xl pb-10">
          • <a href="https://github.com/attepitkaenen" target="_blank">Github </a>
          • <a href="https://www.linkedin.com/in/atte-pitk%C3%A4nen-306608265/" target="_blank">LinkedIn </a>
          • pitkasenatte@gmail.com
        </p>
      </div>
    </div>
    </>
  );
};
