


function solution ( arr, sum ){
  for( let i = 0; i < arr.length; i++){
    const missing = sum - arr[i]
    const missingIndex = arr.indexOf(missing)
    if ( missingIndex !== -1 && missingIndex !== i) return true
  }
  return false
} 

module.exports = { solution }