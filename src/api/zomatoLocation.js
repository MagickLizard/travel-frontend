

import axios from 'axios';

export default axios.create({
  baseURL: 'https://ZomatoraygorodskijV1.p.rapidapi.com/getLocationDetailsByCoordinates',
  headers: {
    "X-RapidAPI-Host": "andruxnet-world-cities-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "88eb8510635c16647f782e4bfffe9514",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  params: {
    "user-key": '88eb8510635c16647f782e4bfffe9514'
  }
})
