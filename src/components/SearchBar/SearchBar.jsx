import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "", latitude: [], longitude: [] };

  handlingString = async event => {
    console.log("event hanle>>", event.target.value);
     this.setState({searchTerm: event.target.value});
  };
  onSubmitFunc = async event => {
    event.preventDefault();
    console.log('this.state.searchTerm', this.state.searchTerm)
    this.props.onSubmit(this.state.searchTerm);
    console.log("blah", this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitFunc}>
        <input
          value={this.state.searchTerm}
          onChange={this.handlingString}
          className="input is-large"
        />
      </form>
    );
  }
}
export default SearchBar;
