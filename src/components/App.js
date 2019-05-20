import React from "react";

import "./App.css";
import Section from "./section/section";
import Spinner from "./Spinner/Spinner";

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
  componentDidUpdate() { //commented calling this function out for now
    
      if (this.state.errorMessage && !this.state.lat) {
        return <div> Error: {this.state.errorMessage}</div>;
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <Section location={this.state.lat}> Latitude:</Section>;
      }
      return (     <Spinner message="Please enable location tracking.. "> Loading! </Spinner>);
  }
  render() {
    return (
      <div>
        {/* {this.componentDidUpdate()} */}
        <Section>

        </Section>
      </div>
    );
  }
}


export default App;
