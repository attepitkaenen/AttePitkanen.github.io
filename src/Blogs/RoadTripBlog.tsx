import { Blog } from "../Components/Blog";

  export const RoadTripBlog = () => {
    return (
      <Blog title="Roadtrip">
        <div className="mx-2 lg:mx-32 p-4 flex flex-col gap-6 bg-slate-500">
          <a href="https://github.com/attepitkaenen/RoadTrip" className="text-2xl text-white" target="_blank">• Project repository</a>
          <p className="text-2xl">Roadtrip is multiplayer coop life simulator where you drive through Finland with friends. You have to find parts to build a car and then maintain the car to survive the whole trip.</p>
        </div>
      </Blog>
    );
  };
  