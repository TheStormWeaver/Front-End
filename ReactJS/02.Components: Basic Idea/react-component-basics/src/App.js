import ToDoList from "./components/ToDoList"
import TaskList from "./components/TaskList"
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
      </main>

      <footer>All rights reserved &copy;</footer>
    </div>
  );
}

export default App;
