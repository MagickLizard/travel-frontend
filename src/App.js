import React from 'react';

import './App.css';
import Section from './components/section/section.jsx'


class App extends React.Component {
  constructor(props) {
    super(props); //super is a reference to the parent constructor function
    this.state = {lat: "test"}; //ONLY TIME TO DO THIS
    window.navigator.geolocation.getCurrentPosition(
      (position) => { 
        //DO NOT EVER DO THIS this.state.lat = position.coords.latitude 
        this.setState({ lat: position.coords.latitude})
      },
      (err) => console.log(err)
      );
  }
  render () {
    return (
     <div>
     <div className="title"> Latitude : {this.state.lat}</div>
      <Section>
      </Section>
    </div>
    )
  }
}
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
//   );
//   return (
//     <div className="App">
//       <Section>
//       </Section>
//     </div>
//   );
// }

export default App;
