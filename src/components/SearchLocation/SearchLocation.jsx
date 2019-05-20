import React, { Component } from "react";

class SearchLocation extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props)
    this.state = {
      test: "testing"
    };
  }
  getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "Summer" : "Winter";
    } else {
      return lat < 0 ? "Winter" : "Summer";
    }
  };
  getSeasonDisplay = lat => {
    let seasonResponse = this.getSeason(lat, new Date().getMonth());
    const seasonConfig = {
      Summer: {
        text: "Lets find you a winter holiday!"
      },
      Winter: {
        text: "Lets find you a summer holiday!"
      }
    };
    const { text } = seasonConfig[seasonResponse];
    return text;
  };

  //BELOW this.props.children this is a state that is passed as a prop
  render() {
    return (
      <div>
        SearchLocation {this.getSeasonDisplay(this.props.children)}
        <div>Latitude: {this.props.children}</div>
      </div>
    );
  }
}
export default SearchLocation;
