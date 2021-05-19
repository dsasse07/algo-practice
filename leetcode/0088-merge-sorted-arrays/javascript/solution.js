/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
*/
const t1 = [[1,2,3,0,0,0], 3, [2,5,6], 3]
const t2 = [[1], 1, [], 0]
const t3 = [[0], 0, [1], 1]
const t4 = [[1], 1, [0], 0]


function solution ( [nums1, m, nums2, n] ){
  // if ( n === 0) return nums1

  // let [i,j] = [0,0]
  // while (j < n){
  //   if (nums2[j] >= nums1[i]){
  //     [nums1[i+1], nums2[j]] = [nums2[j], nums1[i+1]]
  //     i++
  //   } else {
  //     j++
  //   }
  // }
  // return nums1

  while( m > 0 && n > 0){
    if (nums1[m-1] > nums2[n-1]){
      nums1[m+n-1] = nums1[m-1]
      nums1[m-1] = 0
      m--
    } else {
      nums1[m+n-1] = nums2[n-1]
      n--
    }
  }
  while(n > 0){
    nums1[n-1] = nums2[n-1]
    n--
  }
  return nums1
} 

console.log(solution(t1))
console.log(solution(t2))
console.log(solution(t3))
console.log(solution(t4))

module.exports = { solution }