const countUniqueValues = (arr) => {
  if (arr.length < 1) return 0
  let count = 1
  let i = 0
  let j = 1

  while( j < arr.length){
    if ( arr[i] === arr[j] ) {
      j++
    } else {
      count++
      i = j
      j++
    }
  }
  return count
}

console.log('2', countUniqueValues([1,1,1,1,1,2]))
console.log('7', countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) )
console.log('0', countUniqueValues([]) )
console.log('1', countUniqueValues([0]) )
console.log('4', countUniqueValues([-2,-1,-1,0,1]) )

// Do it in constant by mutating the array!

const countUniqueValuesInPlace = (arr) => {
  if (arr.length === 0 ) return 0
  let i = 0
  let j = 1

  while( j < arr.length){
    if ( arr[i] === arr[j] ) {
      j++
    } else {
      i++ 
      arr[i] = arr[j]
      j++
    }
  }
  return i + 1
}

console.log("Count in place)")

console.log('2', countUniqueValuesInPlace([1,1,1,1,1,2]))
console.log('7', countUniqueValuesInPlace([1,2,3,4,4,4,5,5,12,12,13]) )
console.log('0', countUniqueValuesInPlace([]) )
console.log('1', countUniqueValuesInPlace([0]) )
console.log('4', countUniqueValuesInPlace([-2,-1,-1,0,1]) )