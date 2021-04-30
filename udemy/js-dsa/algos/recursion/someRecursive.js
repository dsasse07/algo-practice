/*  
which accepts an array and a callback. 
The function returns true if a single value in the array
returns true when passed to the callback. 

Otherwise it returns false.
*/


const isOdd = num => num % 2 !== 0

const someRecursive = (arr, fn) => {
  if (arr.length === 0) return false
  const num = arr.pop()

  if ( fn(num) ){
    return true
  } else {
    return someRecursive(arr, fn)
  }
}

console.log('true', someRecursive([1,2,3,4], isOdd) )
console.log('true', someRecursive([4,6,8,9], isOdd) )
console.log('false', someRecursive([4,6,8], isOdd) )
console.log('false', someRecursive([4,6,8], val => val > 10) )

