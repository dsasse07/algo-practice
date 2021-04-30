/*


*/

const mergeSort = (arr) => {

  const split = (arr) => {  
    if (arr.length <= 1) return arr
    const mid = Math.floor( arr.length / 2)
    return merge( split( arr.slice(0,mid) ), split( arr.slice(mid) ) )
  }

  const merge = ( arr1, arr2 ) => {
    const newArr = []
    let i = 0
    let j = 0

    while( i < arr1.length && j < arr2.length){
      if ( arr1[i] > arr2[j] ){
        newArr.push(arr2[j])
        j++
      } else {
        newArr.push(arr1[i])
        i++
      }
    }
    return newArr
      .concat( arr1.slice(i) )
      .concat( arr2.slice(j) )
  }
  return split(arr)
}

console.log(`[1,2,3,4,8]`, mergeSort([4,1,8,3,2,-1,38,12,-3,-3,27,-10, 37]))
console.log(`[1,2,3,4,8]`, mergeSort([4,1,8,3,2]))
console.log(`[1]`, mergeSort([1]))