/*

How many times can BALLOON be spelled from a str of A-Z
*/


const balloonSolution = str => {
  const charMap = {
    'B': 0,
    'A': 0,
    'L': 0,
    'O': 0,
    'N': 0
  }
  for (let char of str){
    if (charMap[char] !== undefined){
      charMap[char]++
    }
  }

  const balloonCount = Math.min(
    Math.floor(charMap['B'] / 1),
    Math.floor(charMap['A'] / 1),
    Math.floor(charMap['L'] / 2),
    Math.floor(charMap['O'] / 2),
    Math.floor(charMap['N'] / 1),
  )

  return balloonCount
}

console.log(balloonSolution("BAONXXOLL"))
console.log(balloonSolution("BAOOLLNNOLOLGBAX"))
console.log(balloonSolution("QAWABAWONL"))
console.log(balloonSolution("ONLABLABLOON"))
