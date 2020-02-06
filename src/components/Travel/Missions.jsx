import React from 'react'
// import locationApi from '../../api/getlocationData'
import MissionList from './MissionList'
import Filters from '../filters/Filters'
import { filtertravels } from './missionHelper.js'
import stringByLatApi from '../../api/stringToLatitude'
import SearchBar from '../SearchBar/SearchBar'
class Missions extends React.Component {
  state = {
    travels: [],
    filteredtravels: [],
    filters: '',
    loading: true,
    err: ''
  }
  cityNameToLatitude = async (term) => {
    this.setState({ loading: true })
    stringByLatApi
      .get('', {
        params: {
          location: term
        }
      })
      .then((response) => {
        // this.searchForNearbyAirport()
        this.setState({ geoData: response.data.Results, loading: false })
      })
      .catch((err) => {
        console.log('err occurred>>', err)
        return err
      })
  }
  // async componentDidMount () {
  //   try {
  //     const launches = await locationApi.get('launches')
  //     const launchPads = await locationApi.get('launchpads')
  //     const travels = launches.data.map(launch => {
  //       return {
  //         ...launch,
  //         launchPad: launchPads.data.find(
  //           launchPad => launchPad.id === launch.launch_site.site_id
  //         )
  //       }
  //     })
  //     this.setState({
  //       travels,
  //       filteredtravels: travels
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  onFilterSubmit = filters => {
    if (filters) {
      const { travels } = this.state
      const filteredResult = filtertravels(filters, travels)
      this.setState({ filteredtravels: filteredResult })
    }
  }

  render () {
    const { travels, filteredtravels } = this.state
    return (
      <section>
        <Filters
          travels={travels}
          onFilterSubmit={this.onFilterSubmit}
        />
        <SearchBar
          onSubmit={this.cityNameToLatitude}
          loading={this.state.loading}
        />
        <section className='section'>
          <MissionList
            filteredtravels={filteredtravels}
            travelCount={filteredtravels.length}
          />
        </section>
      </section>
    )
  }
}

export default Missions
