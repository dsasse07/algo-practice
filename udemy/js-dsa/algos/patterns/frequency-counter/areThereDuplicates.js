/* 
checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Ex:
- areThereDuplicates( 1, 2, 3 ) // false
- areThereDuplicates( 1, 2, 2 ) // true
- areThereDuplicates( 'a', 'b', 'c', 'd' ) // true

Time: O(n)
Space: O(n)

BONUS:

Time: O(n log n)
Space: O(1)

*/

const areThereDuplicates = () => {
  const freqCounter = {}

  for ( let val of arguments) {
    if (freqCounter[val] ) {
      return true
    } else {
      freqCounter[val] = 1
    }
  }
  return false
}

const areThereDuplicates2 = (...rest) => {
  rest.sort()
  for( let i = 0, j = 1; j < rest.length; i++, j++){
    if ( rest[i] === rest[j]) {
      return true
    } 
  }
  return false
}

const areThereDuplicates3 = (...rest) => {
  return new Set(rest).size !== rest.length
}


console.log('false', areThereDuplicates( 1, 2, 3 ) ) // false
console.log('true', areThereDuplicates( 1, 2, 2 ) ) // true
console.log('true', areThereDuplicates( 'a', 'b', 'c', 'a' ) ) // true

console.log('BONUS')
console.log('false', areThereDuplicates2( 1, 3, 2 ) ) // false
console.log('true', areThereDuplicates2( 1, 2, 2 ) ) // true
console.log('true', areThereDuplicates2( 'a', 'b', 'c', 'a' ) ) // true


console.log("Timers")
console.time('Array')
console.log('true', areThereDuplicates2( 'a', 'b', 'c', 'a' ) ) // true
console.timeEnd('Array')
console.time('Set')
console.log('true', areThereDuplicates3( 'a', 'b', 'c', 'a' ) ) // true
console.timeEnd('Set')
