


function solution ( str ){

  const strippedString = str.replace(/\W/g, "").toLowerCase()
  const lastIndex = strippedString.length - 1

  for( let i = 0, j = lastIndex; i <= j ; i++, j--){
    if ( strippedString[i] !== strippedString[j] ) return false
  }
  return true
} 

module.exports = { solution }