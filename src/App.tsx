import { IDEContainer } from "./components/IDE/IDEContainer";
import { CommandMenu } from "./components/ui/command-menu";

function App() {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#0a0a0c]">
      <IDEContainer />
      <CommandMenu />
    </div>
  );
}

export default App;
