import React, { Component } from "react";

export default class html5gallery extends Component {
  render() {
    return (
      <div style={{ display: "none" }} className="html5gallery" data-skin="horizontal" data-width="480" data-height="272">
        <a href="images/Tulip_large.jpg">
          <img src="images/Tulip_small.jpg" alt="Tulips" />
        </a>
        <a href="images/Swan_large.jpg">
          <img src="images/Swan_small.jpg" alt="Swan on Lake" />
        </a>
        <a href="images/Big_Buck_Bunny.mp4">
          <img src="images/Big_Buck_Bunny.jpg" alt="Big Buck Bunny, Copyright Blender Foundation" />
        </a>
        <a href="http://www.youtube.com/embed/YE7VzlLtp-4">
          <img src="http://img.youtube.com/vi/YE7VzlLtp-4/2.jpg" alt="Youtube Video" />
        </a>
        <a href="http://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;portrait=0">
          <img src="images/Big_Buck_Bunny.jpg" alt="Vimeo Video" />
        </a>
      </div>
    );
  }
}
