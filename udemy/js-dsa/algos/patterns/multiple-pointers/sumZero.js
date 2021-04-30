
const sumZero = (arr) => {
  let i = 0
  let j = arr.length - 1

  while ( i < j ) {
    if ( arr[i] + arr[j] === 0) return [arr[i], arr[j]]
    Math.abs(arr[i]) < Math.abs(arr[j]) ? j-- : i++
  }

  return undefined
}

console.log( "[-2, 2]", sumZero([-3,-2,-1,0,1,2,5]) )
console.log( "[-3, 3]", sumZero([-5,-4,-3,-2,-1,0,1,2,3]) )
console.log( "[-3, 3]", sumZero([-3,-2,-1,0,1,2,3]) )
console.log( "undefined", sumZero([-2,0,1,3]) )
console.log( "undefined", sumZero([1,2,3]) )