/*
Given an array of words, 
return a new array containing each word capitalized.
*/

const capitalizeWords = arr => {
  const newArr = []

  const cap = entry => {
    if (entry.length === 0) return
    newArr.push(entry[0].toUpperCase())
    cap(entry.slice(1))
  }

  cap(arr)
  return newArr
}

console.log( ["CAR", 'TACO','CAT'], capitalizeWords(['car','taco','cat']) )
