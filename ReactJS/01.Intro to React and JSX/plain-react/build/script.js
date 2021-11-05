var rootElement = document.getElementById("root");

/* base React way:
let reactElement = React.createElement(
  "header",
  { className: "site-header" },
  React.createElement("h1", { id: "main-heading"}, "Hello React!"),
  React.createElement("h2", {}, "Some more React testing")
);
*/

var reactElement = //the div is the parent element and container for the html
React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    null,
    React.createElement(
      "h1",
      null,
      "Hello from JSX"
    ),
    React.createElement(
      "h2",
      null,
      "Hello again from JSX (modified)"
    ),
    React.createElement(
      "p",
      null,
      "lorem ipsum"
    )
  ),
  React.createElement(
    "footer",
    null,
    "All rights reserved \xA9"
  )
);

ReactDOM.render(reactElement, rootElement);