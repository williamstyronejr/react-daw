import * as React from "react";
import { useWorkSpaceContext } from "./context/workspace";

const Track = ({ id }: { id: string }) => {
  const [menu, setMenu] = React.useState(false);

  return (
    <li
      key={id}
      className="flex flex-row h-16 hover:bg-neutral-700 border border-slate-500"
    >
      <div className="flex flex-col">
        <button className="w-10 h-8  border-r border-b  border-slate-500">
          M
        </button>
        <button className="w-10 h-8 border-r border-slate-500">S</button>
      </div>

      <div className="flex flex-col justify-between align-center">
        <div className="flex flex-row flex-nowrap px-1">
          <span className="flex-grow text-left">Track title</span>

          <button className="shrink-0" onClick={() => setMenu(!menu)}>
            <i className="text-lg fas fa-ellipsis-h" />
          </button>

          <div
            className={`${
              menu ? "block" : "hidden"
            } bg-blue-400 absolute left-[200px] p-4 rounded`}
          >
            <ul>
              <li>Remove Track</li>
            </ul>
          </div>
        </div>

        <div>
          <input className="w-11/12" type="range" defaultValue="50" />
        </div>
      </div>
    </li>
  );
};

const TimeLine = () => {
  const [rowCount, setRowCount] = React.useState(40);
  const { state } = useWorkSpaceContext();

  return (
    <div className="flex-grow">
      <aside className="w-44  bg-neutral-700 float-left">
        <button className="">Add Track</button>

        <ul className="overflow-y-auto w-auto bg-neutral-900">
          {state.tracks.map((track) => (
            <Track id={track.id} />
          ))}
        </ul>
      </aside>

      <div className="w-auto h-full whitespace-nowrap overflow-x-scroll">
        <div className="min-w-full flex-grow h-6 bg-neutral-900">
          {Array.from({ length: rowCount }, (item, index) => (
            <div className="inline-block w-32" key={index}>
              {index + 1}
            </div>
          ))}
        </div>

        {state.tracks.map((val, index) => (
          <ul key={`track-${index}`}>
            {Array.from({ length: rowCount }).map((item, index) => (
              <li
                className="inline-block border-2 border-slate-500 w-32 h-16"
                key={`row-${index}`}
              ></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
