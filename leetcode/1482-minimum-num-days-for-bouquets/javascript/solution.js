/*
Given an integer array bloomDay, an integer m and an integer k.

We need to make m bouquets. 
To make a bouquet, you need to use k adjacent flowers from the garden.

The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] 
and then can be used in exactly one bouquet.

Return the minimum number of days you need to wait to be able to make m bouquets from the garden. 
If it is impossible to make m bouquets return -1.


Example 1:
Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
Output: 3
Explanation: Let's see what happened in the first three days. x means flower bloomed and _ means flower didn't bloom in the garden.
We need 3 bouquets each should contain 1 flower.
After day 1: [x, _, _, _, _]   // we can only make one bouquet.
After day 2: [x, _, _, _, x]   // we can only make two bouquets.
After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.

Example 2:
Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
Output: -1
Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.

Example 3:
Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
Output: 12
Explanation: We need 2 bouquets each should have 3 flowers.
Here's the garden after the 7 and 12 days:
After day 7: [x, x, x, x, _, x, x]
We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
After day 12: [x, x, x, x, x, x, x]
It is obvious that we can make two bouquets in different ways.

Example 4:
Input: bloomDay = [1000000000,1000000000], m = 1, k = 1
Output: 1000000000
Explanation: You need to wait 1000000000 days to have a flower ready for a bouquet.

Example 5:
Input: bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
Output: 9

Constraints:

bloomDay.length == n
1 <= n <= 10^5
1 <= bloomDay[i] <= 10^9
1 <= m <= 10^6
1 <= k <= n
*/
const a = [1,10,2,9,3,8,4,7,5,6]
const b = 4
const c = 2


function solution ( bloomDay, totalBouquets, flowerCount ){

  const totalFlowers = totalBouquets * flowerCount
  if (totalFlowers > bloomDay) return -1 // not enough flowers to complete
  let right = Math.max(...bloomDay) // Find days it takes for slowest flower to bloom
  let left = 1
  let result = -1

  while (left <= right){
    const midPoint = left + Math.floor((right - left) / 2) // Select Day # that is halfway between current day and max day
    let total = 0

    /* Binary Search Pattern
      - We will pick the # days in the middle of the maximum time needed and minimum
      - Identify all flowers that have bloomed
      - group them into consecutive sequences
        - determine how many bouquets can be made from each consecutive sequence.
        - If # bouquets is too high, the mid # of days is either perfect or too big
          - Save the mid # to be safe
          - Shrink the range so the max is less than the mid point and try again
        - if the # bouquets is too low, the mid # of days is too low
          - set minimum days to be one more than the current mid and try again
      - Scanning stops when the start & end values becoem inverted.
        - Return whatever value was last store in result
    */

    /* Each flower that blooms is marked with a '*'. 
      - These are then join
    */
    const bloomed = bloomDay.map( x => {  
      if (x <= midPoint) return '*'
      return ' '
    }).join('').split(' ')

    total = bloomed.reduce( (sum, sequence) => {
      sum += Math.floor(sequence.length/flowerCount)
      return sum
    }, 0)

     if (total >= totalBouquets){
       result = midPoint
       right = midPoint - 1
     } else {
       left = midPoint + 1
     }
  }
  return result
} 
console.log(solution([7,7,7,7,12,7,7], 2, 3))
console.log(solution([1,10,3,10,2], 3, 1))
module.exports = { solution }