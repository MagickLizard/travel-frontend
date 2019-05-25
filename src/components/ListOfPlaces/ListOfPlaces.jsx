import React from "react";
import PlacesCard from "../PlacesCard/PlacesCard";

const ListOfPlaces = props => {
  console.log("props", props.locationsInCity);
  const places = props.locationsInCity.map(place => {
    return (
      <PlacesCard place={place} key={place.id}>
      </PlacesCard>
    );
  });
  return (
    <section>
      <div className="container">{places}</div>
    </section>
  );
};
export default ListOfPlaces;
