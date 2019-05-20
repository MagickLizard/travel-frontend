import React, { Component } from "react";
import Header from "../header/Header";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import CardInfo from "../CardInfo/CardInfo";
import SearchLocation from "../SearchLocation/SearchLocation";

class Section extends Component {
  //React - have to define render - otherwise react will throw a error
  render() {
    return (
      <section>
        <div className="container">
          <Header />
          <section>
            <Hero />
            <SearchLocation> {this.props.location}</SearchLocation>
          </section>
          <Card>
            <CardInfo
              editor="Sam Smith"
              timeSent="Today at 4:10pm"
              name="Heidi Kloom"
            />
            <CardInfo
              editor="Jane Jeans"
              timeSent="Today at 4:00pm"
              name="Henry Heels"
            />
          </Card>
        </div>
      </section>
    );
  }
}
export default Section;
