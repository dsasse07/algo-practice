const array = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0],
]

function hourglassSum(array){
  let largestSum

  for( let i = 1; i < array[0].length - 1; i++) {
    for( let j = 1; j < array.length -1; j++) {
      const hourglassSum = 
        array[i][j] + 
        array[i-1][j-1] +
        array[i-1][j] +
        array[i-1][j+1] +
        array[i+1][j-1] +
        array[i+1][j] +
        array[i+1][j+1]

      if ( largestSum === undefined || hourglassSum > largestSum) {
        largestSum = hourglassSum
      }
    }
  }

  return largestSum
}