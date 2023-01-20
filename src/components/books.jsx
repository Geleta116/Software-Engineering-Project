import React, { Component } from "react";
import { getBooks } from "../services/bookService";
import { paginate } from "../utils/paginate";
import Book from "./book";
import DropdownSearch from "./common/dropdownsearch";
import Pagination from "./common/pagination";

class Books extends Component {
  state = {
    books: getBooks(),
    currentPage: 1,
    pageSize: 9,
    query: "",
    filter: "",
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleQueryChange = (e) => {
    const query = e.target.value;
    this.setState({ query });
  };
  handleFilterChange = (e) => {
    const filter = e.target.value;
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { query } = this.state;
    let filteredBooks = this.state.books;
    if (query) {
      filteredBooks = this.state.books.filter((book) =>
        book.bookName.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    const books = paginate(
      filteredBooks,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="books-container">
        <div>
          <DropdownSearch
            onQueryChange={this.handleQueryChange}
            onFilterChange={this.handleFilterChange}
          />
        </div>
        <div className="books">
          {/* <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr>
                    <td>{book.bookName}</td>
                    <td>{book.bookAuthor}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          {books.map((book) => (
            <Book key={book.bookName} title={book.bookName} />
          ))}
          <Pagination
            itemsCount={filteredBooks.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        {/* <div></div>
        <div></div> */}
      </div>
    );
  }
}

export default Books;
