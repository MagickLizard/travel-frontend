import React from "react";

import "./App.css";
import geoLocationSearch from "../api/exploreNearbyGeo";
import stringByLatApi from "../api/stringToLatitude";
import SearchBar from "./SearchBar/SearchBar";
import ListOfPlaces from "./ListOfPlaces/ListOfPlaces";
import searchAiports from "../api/nearbyAirportToUser";
import Airports from "./Airports/Airports";
import Images from './Images/Images';
import Header from './Header/Header';
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  pagePlace = () => { //TODO: problem with components reloading because of routes..
    return (
      <div className="container">
        <br />
        <br />
        <ListOfPlaces locationsInCity={this.state.locationsInCity} />
        <div className="container"> </div>
        Places Found: {this.state.locationsInCity.length}
      </div>
    );
  };
  pageHome = () => {
    return (
      <div>
        <Airports
          airportsNearUser={this.state.airportsNearUser}
          locationsInCity={this.state.locationsInCity}
        />
        <p className="container">
          Airports Found nearby you: {this.state.locationsInCity.length}
        </p>
      </div>
    );
  };
  state = {
    lat: "",
    images: [],
    city: [],
    geoData: [],
    searchTerm: "",
    locationsInCity: [],
    location: "",
    places: "",
    loading: "",
    airportsNearUser: []
  }; //Always make sure the state from the child and parent are matching otherwise error
  cityNameToLatitude = async term => {
    this.setState({ loading: true });
    stringByLatApi
      .get("", {
        params: {
          location: term
        }
      })
      .then(response => {
        this.searchForNearbyAirport();
        const GeolocationValues =
          "geo:" +
          response.data.Results[0].lat +
          "," +
          response.data.Results[0].lon +
          ";cgen=gps";
        this.autoSuggestSearch(GeolocationValues);
        this.setState({ geoData: response.data.Results });
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    this.getUserLocation();
  }
  getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ location: position });
      },
      err => {
        console.log("err", err);
      }
    );
  };
  autoSuggestSearch = async GeolocationValues => {
    geoLocationSearch
      .get("", {
        headers: {
          Geolocation: GeolocationValues
        }
      })
      .then(response => {
        this.setState({ locationsInCity: response.data.results.items });
        this.setState({ loading: false });
      });
  };

  searchForNearbyAirport = async () => {
    searchAiports
      .get("", {
        params: {
          lng: this.state.location.coords.longitude,
          lat: this.state.location.coords.latitude
        }
      })
      .then(response => {
        this.setState({ airportsNearUser: response.data });
      });
  };

  render() {
    return (
      <div>
        <section className="hero background-home is-fullheight-with-navbar backgroundHero">
          <div className="container">
            <Header />
            <section>
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">Where are you heading? </h1>
                    <h2 className="subtitle">Search by city..</h2>
                  </div>
                </div>
              </section>
              <div className="container">
                <SearchBar
                  onSubmit={this.cityNameToLatitude}
                  loading={this.state.loading}
                />
                <Router> 
                <div className='container'>
                <Route path="/" exact component={this.pageHome}>
                </Route>
                <Route path="/places" component={this.pagePlace}/>
                <Route path="/images" component={Images}/>
                </div>
                </Router>
                <br />
                <br />
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
