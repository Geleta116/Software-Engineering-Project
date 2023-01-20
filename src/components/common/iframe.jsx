import React, { Component } from "react";

class IFrame extends Component {
  render() {
    const { link } = this.props;
    return (
      <iframe
        className="embed-responsive-item"
        src={link}
        allowFullScreen={true}
        width="100%"
        height="100%"
        style={{ borderRadius: "10px" }}
      ></iframe>
    );
  }
}

export default IFrame;
