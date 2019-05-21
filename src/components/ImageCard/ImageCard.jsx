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
    let height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 150)

    console.log(this.imageRef.current.clientHeight)
  }
  render(image) {
    console.log('image', image)
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
        </div>
    );
  }
}
export default ImageCard;
