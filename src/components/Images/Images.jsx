import React from "react";
import SearchBarImages from "../SearchBarImages/SearchBarImages";
import ImageList from "../ImageList/ImageList";
import unsplash from "../../api/unsplash";

class Images extends React.Component {

  state = {
    images: [],
    searchTerm: "",
    location: "",
    places: "",
    loading: "",
  };

  pageImagesRandom = () => {
    return (
      <div>
      <ImageList Images={this.onSearchSubmit}>  </ImageList>
        <p className="container">
          Images Found: {this.state.images.length}
        </p>
      </div>
    );
  };

  onSearchSubmit = async term => {
    let searchPath = "search/photos";
    unsplash
      .get(searchPath, {
        params: {
          query: term
        }
      })
      .then(response => {
        this.setState({ images: response.data.results });
      });
  };
  render() {
    return (
      <div>
        <section className="hero background-home is-fullheight-with-navbar backgroundHero">
          <div className="container">
            <SearchBarImages onSubmit={this.onSearchSubmit}> </SearchBarImages>
            <ImageList images={this.state.images}> </ImageList>
          </div>
        </section>
      </div>
    );
  }
}

export default Images;
