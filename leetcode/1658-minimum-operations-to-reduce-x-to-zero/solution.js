/**
 * You are given an integer array nums and an integer x. In one operation, you can either remove the 
 * leftmost or the rightmost element from the array nums and subtract its value from x. 
 * 
 * Note that this modifies the array for future operations.
 * 
 * Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.
 * 
 *  
 * 
 * Example 1:
 * Input: nums = [1,1,4,2,3], x = 5
 * Output: 2
 * Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
 * 
 * Example 2:
 * Input: nums = [5,6,7,8,9], x = 4
 * Output: -1
 * 
 * Example 3:
 * Input: nums = [3,2,20,1,1,3], x = 10
 * Output: 5
 * Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
 *  
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 105
 * 1 <= nums[i] <= 104
 * 1 <= x <= 109
*/

const minOperations = (nums, x) => {

  let total = 0;
  let leftIndex = 0;
  let rightIndex = nums.length;
  let min = nums.length + 1;

  // Take only from the left side for the full length of array until we
  // reach the end, or meet/exceed the target
  while (total < x && leftIndex < nums.length) {
    total += nums[leftIndex];
    leftIndex++
  }
  /**
   *    [ 1,  1,  4,  2,  3]            target = 5
   *                  *       *         total = 6
   * 
   *    At the end of the above loop, we will have summed [1,1,4]
   *    and the pointers will be at i = 3 & j = 6
   */

  if (total === x) {
    min = leftIndex; // If we actually hit the target, this is a valid operation count. Save it
  }

  // Start sliding the left pointer back to the beginning, and as we do, remove left values
  // and add values from the right
  
  while (leftIndex > 0) {
    leftIndex--; 
    total -= nums[leftIndex]; 

    /** Iteration #1
     *    [ 1,  1,  4,  2,  3]            target = 5
     *              -          *          total = 2
     */

    /** Iteration #2
     *    [ 1,  1,  4,  2,  3]            target = 5
     *          -           *             total = 4
     */

    /** Iteration #3
     *    [ 1,  1,  4,  2,  3]            target = 5
     *      -           *                 total = 5
     *                                    steps = 2 => [ -, -, -, 2, 3 ]
     */

    while (total < x ) {
      rightIndex--
      total += nums[rightIndex]

      /** Iteration #1  
       *    [ 1,  1,  4,  2,  3]            target = 5
       *              *       *             total = 5 
       *                                    steps = 3  => [1, 1, - , - , 3] 
       */

      /** Iteration #2  
       *    [ 1,  1,  4,  2,  3]            target = 5
       *          -       *                 total = 6 
       */
    }

    if (total === x) {
      // If we hit the target, count the steps and then save the smaller value to min.
      let steps = leftIndex + (nums.length - rightIndex)
      min = Math.min(min, steps)
    }
  }
  // If the min is within the size of the array, return it. Otherwise there is no solution.
  return min < nums.length + 1 ? min : -1
}