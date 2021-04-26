/*

Create a substring, or a window of data. slide that window forward by one at each iteration.
Remove first value from previous window, and all new last digit of current window.

Useful for examining substrings, and subsequences of linear data types

*/


const maxSubArraySum = (arr, len) => {
  if( arr.length === 0 ) return null
  let sum

  // Initial Sum
  for ( let i = 0, j = len; i < j; i++){
    if ( arr[i] !== undefined ) {
      sum = sum + arr[i] || arr[i]
    }
  }

  let maxSum = sum

  for( let i = 0, j = len; j < arr.length; j++, i++ ){
    sum -= arr[i]
    sum += arr[j]

    if(sum > maxSum){
      maxSum = sum
    }
  }


  return maxSum
}

console.log("10", maxSubArraySum( [1,2,5,2,8,1,5], 2) )
console.log("17", maxSubArraySum( [1,2,5,2,8,1,5], 4) )
console.log("6", maxSubArraySum( [4,2,1,6], 1) )
console.log("13", maxSubArraySum( [4,2,1,6,2], 4) )
console.log("null", maxSubArraySum( [], 4) )