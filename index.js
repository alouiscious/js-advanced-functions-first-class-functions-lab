

// returnFirstTwoDrivers
const returnFirstTwoDrivers  = function(arr) {
  return arr.slice(0, 2)
} 

// returnLastTwoDrivers
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2)
}

// selectingDrivers
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
function createFareMultiplier(int) {
  return function(times) {
    return (int * times)
  }
}

// fareDoubler
const fareDoubler = (createFareMultiplier(2));

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = (drivers, selectDriver) => {
  return selectDriver(drivers)
}
