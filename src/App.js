import React, { Component } from "react";
import "./App.css";
import Html5gallery from "./components/Html5Gallery";
import Slider from "./components/Slider";
import ReactImageVideoLightboxDemo from "./components/ReactImageVideoLightboxDemo";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main" role="main" className="Main">
          <h3>React Image Video Lightbox</h3>
          <div className="flex-center">
            <ReactImageVideoLightboxDemo />
          </div>
          <h3>Html5Gallery</h3>
          <div className="flex-center">
            <Html5gallery />
          </div>
          <h3>Flex Slider</h3>
          <div className="flex-center">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}
