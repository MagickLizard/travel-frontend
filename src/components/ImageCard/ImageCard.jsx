import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
    console.log('this.imageRef', this.imageRef)
  }
  setSpans = () => {
    let height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150)
    this.setState({spans})
  }
  render(image) {
    return (
        <img
          style={{gridRowEnd: `spans ${this.state.spans}`}}
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
    );
  }
}
export default ImageCard;
