import * as React from "react";
import { useWorkSpaceContext } from "./context/workspace";

const TimeLine = () => {
  const { state } = useWorkSpaceContext();

  return (
    <div className="flex flex-row flex-nowrap flex-grow w-full">
      <aside className="w-44  bg-blue-400">
        <button className="my-4 ">Add Track</button>

        <ul className="overflow-y-auto">
          {state.tracks.map((track) => (
            <li key={track.id} className="flex flex-row hover:bg-neutral-700">
              <div className="flex flex-col">
                <button className="w-10">M</button>
                <button className="w-10">S</button>
              </div>

              <div>
                <div>Track title</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-grow">timeline</div>
    </div>
  );
};

export default TimeLine;
