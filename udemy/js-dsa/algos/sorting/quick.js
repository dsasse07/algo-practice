/*


*/

const quickSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };


  const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start]
    let swapIndex = start

    for( let i = start + 1; i <= end; i++){
      if ( pivot > arr[i] ){
        swapIndex++
        swap( arr, swapIndex, i)
      }
    }
    swap( arr, start, swapIndex)
    return swapIndex
  }


  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right){
      const partition = pivot(arr, left, right)
      sort( arr, left, partition - 1 )
      sort( arr, partition + 1, right)
    }
    return arr
  }

  return sort( arr )
}

console.log( quickSort([100,-3,2,4,6,9,1,2,5,3,23]) )
console.log(`[1,2,3,4,8]`, quickSort([4,1,8,3,2,-1,38,12,-3,-3,27,-10, 37]))
console.log(`[1,2,3,4,8]`, quickSort([4,1,8,3,2]))
console.log(`[1]`, quickSort([1]))