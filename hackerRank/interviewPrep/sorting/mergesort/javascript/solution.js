/*

Pseudocode:
- Recursive function, create the base case:
    - if there is only 1 item in array, stop splitting
- Divide Array in half
- Recursively call function again to continue splitting array in half. 

- Once the base case is reach at each stack level,
- Begin merging the the splits arrays back together in order.
  - Create two points that start at the beginning of each split segment
  - Compare values at pointers, insert lower value into new array
  - If value was inserted, move THAT pointer.
  - If pointer reaches the end of the half, break the loop.
  - concat remaining array elements fromt he longer half to the end of the new array.

- As the stack continues to collapse, the merges will lengthen progressively 
to reach the full length of the original array.

Ex:                  [ 2, 1, 4, 7, -10]
                      /             \
Round 1:        [ 2, 1 ]         [ 4, 7, -10 ]
                  /   \             /       \
Round 2:      [ 2 ]   [ 1 ]     [ 4 ]     [ 7, -10 ]
                |       |         |         /     \ 
Round 3:      [ 2 ]   [ 1 ]     [ 4 ]   [ 7 ]   [ -10 ]
                |       |         |         \     /
Begin Merge:  [ 2 ]   [ 1 ]     [ 4 ]     [ -10, 7 ]
                  \    /          |           |
Merge 2:         [ 1, 2 ]       [ 4 ]     [ -10, 7]
                    |                \      /
Merge 3:         [ 1, 2 ]          [ -10, 4, 7 ]
                        \           /
Merge 4:              [ -10, 1, 2, 4, 7]
*/  

function solution ( array ){

  function sort( array){
    if (array.length === 1) return array
    const middle = Math.floor( array.length / 2 )
    const leftHalf = array.slice(0, middle)
    const rightHalf = array.slice( middle )
    const leftSorted = sort( leftHalf )
    const rightSorted = sort( rightHalf )

    return merge(  leftSorted , rightSorted )
  }

  function merge( leftHalf, rightHalf ){
    const sortedArray = []
    
    let leftIndex = 0
    let rightIndex = 0
    debugger
    while ( leftIndex < leftHalf.length && rightIndex < rightHalf.length ){
      if ( leftHalf[ leftIndex ] <= rightHalf[ rightIndex ] ){
        sortedArray.push( leftHalf[ leftIndex ] )
        leftIndex++
      } else {
        sortedArray.push( rightHalf[ rightIndex ] ) 
        rightIndex++
      }
    }
    return sortedArray
      .concat( leftHalf.slice( leftIndex ) )
      .concat( rightHalf.slice( rightIndex ) )
  }

  return sort( array )
} 


module.exports = { solution }