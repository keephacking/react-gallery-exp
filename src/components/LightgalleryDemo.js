import React, { Component } from "react";

import "flexslider/flexslider.css";
import "flexslider/jquery.flexslider-min.js";

export default class LightgalleryDemo extends Component {
  componentDidMount() {
    window.$("#lightGallery").lightGallery({ videojs: true });

    window.$(this.refs.flexslider).flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 300,
      itemMargin: 5,
      start: function(slider) {
        window.$("body").removeClass("loading");
      }
    });
  }
  render() {
    return (
      <section className="slider">
        <div className="flexslider carousel" ref="flexslider" style={{ width: "100%" }}>
          <div style={{ display: "none" }} id="bunnyVideo">
            <video className="lg-video-object lg-html5" controls preload="none">
              <source src="images/Big_Buck_Bunny.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <ul id="lightGallery" className="slides">
            <li
              data-html="#bunnyVideo"
              data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            >
              <img src="images/Big_Buck_Bunny.jpg" />
            </li>
            <li data-src="images/Swan_large.jpg" data-sub-html="<h4>Swan on Lake</p>">
              <img src="images/Swan_small.jpg" />
            </li>
            <li data-src="images/Tulip_large.jpg" data-sub-html="Tulips">
              <img src="images/Tulip_small.jpg" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
