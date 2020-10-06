import React, { Component } from "react";
import Routing from "./Routing";
import Footer from "./components/Footer";
import "./static/css/App.css";

class App extends Component {
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
