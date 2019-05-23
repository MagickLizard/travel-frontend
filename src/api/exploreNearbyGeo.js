import axios from 'axios';
const geoLocation = 'geo:41.8369,-87.6847;cgen=gps';
const query = 'vet';

export default axios.create({
  baseURL: 'https://places.api.here.com/places/v1/discover/explore',
  headers: {
    Accept: 'application/json',
    Geolocation: 'geo:41.8369,-87.6847;cgen=gps',
    'X-Map-Viewport': '-122.408,37.793,-122.4070,37.7942'
  },
  params: {

  }
});