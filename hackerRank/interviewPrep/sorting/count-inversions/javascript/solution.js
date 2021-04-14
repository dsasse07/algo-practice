

function solution ( arr  ){
  let inversions = 0

  function sort( array ){
    if ( array.length <= 1 ) return array
    const middle = Math.floor( array.length / 2 )
    const leftHalf = array.slice( 0, middle )
    const rightHalf = array.slice( middle )
    const sortedLeft = sort( leftHalf )
    const sortedRight = sort( rightHalf )
    return merge( sortedLeft, sortedRight )
  }

  function merge( leftHalf, rightHalf ) {
    const sortedArray = []
    let leftIndex = 0
    let rightIndex = 0

    while ( leftIndex < leftHalf.length && rightIndex < rightHalf.length ){
      if ( leftHalf[ leftIndex ] <= rightHalf[ rightIndex ] ){
        sortedArray.push( leftHalf[ leftIndex ] )
        leftIndex++
      } else{
        sortedArray.push( rightHalf[ rightIndex ] )
        inversions += leftHalf.length - leftIndex
        rightIndex++
      }
    }
    return sortedArray
      .concat( leftHalf.slice( leftIndex ) )
      .concat( rightHalf.slice( rightIndex ) )
    } 
  sort(arr)
  return inversions
} 

module.exports = { solution }