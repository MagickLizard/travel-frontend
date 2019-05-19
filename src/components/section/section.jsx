import React, { Component } from 'react';
import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import CardInfo from '../CardInfo/CardInfo';

class Section extends Component {

  //React - have to define render - otherwise react will throw a error
  render() {
    return (
      <section>
        <div className='container'>
        <Header></Header>
        <Hero></Hero>
        <Card>
        <CardInfo 
        editor="Sam Smith" 
        timeSent="Today at 4:10pm"
        name="Heidi Kloom">
        </CardInfo>
        <CardInfo editor="Jane Jeans" 
        timeSent="Today at 4:00pm"
        name="Henry Heels">
        </CardInfo>
        </Card>
        </div>
      </section>
    );
  }
}
export default Section;
