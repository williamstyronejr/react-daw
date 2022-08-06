import TimeLine from "./Timeline";
import Panel from "./Panel";
import { useWorkSpaceContext } from "./context/workspace";
import "./App.css";

function App() {
  return (
    <main className="flex flex-col h-full">
      <TimeLine />

      <Panel />
    </main>
  );
}

export default App;
