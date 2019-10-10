import React from 'react'

class PlacesCard extends React.Component {
  state = {
    placesCard: '',
    place: '',
    openHours: '',
    categoryTitle: '',
    hours: '',
    address: ''
  }

  placeFunction = (props) => {
    const addressClean = this.props.place.vicinity.replace(/<br[^>]*>/g, ' ')
    this.setState({ address: addressClean })
    if (!this.props.place.openingHours) {
      this.setState({ openHours: 'No open hours available' })
    } else {
      const hours = this.props.place.openingHours.text.replace(
        /<br[^>]*>/g,
        ' '
      )
      this.setState({ openHours: hours })
    }
  }
  componentDidMount () {
    this.placeFunction(this.props)
  }
  render () {
    return (
      <div className='card'>
        <div className='card-image'>
          {/* <figure className="image is-small">
            <img
              src={this.props.place.icon}
              alt="Placeholder image"
            />
          </figure> */}
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <figure className='image is-small'>
                <img src={this.props.place.icon} alt='Placeholder icon' />
              </figure>
            </div>
            <div className='content'>
              <h3 className='subtitle cardTitle'>
                Place {this.props.place.title}
              </h3>
              <h4 className=''>Category</h4>
              <p className='is-3'>{this.props.place.category.title}</p>
              <h4 className='is-6'>Address</h4>
              <p className='is-6'>{this.state.address}</p>
              <h4 className='is-6'>Hours</h4>
              <p className='is-6'> {this.state.openHours}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PlacesCard
