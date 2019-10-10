import React, { Component } from 'react'

class SearchBar extends Component {
  state = { searchTerm: '', latitude: [], longitude: [] }
  handlingString = async (event) => {
    this.setState({ searchTerm: event.target.value })
  }
  onSubmitFunc = async (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.searchTerm)
  }

  render () {
    return (
      <form className='container' onSubmit={this.onSubmitFunc}>
        <div
          className={`control ${
            this.props.loading ? 'is-large is-loading' : ''
          }`}
        >
          <input
            value={this.state.searchTerm}
            onChange={this.handlingString}
            className='input is-large is-loading'
            placeholder='Search by a town'
          />
        </div>
      </form>
    )
  }
}
export default SearchBar
