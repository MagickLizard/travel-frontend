import React from 'react'
import PlacesCard from '../PlacesCard/PlacesCard'

const ListOfPlaces = props => {
  console.log('props test>>', props)

  const places = props.locationsInCity.map(place => {
    return (
      <PlacesCard place={place} key={place.id} />
    )
  })
  return (
    <section>
      <div className='container'>{places}</div>
    </section>
  )
}
export default ListOfPlaces
