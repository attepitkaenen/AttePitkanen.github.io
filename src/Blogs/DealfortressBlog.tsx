import { Blog } from "../Components/Blog";

export const DealFortressBlog = () => {
  window.scrollTo(0, 0);


  return (
    <Blog title="DealFortress"> 
      <div className="mx-2 lg:mx-32 p-4 flex flex-col gap-6 bg-slate-500">
          <a href="https://github.com/DealFortress/DealFortress" className="text-2xl text-white" target="_blank">• Project repository</a>
          <a href="https://green-sand-04a2d9f03.3.azurestaticapps.net/notices" className="text-2xl text-white" target="_blank">• Deployed page</a>
          <p className="">Dealfortress is a second hand marketplace for computer parts.</p>
          <h2 className="text-3xl">Techstack:</h2>
          <h3 className="font-bold">Backend</h3>
          <p>
          .NET/C# REST API using a <a href="https://www.milanjovanovic.tech/blog/modular-monolith-communication-patterns" className="underline text-white" target="_blank">modular monolith architecture</a>
          , SignalR Library, Entity Framework Library, Azure Sql DB & Azure web app services
          </p>
          <h3 className="font-bold">Frontend</h3>
          <p>
          Angular 17, NGRX Store, SignalR, Azure static webpages, TailwindCSS, DaisyUI & FontAwesome
          </p>
          <h3 className="font-bold">Tools</h3>
          <p>
            Github Actions & Project, Auth0
          </p>
          <div className="bg-slate-500">
        <img src="https://i.imgur.com/2Q4RWtM.png" alt="" className="aspect-video object-contain w-full h-full"/>
      </div>
        </div>
    </Blog>
  );
};
