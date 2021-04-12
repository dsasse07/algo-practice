function solution ( s1, s2 ){
  const shortString = s1.length <= s2.length ? s1 : s2
  const longString = s1.length > s2.length ? s1 : s2

  for( let i = 0; i < shortString.length; i++){
    if (longString.includes(shortString[i]) === true ) {
      return "YES"
    }
  }
  return "NO"
} 

module.exports = { solution }