import Counter from "./components/Counter"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo</h1>
      </header>

      <main>
        <Counter />
      </main>

      <footer>All rights reserved &copy;</footer>
    </div>
  );
}

export default App;
