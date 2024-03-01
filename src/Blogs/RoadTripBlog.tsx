import { Blog } from "../Components/Blog";

  export const RoadTripBlog = () => {
    return (
      <Blog title="Roadtrip">
        <div className="mx-2 lg:mx-32 p-4 flex flex-col gap-6 bg-slate-500">
          <a href="https://github.com/attepitkaenen/RoadTrip" className="text-2xl text-white disabled" target="_blank">• Project repository</a>
          <a href="" className="text-2xl text-white">• Demo (coming soon)</a>
          <p className="text-2xl">Roadtrip is coop immersive sim where you drive through Finland with friends. You have to find parts to build a car and then maintain the car to survive the whole trip.</p>
          <p className="text-2xl">Built in Godot 4.2 using C#</p>
          <img src="https://i.imgur.com/9ewlF5Q.png" alt="" className="aspect-video object-contain w-full h-full"/>
        </div>
      </Blog>
    );
  };
  