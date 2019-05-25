import React from "react";

class AirportDropdown extends React.Component {
  render() {
    return (
      <div className="container">
        <span className="tag is-dark">{this.props.airportItems.name}</span>
      </div>
    );
  }
}
export default AirportDropdown;
