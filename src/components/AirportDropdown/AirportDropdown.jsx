import React from "react";

class AirportDropdown extends React.Component {
  state = {airport: ''}
  addLocation = (event) => {
    console.log('event>>',event)
    console.log('>>',this.props.airportItems.name)
    // this.props.propertyAction(this.props.items)
  }
  render() {
    console.log('>>',this.state)
    
    return (
      <div className="container">
      <button className='' href=''onClick={this.addLocation}>
        <span className="tag is-dark">{this.props.airportItems.name}</span>
        </button>
      </div>
    );
  }
}
export default AirportDropdown;
