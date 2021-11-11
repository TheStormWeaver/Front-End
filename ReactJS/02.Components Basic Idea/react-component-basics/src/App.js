import ToDoList from "./components/ToDoList"
import TaskList from "./components/TaskList"
import ForceList from "./components/ForceList"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo</h1>
      </header>

      <main>
        <ToDoList />
        <TaskList />
        <ForceList />
      </main>

      <footer>All rights reserved &copy;</footer>
    </div>
  );
}

export default App;
