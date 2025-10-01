import { DisplayModeContext } from "./context/DisplayModeContext";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [displayMode, setDisplayMode] = useState("compact");
  const [todos, setTodos] = useState([])
  const onToggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }
  const onDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }
  return (
    <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>
      <Header />
      <TaskList 
      todos={todos}
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}/>
    </DisplayModeContext.Provider>
  );
}

export default App;
