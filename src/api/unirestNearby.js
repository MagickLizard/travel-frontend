
import axios from 'axios';

export default axios.create({
    baseURL: "https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city",
    headers: {
      "X-RapidAPI-Host": "andruxnet-world-cities-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
    }
})
