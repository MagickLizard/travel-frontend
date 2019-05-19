import React, { Component } from "react";

class CardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    console.log('props', props)
  }
  getCardInfo() {
    return (
      <div className="card-content">
      <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </img>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4"> {this.props.name}</p>
        <p className="subtitle is-6">@{this.props.name}</p>
      </div>
    </div>
        <p className="subtitle">
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </p>
        <p> {this.props.timeSent}</p>
      </div>
    );
  }

  render() {
    return this.getCardInfo();
  }
}
export default CardInfo;