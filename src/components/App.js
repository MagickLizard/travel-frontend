import React from "react";

import "./App.css";
import Spinner from "./Spinner/Spinner";
import Header from "./Header/Header";
import SearchBarImages from "./SearchBarImages/SearchBarImages";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList/ImageList";
import geoLocationSearch from "../api/exploreNearbyGeo";
import unirestNearbyApi from "../api/unirestNearby";
import stringByLatApi from "../api/stringToLatitude";
import SearchBar from "./SearchBar/SearchBar";
import Axios from "axios";

class App extends React.Component {
  state = { lat: null, images: [], city: [], geoData: [], searchTerm: '' };//Always make sure the state from the child and parent are matching otherwise error
  componentDidMount() {}
  searchByCity = async term => {
    unirestNearbyApi.get("").then(response => {
      console.log("response", response);
    });
  };
  cityNameToLatitude = async term => {
    console.log('this ', term)
    stringByLatApi.get("").then(response => {
      this.setState({ geoData: response.data.Results });
      console.log("response>>>", response.data.Results);
    });
  };
  autoSuggestSearch = async term => {
    geoLocationSearch.get("").then(response => {
      console.log("response", response.data.results.items);
    });
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
        <section className="hero background-home is-link is-fullheight-with-navbar">
          <div className="container">
            <Header />
            <section>
              <br />
              <br />
              <div className="container">
                <SearchBarImages onSubmit={this.onSearchSubmit} />
                <div className="container">
                  Images Found: {this.state.images.length}
                </div>
                <ImageList images={this.state.images}> </ImageList>
                <br />
                <br />
                <SearchBar onSubmit={this.cityNameToLatitude} />
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
