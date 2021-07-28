// Regex approach
function calculateSpeed(distance, time) {
  const meters = parseInt(distance, 10) * (distance.match(/km$/) ? 1000 : 1)
  const seconds = parseInt(time, 10) * (time.match(/min$/) ? 60 : 1)
  return Math.round((meters / seconds) * 2.23694) + 'mph'
}

// Linear string stream approach
const getDistanceInMeters = (distance) => {
  let [num, unit] = [0, '']
  // Stream through chars
  for (let char of distance) {
    // If char is a digit, build on num
    if (+char > -Infinity) {
      num = 10 * num + +char
      // If char is not a digit, write to unit
    } else {
      unit += char
    }
  }
  // return the converted value
  return unit === 'km' ? num * 1000 : num
}

const getTimeInSeconds = (time) => {
  let [num, unit] = [0, '']
  // Stream through chars
  for (let char of time) {
    // If char is a digit, build on num
    if (+char > -Infinity) {
      num = 10 * num + +char
      // If char is not a digit, write to unit
    } else {
      unit += char
    }
  }
  // return the converted value
  return unit === 'min' ? num * 60 : num
}

function calculateSpeed2(distance, time) {
  const meters = getDistanceInMeters(distance)
  const seconds = getTimeInSeconds(time)
  return Math.round((meters / seconds) * 2.23694) + 'mph'
}
