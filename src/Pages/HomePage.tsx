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
    <div className="mx-12 grad shadow-lg flex flex-col gap-12">
      <div className="flex h-screen w-auto relative z-0 mx-10 border-b">
        <img
          src="https://i.imgur.com/0U5NVPQ.png"
          alt="Atte Pitkänen and his cats"
          className="aspect-square"
        />
        <div className="text-center w-full h-full flex flex-col justify-center gap-2">
          <h1 className="protest-riot-regular text-9xl">Hello you!</h1>
          <p className="quicksand-test text-2xl">Welcome! I'm Atte Pitkänen, a 21 year old full-stack .Net developer who is eager to dive into any tech related challenges, such as art, 3D modeling, full-stack and game development! </p>
        </div>
      </div>
      <div>
        <h2 className="protest-riot-regular text-9xl w-full text-center my-10">Projects</h2>
        <div className="flex flex-col items-center p-6">
          <div className="flex gap-2">
            <div className="basis-1/2">
              {/* <h2>Web Development</h2> */}
              {webCards}
            </div>
            <div className="basis-1/2">
              {/* <h2>Game Development</h2> */}
              {gameCards}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="protest-riot-regular text-9xl w-full text-center my-10">Contact</h2>
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
