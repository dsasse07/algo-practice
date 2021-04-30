/*
  ** ARRAY MUST BE SORTED **

  Psuedocode:
  - Get halfway point.
    - is target =, <, > that array value?
      - if equal, return
      - if <, move left pointer to mid
      - if > move right pointer to mid
*/

const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1
  
  while (start <= end){
    let middle = Math.floor( (start + end) / 2 )
    if (arr[middle] === target) return middle

    if (arr[middle] > target) end = middle - 1
    else start = middle + 1
    
  }
  return -1
}


console.log('1', binarySearch([10,15,20,25,30], 15))
console.log('5', binarySearch([0,1,2,3,4,5,6,7,8,9], 5))
console.log('0', binarySearch([100], 100))
console.log('-1', binarySearch([1,2,3,4,5], 6))
console.log('-1', binarySearch([100], 200))