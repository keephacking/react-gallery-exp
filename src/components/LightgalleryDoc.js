import React, { Component } from "react";
export default class LightgalleryDoc extends Component {
  render() {
    return (
      <pre style={{ textAlign: "justify" }}>
        {`
        Install FlexSlider
        npm install "https://github.com/woocommerce/FlexSlider.git

        Add FlexSilder to Component
        import "flexslider/flexslider.css";
        import "flexslider/jquery.flexslider-min.js"

        Add LightGallery to index.html inside public folder
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/lightgallery@1.6.12/dist/js/lightgallery-all.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/lightgallery@1.6.12/modules/lg-video.min.js"></script

        Reference Links
        https://www.jsdelivr.com/package/npm/lightgallery"--LightGallery CDN link
        http://sachinchoolur.github.io/lightGallery/"--LightGallery Home Page
        https://github.com/sachinchoolur/lightGallery"--LightGallery Github Page`}
      </pre>
    );
  }
}
