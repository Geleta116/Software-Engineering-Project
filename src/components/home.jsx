import React, { Component } from "react";
import Card from "./common/card";
import { Link } from "react-router-dom";
import DropdownSearch from "./common/dropdownsearch";
import { getVideos } from "../services/videoService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { getBooks } from "../services/bookService";
class Home extends Component {
  state = {
    selectedFilter: "",
    query: "",
    videos: [],
    currentPage: 1,
    pageSize: 6,
    books: [],
  };

  componentDidMount() {
    const videos = getVideos();
    const books = getBooks();
    this.setState({ videos, books });
  }
  handleFilterChange = (e) => {
    const filter = e.target.value;
    this.setState({ selectedFilter: filter });
  };
  handleQueryChange = (e) => {
    const query = e.target.value;
    this.setState({ query });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const items = paginate(
      this.state.books,
      this.state.currentPage,
      this.state.pageSize
    );

    if (!localStorage.getItem("token")) return window.location.href === "/";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "40px",
          background: "#272727",
          height: "100vh",
        }}
      >
        <header>
          <div>
            <DropdownSearch
              onFilterChange={this.handleFilterChange}
              onQueryChange={this.handleQueryChange}
            />
          </div>
        </header>
        <div
          className="cards_"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "center",
            marginTop: "10%",
            gap: "10px 10px",
          }}
        >
          {items.map((book) => (
            <Card title={book.bookName} key={book.bookName} />
          ))}
          <Pagination
            itemsCount={this.state.books.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Home;
