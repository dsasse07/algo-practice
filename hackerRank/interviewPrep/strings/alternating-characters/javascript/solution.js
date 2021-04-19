const t1 = "AAAA"
const t2 = "BBBBB"
const t3 = "ABABABAB"
const t4 = "BABABA"
const t5 = "AAABBB"


function solution ( s ){
  let count = 0
  for( let i = 1; i < s.length; i++){
    if( s[i] === s[i-1] ) count++
  }
  return count
} 

module.exports = { solution }