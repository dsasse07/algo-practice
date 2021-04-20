
function solution ( num ){
  let count = 0
  let powerOfTen = 1

  while( Math.floor( num / (10**powerOfTen) ) > 0 ){
    count += Math.floor( num / (10**powerOfTen) ) 
    powerOfTen++
  }
  return count
} 

module.exports = { solution }