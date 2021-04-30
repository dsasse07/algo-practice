/*
  - Iterate through arr starting at second index
    - determine if this val is > < = first val
    - INSERT val into the subarray from 0 : i where it belongs

  Worst case: O(n^2)

  If data is nearly sorted, this array is fairly efficient

  - This array is also great to handle incoming new data, and inserting it into 
    an already sorted array to maintain a "live" sort since the left side of the array
    is already sorted.

*/

const insertionSort = (arr) => {
  if (arr.length <= 1) return arr

  for( let i = 1; i < arr.length; i++){
    // Store value being compared for insertion later
    let currentVal = arr[i]

    
    let subIndex = i - 1 // Beginning at previous element

    //  Scan through prev sub-array until it reaches a point where currentVal is too large
    while( subIndex >= 0 && arr[subIndex] > currentVal ) {
      // Each time a val larger than current is found before it, copy that larger val
      // into current position
      arr[subIndex + 1] = arr[subIndex]
      console.log(`arr`, arr)
      subIndex--
    }
    // Since we broke the loop, we know that the value at subIndex is smaller than
    // our saved value. Insert our saved value at the next index
    arr[ subIndex + 1 ] = currentVal
  }
  return arr
}


// console.log(`[1,2,3,4,8]`, insertionSort([4,1,8,3,2,-1,38,12,-3,-3,27,-10, 37]))
console.log(`[1,2,3,4,8]`, insertionSort([4,1,8,3,2]))
// console.log(`[1]`, insertionSort([1]))