import React, { Component } from "react";
class Like extends Component {
  render() {
    const { liked, handleLike } = this.props;
    return (
      <i
        className={liked ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}
        style={{
          color: "white",
          marginRight: "10px",
          fontSize: "x-large",
          cursor: "pointer",
        }}
        onClick={handleLike}
      ></i>
    );
  }
}

export default Like;
