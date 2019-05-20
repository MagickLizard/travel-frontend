import React from "react";

import "./App.css";
import Spinner from "./Spinner/Spinner";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Card from "./Card/Card";
import CardInfo from "./CardInfo/CardInfo";
import SearchLocation from "./SearchLocation/SearchLocation";
import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
  // constructor(props) {
  //   super(props); //super is a reference to the parent constructor function
  //   this.state = { lat: null, errorMessage: '' }; //ONLY TIME TO DO THIS
  // }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        //DO NOT EVER DO THIS this.state.lat = position.coords.latitude
        this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    //commented calling this function out for now
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <section location={this.state.lat}> Latitude:</section>;
    }
    return (
      <Spinner message="Please enable location tracking.. "> Loading! </Spinner>
    );
  }
  onSearchSubmit(term) {
    console.log("onSearchSubmit", term);
  }
  render() {
    return (
      <div>
        {/* {this.componentDidUpdate()} */}
        <section className="hero background-home is-link is-fullheight-with-navbar">
          <div className="container">
            <Header />
            <section>
              <Hero />
              <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit}> </SearchBar>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
