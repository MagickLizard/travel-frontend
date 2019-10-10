import React from 'react'
import geoLocationSearch from '../../api/exploreNearbyGeo'
import stringByLatApi from '../../api/stringToLatitude'
import SearchBar from '../SearchBar/SearchBar'
import ListOfPlaces from './ListOfPlaces/ListOfPlaces'
import searchAiports from '../../api/nearbyAirportToUser'

class Places extends React.Component {
  state = {
    geoData: [],
    locationsInCity: [],
    location: '',
    loading: '',
    airportsNearUser: []
  }
  pagePlace = () => {
    return (
      <div className='container'>
        <ListOfPlaces locationsInCity={this.state.locationsInCity} />
        <div className='container' />
        Places Found: {this.state.locationsInCity.length}
      </div>
    )
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
        this.setState({ airportsNearUser: response.data })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  render () {
    return (
      <div>
        <section>
          <div className='container'>
            <SearchBar
              onSubmit={this.getPlacesByCoordinates}
              loading={this.state.loading}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default Places
