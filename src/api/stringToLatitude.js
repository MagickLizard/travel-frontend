
import axios from 'axios';

export default axios.create({
    baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    headers: {
      "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
    }
})
