import React from 'react'
import { getTime, getDate } from './missionHelper.js'
import './missions.scss'
class MissionCard extends React.Component {
  renderButtons = () => {
    const {
      travel: { links }
    } = this.props
    return Object.keys(links).map((link, index) => {
      return (
        <a
          key={index}
          className='button is-outlined is-capitalized'
          href={links[link]}
          alt='Placeholder image'
          target='
          _blank'
        >
          {link.replace(/_/g, ' ')}
        </a>
      )
    })
  }

  render () {
    const { travel } = this.props
    if (!travel) {
      return <div />
    }
    return (
      <div className='columns travel-item'>
        <div className='column'>
          <figure className='image is-64x64'>
            <img
              ref={travel.links.travel_patch}
              src={travel.links.travel_patch}
              alt='travel rocket badge'
            />
          </figure>
        </div>
        <div className='column is-8'>
          <span className='has-text-weight-bold'>
            {travel.rocket.rocket_name} - {travel.payloads[0].payload_id}
          </span>
          <span className='is-warning'>
            {travel.launch_success === false ? '  - Failed travel' : ''}
          </span>
          <div>
            Launched on {getDate(travel)} at {getTime(travel)} from{' '}
            {travel.launchPad.full_name}
          </div>
          <div className='buttons travel-buttons'>{this.renderButtons()}</div>
        </div>
        <div className='column is-2'>
          <h2 className='subtitle is-size-4 has-text-centered'>
            #{travel.flight_number}
          </h2>
          <p className='has-text-centered'> Flight number</p>
        </div>
      </div>
    )
  }
}
export default MissionCard
