import React from 'react'
import './hero.scss'
import background from '../../img/background.jpg'
class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }
  scrollToFilters = () => {
    window.scrollTo({ top: 460, behavior: 'smooth' })
  }
  render () {
    return (
      <section className='hero is-info is-medium has-background'>
        <img
          className='img hero-background is-transparent'
          src={background}
          alt='background of space'
        />
        <div className='hero-head'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/' alt='space savvy'>
              SPACE SAVVY
            </a>
          </div>
        </div>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-1 has-text-centered'>
              Discover Space travels
            </h1>
          </div>
        </div>
        <div>
          <div className='has-text-centered'>
            <span
              className='icon is-large has-pointer'
              title='Scroll down to filters'
              onClick={this.scrollToFilters}
            >
              <span className='fa-stack fa-lg'>
                <i className='fas fa-angle-down IconLarge'> </i>
              </span>
            </span>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
