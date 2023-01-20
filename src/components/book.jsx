import React, { Component } from "react";
import Card from "../components/common/card";
class Book extends Component {
  state = {};
  render() {
    const { title } = this.props;
    return <Card title={title} />;
  }
}

export default Book;
