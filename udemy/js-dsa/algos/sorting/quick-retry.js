
const quickSort = (arr) => {
  const pivot = (arr, start = 0, end = arr.length - 1) => {
    let partitionIndex = Math.floor( (start + end) / 2)
    const pivot = arr[partitionIndex]
    while (start <= end) {
      while( arr[start] < pivot ) start++ 
      while( arr[end] > pivot ) end--
      if ( start > end ) continue      
      [ arr[start], arr[end] ] = [ arr[end], arr[start]]
      start++
      end--
    }
    return start
  }

  const sort = (arr, left = 0, right = arr.length - 1) => {
    if ( left >= right ) return
    const partitionIndex = pivot( arr, left, right)
    sort( arr, left, partitionIndex - 1)
    sort( arr, partitionIndex, right)
  }

  sort(arr)
  return arr
}

console.log( quickSort([100,-3,2,4,6,9,1,2,5,3,23]) )
// console.log(`[1,2,3,4,8]`, quickSort([4,1,8,3,2,-1,38,12,-3,-3,27,-10, 37]))
// console.log(`[1,2,3,4,8]`, quickSort([4,1,8,3,2]))
// console.log(`[1]`, quickSort([1]))