
/*
 which takes in an array of numbers and returns the product of them all.
*/

const productOfArray = ( arr ) => {
  if ( arr.length === 1 ) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))
}

console.log( '6', productOfArray([1,2,3]) )
console.log( '60', productOfArray([1,2,3,10]) )

