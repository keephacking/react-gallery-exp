import React, { Component } from "react";

import "lightslider/dist/css/lightslider.min.css";
// import "lightgallery/dist/js/lightgallery-all.min.js";
import "lightslider/dist/js/lightslider.js";

export default class Lightslider extends Component {
  componentDidMount() {
    window.$("#lightSlider").lightSlider({
      item: 4,
      loop: false,
      slideMove: 2,
      easing: "cubic-bezier(0.25, 0, 0.25, 1)",
      speed: 600,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            item: 3,
            slideMove: 1,
            slideMargin: 6
          }
        },
        {
          breakpoint: 480,
          settings: {
            item: 2,
            slideMove: 1
          }
        }
      ],
      onSliderLoad: function(el) {
        window.$("#lightSlider").removeClass("cS-hidden");
        el.lightGallery({
          selector: "#lightSlider .lslide"
        });
      }
    });
  }
  render() {
    return (
      <div className="clearfix" style={{ width: "100%" }}>
        <ul id="lightSlider" className="gallery content-slider list-unstyled clearfix cS-hidden">
          <li data-thumb="images/kitchen_adventurer_lemon.jpg" data-src="http://sachinchoolur.github.io/lightslider/img/cS-13.jpg">
            <img src="images/kitchen_adventurer_lemon.jpg" />
          </li>
          <li data-thumb="images/kitchen_adventurer_caramel.jpg" data-src="http://sachinchoolur.github.io/lightslider/img/cS-13.jpg">
            <img src="images/kitchen_adventurer_caramel.jpg" />
          </li>
        </ul>
        <a href="http://sachinchoolur.github.io/lightslider/index.html">Lightslider Home Page</a>
      </div>
    );
  }
}
