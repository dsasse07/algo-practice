
function solution( array ){

  function sort( array, leftIndex, rightIndex, ){
    if (leftIndex >= rightIndex) return
    const pivot = array[ Math.floor( (leftIndex + rightIndex) / 2  ) ]
    const splitPoint = scan( array, leftIndex, rightIndex, pivot)
    sort( array, leftIndex, splitPoint - 1 )
    sort( array, splitPoint, rightIndex )
  }

  function scan( array, leftIndex, rightIndex, pivot){
    while ( leftIndex <= rightIndex){
      while( array[leftIndex] < pivot ) leftIndex++
      while ( array[rightIndex] > pivot ) rightIndex--
      if ( leftIndex > rightIndex ) continue
      
      [ array[leftIndex], array[rightIndex] ] = [ array[rightIndex], array[leftIndex] ]
      leftIndex++
      rightIndex--
    }
    return leftIndex
  }

  sort(array, 0, array.length-1)
  return array
}

module.exports = { solution }