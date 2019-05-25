import React from 'react';
import AirportDropdown from '../AirportDropdown/AirportDropdown'

const Airports = (airport, term) => {
  let airportNearUser =airport.airportsNearUser.map(items => {
     return <AirportDropdown key={items.airportId}  airportItems={items} >  </AirportDropdown>;
  })
  return (
    <div className="container">
      <div className="wrapper">
      <p className="subtitle"> Pick a airport to depart from: </p>
        {airportNearUser}
        </div>
    </div>
  );
}

export default Airports;