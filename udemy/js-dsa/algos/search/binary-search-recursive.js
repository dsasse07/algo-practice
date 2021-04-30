/*
  ** ARRAY MUST BE SORTED **

  Psuedocode:
  - Get halfway point.
    - is target =, <, > that array value?
      - if equal, return
      - if <, recursively call search with array slice from
        start to mid
      - if >, recursively call search with array slice from
        mid to end
*/

const binarySearch = (arr, target) => {
  if (arr.length === 1 && arr[0] !== target) return false
  const midIndex = Math.floor( arr.length / 2)
  const middleValue = arr[midIndex]

  if (middleValue === target) return true
  if (middleValue > target){
    return binarySearch(arr.slice(0,midIndex), target)
  } else {  
    return binarySearch(arr.slice(midIndex), target)
  }
}

// console.log('1', binarySearch([10,15,20,25,30], 15))
console.log('5', binarySearch([0,1,2,3,4,5,6,7,8,9], 4))
// console.log('0', binarySearch([100], 100))
// console.log('-1', binarySearch([1,2,3,4,5], 6))
// console.log('-1', binarySearch([100], 200))