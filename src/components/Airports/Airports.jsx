import React from 'react'
import AirportDropdown from '../AirportDropdown/AirportDropdown'

class Airports extends React.Component {
  airportsNearbyUser = () => {
    return this.props.airportsNearUser && this.props.airportsNearUser.map((items) => {
      return (
        <AirportDropdown key={items.airportId} airportItems={items}>
          {' '}
        </AirportDropdown>
      )
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='wrapper'>
          <p className='subtitle'> Pick a airport to depart from: </p>
          <div className='columns'>{this.airportsNearbyUser()}</div>
        </div>
      </div>
    )
  }
}
export default Airports
