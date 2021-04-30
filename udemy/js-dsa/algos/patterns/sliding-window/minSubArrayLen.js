/*  
which accepts two parameters - an array of positive integers and a positive integer. 

This function should return the minimal length of a contiguous subarray of which the sum is 
greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Time: O(n)
Space: O(1)


Ex:
minSubArrayLen([2,3,1,2,4,3], 7)                    // 2
minSubArrayLen([2,1,6,5,4], 9)                      // 2
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)    // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)          // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)          // 5
minSubArrayLen([4,3,3,8,1,2,3], 11)                 // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)          // 0

*/

const minSubArrayLen = ( arr, target ) => {
  if ( arr.length === 0 ) return null
  if ( arr[0] >= target ) return 1

  let left = 0;
  let right = 0;
  let sum = arr[left];
  let result = Infinity

  while ( right < arr.length ){
    if (arr[right] >= target) return 1

    if ( sum >= target ) {
      result = Math.min( right - left + 1, result )
      sum -= arr[left]
      left ++ 
    } else {
      right ++
      sum += arr[right];
    }

  }

  return result === Infinity ? 0 : result
}




console.log('2', minSubArrayLen([2,3,1,2,4,3], 7)                    )
console.log('2', minSubArrayLen([2,1,6,5,4], 9)                      )
console.log('1', minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)    )
console.log('3', minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)          )
console.log('5', minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)          )
console.log('2', minSubArrayLen([4,3,3,8,1,2,3], 11)                 )
console.log('0', minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)          )

