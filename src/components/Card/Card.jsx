import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullName: ""

  }
}
  render() {
    return (
      <div className="card">
        {this.props.children}
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on{" "}
              <a href="https://twitter.com/codinghorror/status/506010907021828096">
                Twitter
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}
export default Card
