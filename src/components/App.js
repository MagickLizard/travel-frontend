import React from "react";

import "./App.css";
import Spinner from "./Spinner/Spinner";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Card from "./Card/Card";
import CardInfo from "./CardInfo/CardInfo";
import SearchLocation from "./SearchLocation/SearchLocation";
import SearchBar from "./SearchBar/SearchBar";
import unirest from "unirest";
import axios from 'axios';

class App extends React.Component {
  // constructor(props) {
  //   super(props); //super is a reference to the parent constructor function
  //   this.state = { lat: null, errorMessage: '' }; //ONLY TIME TO DO THIS
  // }
  state = { lat: null};
  componentDidMount() {
    // window.navigator.geolocation.getCurrentPosition(
    //   position =>
    //     //DO NOT EVER DO THIS this.state.lat = position.coords.latitude
    //     this.setState({ lat: position.coords.latitude }),
    //   err => this.setState({ errorMessage: err.message })
    // );

    // unirest
    //   .get(
    //     "https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city"
    //   )
    //   .header("X-RapidAPI-Host", "andruxnet-world-cities-v1.p.rapidapi.com")
    //   .header(
    //     "X-RapidAPI-Key",
    //     "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
    //   )
    //   .end(function(result) {
    //     console.log("testing>>", result.status, result.headers, result.body);
    //     for (let i of result.body) {
    //       console.log('i>>', i)
    //       this.setState({ lat: i.city });
    //     }
  
    //   });

  }
  componentDidUpdate() {
    return <section location={this.state.lat}> Latitude:</section>;
  }
  // componentDidUpdate() {
  //   //commented calling this function out for now
  //   if (this.state.errorMessage && !this.state.lat) {
  //     return <div> Error: {this.state.errorMessage}</div>;
  //   }
  //   if (!this.state.errorMessage && this.state.lat) {
  //     return <section location={this.state.lat}> Latitude:</section>;
  //   }
  //   return (
  //     <Spinner message="Please enable location tracking.. "> Loading! </Spinner>
  //   );
  // }
  onSearchSubmit(term) {
    let path = 'search/photos'
    let rootUrl = 'https://api.unsplash.com/'+ path;

    axios.get(rootUrl, {
      params: {
        query: term
      },
      headers:{
        Authorization: 'Client-ID 2e9ed63a98511c8e7500b2c474673945b9d2128d225ee74e52741744df67af13'
      }
    });
    console.log("onSearchSubmit", term);
  }
  render() {
    return (
      <div>
        {this.componentDidUpdate()}
        <section className="hero background-home is-link is-fullheight-with-navbar">
          <div className="container">
            <Header />
            <section>
              <Hero />
              <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit}> </SearchBar>
                <div className="container"> </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
