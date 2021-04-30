/*
Reverse a string recursively
*/

const reverse = (str) => {
  if (str.length === 1) return str
  const lastLetter = str.slice(-1)
  const newStr = str.slice(0,-1)
  return lastLetter.concat(reverse(newStr) )
}

console.log( reverse('awesome') )