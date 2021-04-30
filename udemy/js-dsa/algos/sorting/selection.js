/*
  - Scan through the array and find the minimum value.
  - Swap minimum value with value at i
    - This leads to smallest values getting set first,
      rather than max values

  This sort leads to a large number of iterations ( O(n^2) ), however
  it utilizes a minumum number of swaps since the min value is selected
  at each iteration.

  Compared to bubble sort, which swapped each time a larger value was found
  until it eventually "bubbled" to its position.

  If we were concerned about data "writes", Selection sort is useful.
  Otherwise it isn't great.

*/

const selectionSort = (arr) => {
  let noSwaps = true
  for( let i = 0; i < arr.length - 1; i++){
    let min = i

    for( let j = i+1; j < arr.length; j++){
      if ( arr[j] < arr[min]){
        min = j
      }
    }
    if ( min !== i) {
      [ arr[i], arr[min] ] = [ arr[min], arr[i] ]
      noSwaps = false
    }
    if(noSwaps) break
  }
  return arr
}


console.log(`[1,2,3,4,8]`, selectionSort([4,1,8,3,2,-1,38,12,-3,-3,27,-10, 37]))
console.log(`[1,2,3,4,8]`, selectionSort([4,1,8,3,2]))
// console.log(`[1]`, selectionSort([1]))