/*

Pseudocode:
- Recursive function, create the base case:
    - if there is only 1 item in array, stop splitting
- Divide Array in half, and save the VALUE of this central position for comparison
- Scan the array with two pointers. One starts from the left, the other from the right.
- Increase left pointer until it lands on an element that SHOULD BE on the right side of the pivot.
- Decrease right pointer until it lands on an element that SHOULD BE on the left side of the pivot.
- Once both pointers are set, swap those two values, increment left pointer, decrement right pointer.
- Once both pointers meet (have gone through array), return the index of where they met

- Recursively call the sort function for each half, split at the index aboce
- Recursion and scan continues until arrays reach length of 1

                             *
Ex:                  [ 2, 1, 4, 7, -10]
                                ^l  ^r

Swap 1:              [ 2, 1, 4, -10, 7 ]
                                      ^
                       *
Partition 1:      [ 2, 1, 4, -10  |    7 ]
                    ^         ^        ^^ (length = 1; return)
                         * 
Swap 2:           [ -10, 1, 4, 2  |    7 ]
                        ^^
                      *          *
Partition 2:      [ -10, 1   |   4, 2  |    7 ]
                      ^  ^       ^  ^       ^^ (length = 1; return)

Swap 3 :         [ -10, 1   |   2, 4  |    7 ]

Return:             [ -10, 1, 2, 4, 7 ]

*/  


document.querySelector('h1').innerHTML = "Quicksort"

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
// function solution( array ){

//   function sort( array, leftIndex, rightIndex, ){
//     if (leftIndex >= rightIndex) return
//     const pivot = array[ Math.floor( (leftIndex + rightIndex) / 2  ) ]
//     const splitPoint = scan( array, leftIndex, rightIndex, pivot)
//     sort( array, leftIndex, splitPoint - 1 )
//     sort( array, splitPoint, rightIndex )
//   }

//   function scan( array, leftIndex, rightIndex, pivot){
//     while ( leftIndex <= rightIndex){
//       while( array[leftIndex] < pivot ) leftIndex++
//       while ( array[rightIndex] > pivot ) rightIndex--
//       if ( leftIndex > rightIndex ) continue
      
//       [ array[leftIndex], array[rightIndex] ] = [ array[rightIndex], array[leftIndex] ]
//       leftIndex++
//       rightIndex--
//     }
//     return leftIndex
//   }

//   sort(array, 0, array.length-1)
//   return array
// }

module.exports = { solution }