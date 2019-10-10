import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?',
  headers: {
    'X-RapidAPI-Host': 'cometari-airportsfinder-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '951dd8fe7bmsh901d416187df458p18dbc5jsncd62ce4a5f58'
  },
  params: {
    radius: '50'
  }
})
