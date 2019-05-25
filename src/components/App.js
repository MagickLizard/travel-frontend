import React from "react";

import "./App.css";
import Header from "./Header/Header";
// import SearchBarImages from "./SearchBarImages/SearchBarImages";
// import ImageList from "./ImageList/ImageList";
// import unsplash from "../api/unsplash";
import geoLocationSearch from "../api/exploreNearbyGeo";
import stringByLatApi from "../api/stringToLatitude";
import SearchBar from "./SearchBar/SearchBar";
import ListOfPlaces from "./ListOfPlaces/ListOfPlaces";
import searchAiports from '../api/nearbyAirportToUser';
import Airports from './Airports/Airports'

class App extends React.Component {
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
        const GeolocationValues = 'geo:'+ response.data.Results[0].lat + ',' + response.data.Results[0].lon + ';cgen=gps';
        this.autoSuggestSearch(GeolocationValues);
        this.setState({ geoData: response.data.Results });
        this.setState({ loading: false });
      });
  };
  componentDidMount () {
    this.getUserLocation();
  }
  getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
     position => {
       console.log('position in userLocation', position)
       this.setState ({ location: position })
     },
     err => {console.log("err", err) }
   );
 }
  autoSuggestSearch = async GeolocationValues => {
    console.log("GeolocationValues autoSuggestSearch", GeolocationValues);
    geoLocationSearch
      .get("", {
        headers: {
          Geolocation: GeolocationValues
        }
      })
      .then(response => {
        this.setState({ locationsInCity: response.data.results.items });
        this.setState({ loading: false });;
      });
  };

  searchForNearbyAirport = async () => {
    searchAiports.get("", {
      params: {
        lng: this.state.location.coords.longitude,
        lat: this.state.location.coords.latitude
      }
    })
    .then(response => {
      this.setState({airportsNearUser: response.data});
      console.log('response', response.data)
    })
  }

  // onSearchSubmit = async term => {
  //   let searchPath = "search/photos";
  //   unsplash
  //     .get(searchPath, {
  //       params: {
  //         query: term
  //       }
  //     })
  //     .then(response => {
  //       this.setState({ images: response.data.results });
  //     });
  // };
  render() {
    return (
      <div>
        <section className="hero background-home is-fullheight-with-navbar backgroundHero">
          <div className="container">
            <Header/>
            <section>
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <p> Location:  </p>
                    <h1 className="title">Where are you heading? </h1>
                    <h2 className="subtitle">Search by city..</h2>
                  </div>
                </div>
              </section>
              <div className="container">
                <br />
                <br />
                <SearchBar
                  onSubmit={this.cityNameToLatitude}
                  loading={this.state.loading}
                />
                <Airports airportsNearUser={this.state.airportsNearUser} locationsInCity={this.state.locationsInCity}> </Airports>
                <p className="container">
                  Places Found: {this.state.locationsInCity.length}
                </p>
                <div>
                </div>
                <ListOfPlaces locationsInCity={this.state.locationsInCity}>
                </ListOfPlaces>
  
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
