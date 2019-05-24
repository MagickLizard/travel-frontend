import axios from 'axios';
const geoLocation = 'geo:41.8369,-87.6847;cgen=gps';
const query = 'vet';

export default axios.create({
  baseURL: 'https://places.api.here.com/places/v1/discover/explore',
  headers: {
    Accept: 'application/json',
  },
  params: {

  }
});