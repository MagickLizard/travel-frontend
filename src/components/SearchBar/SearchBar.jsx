import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "", city: [] };

  onInputChange(event) {
    console.log("event", event.target.value);
  }
  onInputClick = () => {
    console.log("Input was clicked");
  };
  onFormSubmit = event => {
    console.log('form submit props', this.props)
    this.props.onSubmit(this.state.term); //this.props.onSubmit is the function in app onSubmit() and the state is the value in the input field below.
    event.preventDefault();
  };
  onSearchLocation = event => {
    console.log('event',event)
    console.log('props>>>', this.props)
    this.props.onChange(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="control">
              <input
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
                className="input is-large"
                type="text"
                placeholder="Search by a town"
              />
              <div className="container"> 
              <button
                className="button is-success is-medium"
                onChange={event => console.log("input was clicked", event)}
              >
                Search!
              </button>
              {/* <button className="container" onChange={this.onSearchLocation}> </button> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
