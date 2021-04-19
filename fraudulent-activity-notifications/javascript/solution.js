
const test = [2, 3, 4, 2, 3, 6, 8, 4, 5]

function solution ( exp, d ){
  let alerts = 0

  const leftInd = Math.floor((d-1)/2)
  const rightInd = Math.ceil((d-1)/2)
  let leftVal, rightVal, median;

  const countArray = Array(201).fill(0)

  for( let i = d - 1; i >=0; i--){
    countArray[ exp[i] ] ++ 
  }

  // Iterate through each day after the check point
  for( let i = d; i < exp.length; i++ ){

    // Find the left value of the median y using the countArray.
    // leftInd tells us how many digits there are prior to the median.
    // We will grab values from the countArray until we have that many digits.
    // This will give us the left value to be averaged to get the median.
    for( let j = 0, k = 0; k <= leftInd; k += countArray[j], j++ ){
      leftVal = j
    }

    // If d is odd, the left and right index to be used will be the same,
    //so use that value.
    if (leftInd === rightInd){
      median = leftVal
    } else {

      // If d is even, use the same iteration as before to grab the right Value
      for( let j = 0, k = 0; k <= rightInd; k += countArray[j], j++ ){
        rightVal = j
      }
      median= (leftVal + rightVal) / 2
    }

    // With the median, we now need to compare to see if alert is triggers.
    if ( exp[i] >= median * 2 ){
      alerts ++
    }

    // To ensure that our countArray only contains the most recent entries
    // We must remove the "first" digit, which would be "d" days ago
    countArray[ exp[i - d] ] --
    // We need to add the current element to the countArray to be included
    // in tomorrow's scan.
    countArray[ exp[i] ] ++ 
  }

  return alerts
} 

module.exports = { solution }