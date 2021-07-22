/**
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Constraints:
0 <= n <= 105

Follow up:

It is very easy to come up with a solution with a runtime of O(n log n). 
Can you do it in linear time O(n) and possibly in a single pass?
Can you do it without using any built-in function 
(i.e., like __builtin_popcount in C++)?
 */
const countBits = function (n) {
  const ans = []
  while (ans.length < n + 1) {
    const binary = ans.length.toString(2)
    let bitCount = 0
    for (let char of binary) {
      if (char === '1') bitCount++
    }
    ans.push(bitCount)
  }
  return ans
}

const countBitsDynamicProgramming = function (n) {
  const ans = [0]
  for (let i = 1; i <= n; i++) {
    ans[i] = i % 2 === 0 ? ans[i / 2] : ans[i - 1] + 1
  }
  return ans
}
// [0,1,2, 3, 4,  5,  6,  7,  8,    9,    10,   11,   12,   13,   14,   15,   16.  ]
// [0,1,10,11,100,101,110,111,1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000]
// [0,1,1, 2, 1,  2,  2,  3,  1,    2,    2,    3,    2,    3,    3,    4,    1.   ]
