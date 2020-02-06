import React, { Component } from 'react'
import moment from 'moment'

class Filters extends Component {
  state = {
    keyword: '',
    minYear: 'Any',
    maxYear: 'Any',
    launchPad: 'Any',
    travels: [],
    launchPads: [],
    years: []
  }
  componentDidUpdate (prevProps) {
    if (prevProps && prevProps.travels !== this.props.travels) {
      this.setState({
        travels: this.props.travels,
        years: this.getYearDropdownValues(this.props.travels),
        launchPads: this.getLaunchPadDropdownValues(this.props.travels)
      })
    }
  }
  getYearDropdownValues (array) {
    return [
      ...new Set(
        array.map(item => moment(item.launch_date_local).format('YYYY'))
      )
    ]
  }
  getLaunchPadDropdownValues (array) {
    return [...new Set(array.map(item => item.launchPad.full_name))]
  }
  onInputChange = event => {
    this.setState({ keyword: event.target.value })
  }
  onLaunchPadChange = event => {
    this.setState({ launchPad: event.target.value })
  }
  onMinYearChange = event => {
    this.setState({ minYear: event.target.value })
  }
  onMaxYearChange = event => {
    this.setState({ maxYear: event.target.value })
  }
  onFilterSubmit = event => {
    const { keyword, minYear, maxYear, launchPad } = this.state
    event.preventDefault()
    this.props.onFilterSubmit({
      keyword,
      minYear,
      maxYear,
      launchPad
    })
  }
  renderDropdown = value => {
    const { launchPads, years } = this.state
    if (value === 'launchPads') {
      return this.renderDropdownOptions(launchPads)
    }
    if (value === 'years') {
      return this.renderDropdownOptions(years)
    }
  }
  renderDropdownOptions = array => {
    return array.map((value, index) => {
      return <option key={index}>{value}</option>
    })
  }
  validateYear = () => {
    const { minYear, maxYear } = this.state
    let min = parseInt(minYear)
    let max = parseInt(maxYear)
    if (min > max) {
      return <span>Please enter a min year which is before the max year</span>
    }
  }
  render () {
    const { keyword } = this.state
    return (
      <form onSubmit={this.onFilterSubmit}>
        <section className='section notification columns'>
          <div className='column'>
            <label className='label' htmlFor='keyword'>
              Keywords
            </label>
            <div className='control'>
              <input
                className='input'
                id='keyword'
                type='text'
                value={keyword}
                onChange={this.onInputChange}
                placeholder='eg Falcon'
              />
            </div>
          </div>
          <div className='column'>
            <label className='label' htmlFor='launch_pad_options'>
              LaunchPad
            </label>
            <div className='control'>
              <span className='select is-fullwidth'>
                <select
                  id='launch_pad_options'
                  onChange={this.onLaunchPadChange}
                >
                  <option defaultValue='Any'>Any</option>
                  {this.renderDropdown('launchPads')}
                </select>
              </span>
            </div>
          </div>
          <div className='column'>
            <label className='label' htmlFor='min_year_options'>
              Min Year
            </label>
            <div className='control'>
              <span className='select is-fullwidth'>
                <select
                  id='min_year_options'
                  label='Min year options'
                  onChange={this.onMinYearChange}
                >
                  <option value='Any'>Any</option>
                  {this.renderDropdown('years')}
                </select>
              </span>
              <p className='help is-danger'>{this.validateYear()}</p>
            </div>
          </div>
          <div className='column is-3'>
            <label className='label' htmlFor='max_year_options'>
              Max Year
            </label>
            <div className='field is-grouped'>
              <div className='control is-expanded'>
                <span className='select is-fullwidth'>
                  <select
                    id='max_year_options'
                    label='Max year options'
                    onChange={this.onMaxYearChange}
                  >
                    <option value='Any'>Any</option>
                    {this.renderDropdown('years')}
                  </select>
                </span>
              </div>
              <button className='button is-primary'>Submit</button>
            </div>
          </div>
        </section>
      </form>
    )
  }
}

export default Filters
