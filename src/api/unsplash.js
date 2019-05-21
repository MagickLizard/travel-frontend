import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      "Client-ID 2e9ed63a98511c8e7500b2c474673945b9d2128d225ee74e52741744df67af13"
  }
})