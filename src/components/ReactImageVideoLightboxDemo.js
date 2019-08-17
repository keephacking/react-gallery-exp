import React, { Component } from "react";
import ReactImageVideoLightbox from "react-image-video-lightbox";

export default class ReactImageVideoLightboxDemo extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      lightboxOpen: false
    };
  }
  render() {
    return (
      <div className="container">
        <button
          onClick={() => {
            this.setState({ lightboxOpen: true });
          }}
        >
          Open Lightbox
        </button>
        {this.state.lightboxOpen && (
          <div className="lightbox-modal">
            <ReactImageVideoLightbox
              data={[
                { url: "https://placekitten.com/550/500", type: "photo", altTag: "placeholder image" },
                { url: "https://www.youtube.com/embed/ScMzIvxBSi4?rel=0", type: "video", altTag: "placeholder video" },
                { url: "images/Big_Buck_Bunny.mp4", type: "video", altTag: "placeholder video" },
                { url: "https://placekitten.com/620/650", type: "photo", altTag: "placeholder image" },
                { url: "https://placekitten.com/550/500", type: "photo", altTag: "placeholder image" },
                { url: "https://www.youtube.com/embed/ScMzIvxBSi4?rel=0", type: "video", altTag: "placeholder video" }
              ]}
              startIndex={0}
              showResourceCount={true}
              onCloseCallback={() => {
                this.setState({ lightboxOpen: false });
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
