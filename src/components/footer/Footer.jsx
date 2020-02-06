import React, { Component } from 'react'
import './footer.scss'
class Footer extends Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  render () {
    return (
      <footer className='footer'>
        <div className='columns'>
          <p className='column is-4 content'>
            Copyright &copy; 2018 Space Savvy
          </p>
          <span
            title='Back to top'
            onClick={this.scrollToTop}
            className='column is-offset-6 moveToLocation'
          >
            Back to top
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer
