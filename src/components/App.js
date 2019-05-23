import React from "react";

import "./App.css";
import Spinner from "./Spinner/Spinner";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import SearchBar from "./SearchBar/SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList/ImageList";
import geoLocationSearch from "../api/exploreNearbyGeo";
import unirestNearbyApi from "../api/unirestNearby";
import StringByLatApi from "../api/stringToLatitude";
import Axios from "axios";

class App extends React.Component {
  state = { lat: null, images: [], city: [] };
  componentDidMount() {}
  searchByCity = async term => {
    unirestNearbyApi.get('')
    .then(response => {
      console.log('response', response)
    })
  };
  cityNameToLatitude = async term => {
    StringByLatApi.get('')
    .then(response => {
      console.log('response>>>', response.data.Results)
    })
  }
  autoSuggestSearch = async term => {
    geoLocationSearch.get('')
    .then(response => {
      console.log('response', response.data.results.items)
    })
  };
  componentDidUpdate() {
    return <section location={this.state.lat}> Latitude:</section>;
  }

  onSearchSubmit = async term => {
    let searchPath = "search/photos";
    unsplash
      .get(searchPath, {
        params: {
          query: term
        }
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
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="container">
                  Images Found: {this.state.images.length}
                </div>
                <ImageList images={this.state.images}> </ImageList>
                <input
                  className="input is-large"
                  onChange={this.cityNameToLatitude}
                />
                <div className="container"> {this.state.city}</div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
