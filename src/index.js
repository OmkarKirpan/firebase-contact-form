import React from "react";
import ReactDOM from "react-dom";

import Footer from "./footer.component";
import Contact from "./contact.component";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Contact />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Footer /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
