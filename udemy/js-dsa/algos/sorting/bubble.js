/*
  Each pass should push the highest value as far tot he right as possible.
  After each pass, increment the starting point (i) and repeat the check/swaps
  - On each subsequent pass, we no longer need to compare the values previously
    placed to the right, since we already know they are in place, so reduce the 
    scanning range by the number of previous passes (i).
  - we never need to compare the last item in the array, so set limit at secodn to last value
    (arr.length - 1)

*/

const bubbleSort = (arr) => {
  let noSwaps

  for( let i = 0; i < arr.length - 1; i++){
    noSwaps = true
    for( let j = 0; j < arr.length - 1 - i; j++) {
      if ( arr[j] > arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          noSwaps = false
      } 
    }
    if (noSwaps) break
  }
  return arr
}


console.log(`[1,2,3,4,8]`, bubbleSort([4,1,8,3,2,-1,38,12,-3,-3,27,-10, 37]))
console.log(`[1,2,3,4,8]`, bubbleSort([4,1,8,3,2]))
console.log(`[1]`, bubbleSort([1]))