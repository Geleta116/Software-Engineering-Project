import React, { Component } from "react";
import IFrame from "./common/iframe";
import VideoCard from "./common/videoCard";
import DropdownSearch from "./common/dropdownsearch";
import Card from "./common/card";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
class Videos extends Component {
  state = {
    videos: [
      { link: "https://www.youtube.com/embed/e74FaoCkSjM", alt: "One" },
      { link: "https://www.youtube.com/embed/cnNMo4u0L4M", alt: "Two" },
      { link: "https://www.youtube.com/embed/7ZEYQ30iBTc", alt: "Three" },
      { link: "https://www.youtube.com/embed/e74FaoCkSjM", alt: "One" },
      { link: "https://www.youtube.com/embed/cnNMo4u0L4M", alt: "Two" },
      { link: "https://www.youtube.com/embed/7ZEYQ30iBTc", alt: "Three" },
      { link: "https://www.youtube.com/embed/e74FaoCkSjM", alt: "One" },
      { link: "https://www.youtube.com/embed/cnNMo4u0L4M", alt: "Two" },
      { link: "https://www.youtube.com/embed/7ZEYQ30iBTc", alt: "Three" },
    ],
    query: "",
    filter: "",
    currentPage: 1,
    pageSize: 6,
  };
  handleQueryChange = ({ target }) => {
    this.setState({ query: target.value });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { query } = this.state;
    let filteredVideos = this.state.videos;

    if (query) {
      filteredVideos = this.state.videos.filter((video) =>
        video.alt.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    const videos = paginate(
      filteredVideos,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="videos-container">
        <div>
          <DropdownSearch
            onQueryChange={this.handleQueryChange}
            onFilterChange={this.handleFilterChange}
          />
        </div>
        <div className="videos">
          {videos.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
        <Pagination
          itemsCount={this.state.videos.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Videos;
