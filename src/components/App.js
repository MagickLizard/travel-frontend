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
import unsplash from "../api/unsplash";
import ImageList from './ImageList/ImageList';

class App extends React.Component {
  state = { lat: null, images: [], city: [] };
  componentDidMount() {
  }
  searchByCity = async term => {
    console.log("term", term);
    unirest
      .get(
        "https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city"
      )
      .header("X-RapidAPI-Host", "andruxnet-world-cities-v1.p.rapidapi.com")
      .header(
        "X-RapidAPI-Key",
        "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
      )
      .then(response => {
        this.setState({ city: response })
  });
}
  componentDidUpdate() {
    return <section location={this.state.lat}> Latitude:</section>;
  }

  onSearchSubmit = async term => {
    let searchPath = "search/photos";
    unsplash
      .get(searchPath, {
        params: {
          query: term
        },
      })
      .then(response => {
        this.setState({ images: response.data.results });
        console.log("then>", response.data.results);
      });
  };
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
                <SearchBar onSubmit={this.onSearchSubmit}>
                </SearchBar>
                <ImageList images={this.state.images}> </ImageList>
                <div className="container" onChange={this.searchByCity}>
                </div>
                      <div className="container">
                    Testing: {this.state.city}
                  </div>
                Found {this.state.images.length} images
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
