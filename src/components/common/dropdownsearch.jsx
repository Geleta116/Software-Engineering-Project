import React, { Component } from "react";
class DropdownSearch extends Component {
  state = {};
  render() {
    const { onFilterChange, onQueryChange } = this.props;
    return (
      <React.Fragment>
        <div class="dropdown">
          <div class="input-group-prepend select">
            <select
              class="btn outline"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onChange={onFilterChange}
            >
              <option class="dropdown-item" href="#">
                All
              </option>
              <option class="dropdown-item" href="#">
                Another action
              </option>
              <option class="dropdown-item" href="#">
                Something else here
              </option>
              <div role="separator" class="dropdown-divider"></div>
              <option class="dropdown-item" href="#">
                Separated link
              </option>
            </select>
          </div>
          <input
            type="text"
            class="form-control outline"
            aria-label="Text input with dropdown button"
            onChange={onQueryChange}
          />
          <div
            style={{
              position: "absolute",
              color: "black",
              right: "15px",
              top: "6px",
            }}
          >
            <i className="fa fa-search form-control btn"></i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DropdownSearch;
