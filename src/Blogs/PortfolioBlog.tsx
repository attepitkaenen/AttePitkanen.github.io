import { Blog } from "../Components/Blog";

export const PortfolioBlog = () => {
  return (
    <Blog title="Portfolio"> 
      <div className="mx-2 lg:mx-32 p-4 flex flex-col gap-6 bg-slate-500">
          <a href="https://github.com/attepitkaenen/portfolio" className="text-2xl text-white" target="_blank">• Project repository</a>
          <a href="https://attepitkaenen.github.io/portfolio/" className="text-2xl text-white" target="_blank">• Deployed page</a>
          <p className="">My personal portfolio webpage to showcase my projects and skills.</p>
          <h2 className="text-3xl">Techstack:</h2>
          <h3 className="font-bold">Frontend</h3>
          <p>
          React Vite
          </p>
          <h3 className="font-bold">Tools</h3>
          <p>
            Github Actions and Blender for the creation of the avatar
          </p>
          <div className="bg-slate-500">
        
      </div>
        </div>
    </Blog>
  );
};
