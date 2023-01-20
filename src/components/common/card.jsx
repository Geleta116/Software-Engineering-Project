import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisLike from "./dislike";
import Ellipsis from "./ellipsis";
import Like from "./like";
class Card extends Component {
  state = {
    liked: false,
    /* disliked: false, */
  };
  handleLike = () => {
    const liked = !this.state.liked;
    this.setState({ liked });
  };
  handledisLike = () => {
    const disliked = !this.state.disliked;
    this.setState({ disliked });
  };
  hand;

  render() {
    const { title } = this.props;
    return (
      <div
        className="card hover card_"
        style={{
          background: "#272727",
          boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px",
        }}
      >
        <div className="card-body" style={{}}>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2">{title}</h6>
          <p className="card-text" style={{ color: "whitesmoke" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" className="card-link">
              Book Link
            </Link>
            <div>
              <Like liked={this.state.liked} handleLike={this.handleLike} />
              {/* <DisLike
                disliked={this.state.disliked}
                handledisLike={this.handledisLike}
              /> */}
              <Ellipsis />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
