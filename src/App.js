import React from "react";

import "./App.css";
import Section from "./components/section/section";
import Spinner from "./components/Spinner/Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props); //super is a reference to the parent constructor function
  //   this.state = { lat: null, errorMessage: '' }; //ONLY TIME TO DO THIS
  // }
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => 
        //DO NOT EVER DO THIS this.state.lat = position.coords.latitude
        this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    //anytime update is called render will be recalled before componentdidupdate
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <Section location={this.state.lat}> Latitude:</Section>;
    }
    return (      <Spinner message="Please enable location tracking.. "> Loading! </Spinner>);
    return (
      <div>
        <Section />
      </div>
    );
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
