/*
 Given a sorted array of integers and a target average, 
 determine if there is a pair of values in the array where the 
 average of the pair equals the target average. 
 
 There may be more than one pair that matches the average target.

 - Time = O(n)
 - Space = O(1)

 Ex:

 averagePair( [1,2,3], 2.5 )              //  true
 averagePair( [1,3,3,5,6,7,10,12,19], 8)  //  true
 averagePair( [-1,0,3,4,5,6], 4.1)        //  false
 averagePair( [], 4)                      //  false
*/

const averagePair = (arr, avg) => {
  let i = 0
  let j = arr.length - 1;

  while( i < j){
    let thisAverage = ( arr[i] + arr[j] ) / 2
    if ( thisAverage === avg) return true
    if ( thisAverage > avg ) {
      j--
    } else {
      i++
    }
  }

  return false
}


console.log('true', averagePair( [1,2,3], 2.5 )              )
console.log('true', averagePair( [1,3,3,5,6,7,10,12,19], 8)  )
console.log('false', averagePair( [-1,0,3,4,5,6], 4.1)       )
console.log('false', averagePair( [], 4)                     )