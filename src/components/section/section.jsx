import React, { Component } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import CardInfo from "../CardInfo/CardInfo";
import SearchLocation from "../SearchLocation/SearchLocation";
import SearchBar from "../SearchBar/SearchBar";

class Section extends Component {
  //React - have to define render - otherwise react will throw a error
  render() {
    return (
      <section className="hero background-home is-link is-fullheight-with-navbar">
        <div className="container">
          <Header />
          <section>
            <Hero />
            <div className="container">
            </div>
          </section>
        </div>
      </section>
    );
  }
}
export default Section;
