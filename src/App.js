import React, { Component } from "react";
import Routing from "./Routing";
import Footer from "./components/Footer";
import "./static/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    document.addEventListener('contextmenu', ((event) => event.preventDefault()));
  }

  render = () => {
    return (
      <div>
        <Routing />
        <Footer />
      </div>
    );
  };
}

export default App;
