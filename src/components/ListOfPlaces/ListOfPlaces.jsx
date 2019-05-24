import React from "react";
import PlacesCard from "../PlacesCard/PlacesCard";

const ListOfPlaces = props => {
  console.log("props", props.locationsInCity);
  const places = props.locationsInCity.map(place => {
    console.log("place", place);
    return (
      <PlacesCard place={place} key={place.id}>
      </PlacesCard>
    );
  });
  return (
    <section className="section">
      <div className="container">{places}</div>
    </section>
  );
};
export default ListOfPlaces;
