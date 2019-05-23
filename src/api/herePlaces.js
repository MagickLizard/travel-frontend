import axios from "axios";
const geoLocation = "?at=40.74917,-73.98529";
const query = 'vet';

 export default axios.create({
    baseUrl: "https://places.cit.api.here.com/places/v1/autosuggest",
    headers: {
      params: {
        app_id: "mzrjl5QolxywuUwjbvcz",
        app_code: "2xOQivTeB8u3A0H1aVeT8Q",
        at: geoLocation,
        q: query,
      }
    }
  });
  
