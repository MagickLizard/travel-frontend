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
import axios from "axios";

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
      // }
      // .end(function(result) {
      //   console.log("testing>>", result.status, result.headers, result.body);
      //   // for (let i of result.body) {
      //     this.setState({ city: result });
      //   // }
      // });
  });
}
  componentDidUpdate() {
    return <section location={this.state.lat}> Latitude:</section>;
  }

  onSearchSubmit = async term => {
    let path = "search/photos";
    let rootUrl = "https://api.unsplash.com/" + path;

    axios
      .get(rootUrl, {
        params: {
          query: term
        },
        headers: {
          Authorization:
            "Client-ID 2e9ed63a98511c8e7500b2c474673945b9d2128d225ee74e52741744df67af13"
        }
      })
      .then(response => {
        this.setState({ images: response.data.results });
        console.log("then>", response.data.results);
      });

    console.log("onSearchSubmit", term);
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
                  <div className="container">
                    Found {this.state.images.length} images
                  </div>
                  <div className="container" onChange={this.searchByCity}>
                    Testing: {this.state.city}
                  </div>
                </SearchBar>
          
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
