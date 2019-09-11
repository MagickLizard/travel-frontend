import React from "react";

import "./App.scss";
import geoLocationSearch from "../api/exploreNearbyGeo";
import stringByLatApi from "../api/stringToLatitude";
import SearchBar from "./SearchBar/SearchBar";
import ListOfPlaces from "./ListOfPlaces/ListOfPlaces";
import searchAiports from "../api/nearbyAirportToUser";
import Airports from "./Airports/Airports";
import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero'
import { Route, BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import background from '../img/background3small.jpg';

const Gradient = styled.section`
	position: relative;
  width: 100%;

	h1 {
		font-size: 40px;
		-webkit-transition: .5s .1s;
		-webkit-background-clip: text;
		cursor: pointer;
		
		&:hover {
      color: transparent;
      transition-duration: 5s;
      transition-timing-function: linear;
      animation: smooth;
      animation-delay: 10s;
		}

}
`;

class App extends React.Component {
  state = {
    geoData: [],
    locationsInCity: [],
    location: "",
    loading: "",
    airportsNearUser: []
  };
  pagePlace = () => {
    return (
      <div className="container">
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
          Airports Found nearby you: {this.state.geoData.length}
        </p>
      </div>
    );
  };

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
        this.setState({ geoData: response.data.Results, loading: false });     
        const GeolocationValues =
        "geo:" +
        this.state.geoData[0].lat +
        "," +
        this.state.geoData[0].lon +
        ";cgen=gps";
        this.autoSuggestSearch(GeolocationValues);
      })
      .catch(err => {
        console.log("err in api request's >>>", err);
      })
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
        this.setState({ locationsInCity: response.data.results.items, loading: false  });
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
      })
      .catch(err => {
        console.log("err", err);
      })
  };

  render() {
    return (
      <div>
      <Gradient className="hero is-primary is-fullheight has-background"> 
            <img
              className="img hero-background is-transparent"
              src={background}
              alt="background of lava"
            />
        <section>
          <div className="container">
            <Navigation />
            <Hero/>
            <section>
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
                </div>
                </Router>
              </div>
            </section>
          </div>
        </section>
        </Gradient>
      </div>
    );
  }
}

export default App;
