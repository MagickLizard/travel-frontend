
import axios from 'axios';
import unirest from 'unirest';

// export default unirest.get(
//     "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New+York"
//   )
//   .header(
//     "X-RapidAPI-Host",
//     "devru-latitude-longitude-find-v1.p.rapidapi.com"
//   )
//   .header(
//     "X-RapidAPI-Key",
//     "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
//   )
//   .end(function(result) {

//     console.log(result.status, result.headers, result.body);
//     return result;
//   });

// export default unirestNearby;
export default axios.create({
    baseURL: "https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city",
    headers: {
      "X-RapidAPI-Host": "andruxnet-world-cities-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
    }
        // this.setState({ city: response })
      // }
      // .end(function(result) {
      //   console.log("testing>>", result.status, result.headers, result.body);
      //
      //     this.setState({ city: result });
      //
      // });
})
// export default unirest.get("https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city")
//   .header() {
//     "X-RapidAPI-Host": "andruxnet-world-cities-v1.p.rapidapi.com",
//     "X-RapidAPI-Key": "951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58"
//   }
      // this.setState({ city: response })
    // }
    // .end(function(result) {
    //   console.log("testing>>", result.status, result.headers, result.body);
    //
    //     this.setState({ city: result });
    //
    // });

