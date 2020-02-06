import React from 'react'
import Hero from './hero/Hero'
import Missions from './Travel/Missions'
import Footer from './footer/Footer'
import './App.scss'
import geoLocationSearch from '../api/exploreNearbyGeo'
import stringByLatApi from '../api/stringToLatitude'
import SearchBar from './SearchBar/SearchBar'
import ListOfPlaces from './Places/ListOfPlaces/ListOfPlaces'
import searchAiports from '../api/nearbyAirportToUser'
import Airports from './Airports/Airports'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import background from '../img/background.jpg'

const Gradient = styled.section`
position: relative;
width: 100%;

h1 {
  font-size: 40px;
  -webkit-transition: 0.5s 0.1s;
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
`
class App extends React.Component {
  state = {
    geoData: [],
    locationsInCity: [],
    location: '',
    loading: '',
    airportsNearUser: []
  }
  pagePlace = () => {
    console.log('this.state.locationsInCity>>', this.state.locationsInCity)

    return (
      <div className='container'>
        <ListOfPlaces locationsInCity={this.state.locationsInCity} />
        <div className='container' />
        Places Found: {this.state.locationsInCity.length}
      </div>
    )
  }
  pageHome = () => {
    return (
      <div>
        <Airports
          airportsNearUser={this.state.airportsNearUser}
          locationsInCity={this.state.locationsInCity}
        />
        <p className='container'>
          Airports Found nearby you: {this.state.geoData.length}
        </p>
      </div>
    )
  }

  cityNameToLatitude = async (term) => {
    this.setState({ loading: true })
    stringByLatApi
      .get('', {
        params: {
          location: term
        }
      })
      .then((response) => {
        this.searchForNearbyAirport()
        this.setState({ geoData: response.data.Results, loading: false })
      })
      .catch((err) => {
        console.log('err occurred>>', err)
        return err
      })
  }
  getPlacesByCoordinates = async (term) => {
    this.setState({ loading: true })
    stringByLatApi
      .get('', {
        params: {
          location: term
        }
      })
      .then((response) => {
        this.searchForNearbyAirport()
        this.setState({ geoData: response.data.Results, loading: false })
        const GeolocationValues =
          'geo:' +
          this.state.geoData[0].lat +
          ',' +
          this.state.geoData[0].lon +
          ';cgen=gps'
        this.autoSuggestSearch(GeolocationValues)
      })
      .catch((err) => {
        console.log('err occurred>>', err)
        return err
      })
  }
  componentDidMount () {
    this.getUserLocation()
  }
  getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ location: position })
      },
      (err) => {
        console.log('err', err)
      }
    )
  }
  autoSuggestSearch = async (geolocationValues) => {
    geoLocationSearch
      .get('', {
        headers: {
          Geolocation: geolocationValues
        }
      })
      .then((response) => {
        this.setState({
          locationsInCity: response.data.results.items,
          loading: false
        })
      })
  }

  searchForNearbyAirport = async () => {
    searchAiports
      .get('', {
        params: {
          lng: this.state.location.coords.longitude,
          lat: this.state.location.coords.latitude
        }
      })
      .then((response) => {
        console.log('response>>', response)

        this.setState({ airportsNearUser: response.data })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
  render () {
    return (
      <div className='App'>
        <Hero />
        <Missions />
        <Footer />
      </div>
    )
  }
}

export default App
