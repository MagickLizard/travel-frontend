import moment from 'moment'

const filtertravels = (filters, travels) => {
  const { keyword, minYear, maxYear, launchPad } = filters
  const filteredtravels = travels.filter(travel => {
    let matchesFilter = []
    if (keyword) {
      matchesFilter.push(
        String(travel.flight_number).includes(keyword) ||
          String(travel.rocket.rocket_name).includes(keyword) ||
          travel.payloads
            .map(payload => String(payload.payload_id).includes(keyword))
            .some(value => value)
      )
    }
    if (launchPad !== 'Any') {
      matchesFilter.push(
        String(travel.launchPad.full_name).includes(launchPad)
      )
    }
    if (minYear !== 'Any' || maxYear !== 'Any') {
      let yearConverted = getYear(travel.launch_date_local)
      const yearsResult = validateYears(minYear, maxYear, yearConverted)
      matchesFilter.push(
        yearsResult
          .map(year => yearConverted.toString() === year)
          .some(value => value)
      )
    }
    return matchesFilter.every(x => x)
  })
  return filteredtravels
}

const validateYears = (minYear, maxYear, travelValue) => {
  let arrayOfYears = []
  if (minYear && maxYear) {
    if (minYear === travelValue && maxYear === 'Any') {
      arrayOfYears.push(travelValue)
    } else if (maxYear === travelValue && minYear === 'Any') {
      arrayOfYears.push(travelValue)
    }
    let min = parseInt(minYear)
    let max = parseInt(maxYear)
    if (min <= max) {
      let minYearCount = min
      let difference = Math.abs(max - minYearCount)
      for (let i = 0; i <= difference; i++) {
        arrayOfYears.push(minYearCount.toString())
        minYearCount++
      }
    }
  }
  return arrayOfYears
}

const getYear = date => {
  return moment(date).format('YYYY')
}
const getDate = travel => {
  return moment(travel.launch_date_local).format('Do MMM YYYY')
}
const getTime = travel => {
  return moment(travel.launch_date_local).format('LT')
}
export { filtertravels, getTime, getDate, getYear }
