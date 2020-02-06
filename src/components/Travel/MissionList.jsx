import React from 'react'
import MissionCard from './MissionCard'

class MissionList extends React.Component {
  state = { filteredtravels: [] }
  render() {
    const { filteredtravels, travelCount } = this.props
    return (
      <section>
        <div className="columns">
          <div className="column has-text-centered">
            <p>Showing {travelCount} travels</p>
          </div>
        </div>
        {filteredtravels.map((travel, index) => {
          return <MissionCard travel={travel} key={index} />
        })}
      </section>
    )
  }
}
export default MissionList
