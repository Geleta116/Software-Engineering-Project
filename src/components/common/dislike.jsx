import React, { Component } from "react";
class DisLike extends Component {
  render() {
    const { disliked, handledisLike } = this.props;
    return (
      <i
        className={disliked ? "fa fa-thumbs-down" : "fa fa-thumbs-o-down"}
        style={{ color: "white", fontSize: "x-large", cursor: "pointer" }}
        onClick={handledisLike}
      ></i>
    );
  }
}

export default DisLike;
