import axios from 'axios'
const query = 'vet'

export default axios.create({
  baseURL: 'https://places.api.here.com/places/v1/discover/explore',
  headers: {
    Accept: 'application/json'
  },
  params: {
    app_id: 'mzrjl5QolxywuUwjbvcz',
    app_code: '2xOQivTeB8u3A0H1aVeT8Q'
  }
})
