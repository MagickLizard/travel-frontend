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
import ListOfPlaces from "./ListOfPlaces/ListOfPlaces";

class App extends React.Component {
  state = { lat: '', images: [], city: [], geoData: [], searchTerm: '', locationsInCity: [], location: '', places: '', loading: '' };//Always make sure the state from the child and parent are matching otherwise error
  componentDidMount() {}
  cityNameToLatitude = async term => {
    this.setState({loading: true})
    console.log('this ', term)
    stringByLatApi.get("", {
      params: {
        location: term
      }
    }).then(response => {
      const GeolocationValues = 'geo:'+ response.data.Results[0].lat + ',' + response.data.Results[0].lon + ';cgen=gps';
      this.autoSuggestSearch(GeolocationValues)
      this.setState({ geoData: response.data.Results });

    });
  };
  autoSuggestSearch = async GeolocationValues => {
    console.log('GeolocationValues autoSuggestSearch', GeolocationValues)
    geoLocationSearch.get("", {
      headers: {
        Geolocation: GeolocationValues
      }
    }).then(response => {
      this.setState({locationsInCity: response.data.results.items})
      this.setState({loading: false})
      console.log("response", response.data.results.items);
    });
  };

getUserLocation () {
  let navResponse =  navigator.geolocation.getCurrentPosition(
    (position) => console.log('position', position),
    err => console.log('err', err)
  );
  this.setState =({location: navResponse})
  console.log('responsenav', navResponse)
}

  componentDidUpdate() {

    return <section location={this.state.location}> Latitude:</section>;
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
        <section className="hero background-home is-fullheight-with-navbar backgroundHero">
          <div className="container">
            <Header />
            <section>
              <br />
              <br />
              <div className="container">
                {/* <SearchBarImages onSubmit={this.onSearchSubmit} /> 
                <div className="container">
                  Images Found: {this.state.images.length}
                </div>
                <ImageList images={this.state.images}> </ImageList> */}
                <br />
                <br />
    
                <SearchBar onSubmit={this.cityNameToLatitude} loading={this.state.loading} >
                </SearchBar>
                <div className="container">
                  Places Found: {this.state.locationsInCity.length}
                </div>
                <ListOfPlaces locationsInCity={this.state.locationsInCity}>  </ListOfPlaces>

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
