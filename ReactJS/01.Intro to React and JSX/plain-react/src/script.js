let rootElement = document.getElementById("root");

/* base React way:
let reactElement = React.createElement(
  "header",
  { className: "site-header" },
  React.createElement("h1", { id: "main-heading"}, "Hello React!"),
  React.createElement("h2", {}, "Some more React testing")
);
*/

let reactElement = ( //the div is the parent element and container for the html
  <div>
    <header>
      <h1>Hello from JSX</h1>
      <h2>Hello again from JSX (modified)</h2>

      <p>lorem ipsum</p>
    </header>

    <footer>All rights reserved &copy;</footer>
  </div>
);

ReactDOM.render(reactElement, rootElement);
