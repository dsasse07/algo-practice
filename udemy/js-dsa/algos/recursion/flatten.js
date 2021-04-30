/*
which accepts an array of arrays and 
returns a new array with all values flattened.
*/

const flatten = arr => {
  const flatArr = []

  const getVals = arr => {
    for ( let val of arr){
      if ( typeof val === "object" ){
        getVals(val)
      } else {
        flatArr.push(val)
      }
    }
  }
  getVals(arr)
  return flatArr
}

console.log( [1,2,3,4,5], flatten([1,2,3,[4,5]]) )
console.log( [1,2,3,4,5], flatten([1,[2,[3, 4], [[5]]]]))
console.log( [1,2,3], flatten( [[1],[2],[3]]) )
console.log( [1,2,3], flatten( [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] ) )