import React from 'react'

class AirportDropdown extends React.Component {
  state = { airport: '' }
  addLocation = () => {
    console.log('>>', this.props.airportItems.name)
  }
  render () {
    console.log('>>', this.state)

    return (
      <div className='section'>
        <div
          className='buttons field is-grouped'
          href=''
          onClick={this.addLocation}
        >
          <span className='button is-primary is-inverted is-outlined'>{this.props.airportItems.name}</span>
        </div>
      </div>
    )
  }
}
export default AirportDropdown
