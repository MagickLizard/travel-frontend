import React, { Component } from "react";

class SearchBar extends Component {
  state = {term: ''};
  onInputChange(event) {
    console.log("event", event.target.value);
  }
  onInputClick() {
    console.log("Input was clicked");
  }
  render() {
    return (
      <div>
        <form>
          <div className="field">
            <div className="control">
              <input value={this.state.term}
                onChange={(event)=> this.setState({term: event.target.value.toUpperCase()})}
                className="input is-large"
                type="text"
                placeholder="Search by a town"
              />
              <button
                className="button is-success is-medium"
                onChange={(event) => console.log('input was clicked', event)}
              >
                Search!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
