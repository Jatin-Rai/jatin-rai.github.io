import { IDEContainer } from "./components/IDE/IDEContainer";
import { CommandMenu } from "./components/ui/command-menu";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen w-full overflow-hidden bg-[#0a0a0c] transition-colors duration-300">
        <IDEContainer />
        <CommandMenu />
      </div>
    </ThemeProvider>
  );
}

export default App;
