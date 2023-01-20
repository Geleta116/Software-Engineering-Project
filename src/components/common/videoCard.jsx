import React, { Component } from "react";
import IFrame from "./iframe";
import { Link } from "react-router-dom";
class VideoCard extends Component {
  state = {};
  render() {
    const { link, alt } = this.props.video;
    return (
      <div
        className="card card_"
        style={{
          background: "#272727",
          boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px",
        }}
      >
        <iframe src={link} />
        <div className="card-body">
          <h5 className="card-title">{alt}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={link} className="btn btn-primary" target="_blank">
            Watch
          </a>
        </div>
      </div>
    );
  }
}

export default VideoCard;
