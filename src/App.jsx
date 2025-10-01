import { DisplayModeContext } from "./context/DisplayModeContext";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/taskList/TaskList";

function App() {
  const [displayMode, setDisplayMode] = useState("compact");
  return (
    <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>
      <Header />
      <TaskList />
    </DisplayModeContext.Provider>
  );
}

export default App;
