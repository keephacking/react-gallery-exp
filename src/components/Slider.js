import React, { Component } from "react";

import "flexslider/flexslider.css";
import 'flexslider/jquery.flexslider-min.js';

export default class Slider extends Component {
  componentDidMount() {
    window.$(this.refs.flexslider).flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      pausePlay: true,
      start: function(slider) {
        window.$("body").removeClass("loading");
      }
    });
  }
  render() {
    return (
      <section className="slider">
        <div className="flexslider carousel" ref="flexslider">
          <ul className="slides">
            <li>
              <img src="images/kitchen_adventurer_cheesecake_brownie.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_lemon.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_donut.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_caramel.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_cheesecake_brownie.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_lemon.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_donut.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_caramel.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_cheesecake_brownie.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_lemon.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_donut.jpg" />
            </li>
            <li>
              <img src="images/kitchen_adventurer_caramel.jpg" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
