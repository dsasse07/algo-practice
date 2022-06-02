/**
You are given two linked lists a and b as well as integers lo and hi.

Remove a's nodes from indices (0-indexed) [lo, hi] inclusive and 
insert b in this place.

Constraints

0 ≤ n ≤ 100,000 where n is the number of nodes in a
0 ≤ m ≤ 100,000 where m is the number of nodes in b

Example 1
Input
Visualize
a =
1 -> 2 -> 3 -> 4 -> 5 -> 6
b = 10 -> 20 -> 30

lo = 1 hi = 2

Output
Visualize
1 -> 10 -> 20 -> 30 -> 4 -> 5 -> 6

Explanation
We removed nodes 2 and 3 since their indices are in [1, 2]. 
In its place we inserted b.

Example 2
Input
Visualize
a = 1 -> 2 -> 3
b = 10 -> 20 -> 30

lo = 0 hi = 2
Output
Visualize
10 -> 20 -> 30

Explanation
We removed every node of a and inserted b.

*/

class LLNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class Solution {
  solve(a, b, lo, hi) {
    let pre = new LLNode(null)
    pre.next = a
    let currentAIndex = 0

    let prevA = pre
    let currentA = prevA.next
    let prevB = null
    let currentB = b

    // Guard againt there being no a, looping until we reach the lo index
    while (currentA) {
      if (currentAIndex === lo) {
        // set the pevious A node's next value to the B list
        prevA.next = b
        // Iterate through remainder of A until A runs out or
        // we find hi index
        while (currentA && currentAIndex <= hi) {
          prevA = currentA
          currentA = currentA.next
          currentAIndex++
        }
        // Iterate through B until we reach last node of B
        while (currentB) {
          prevB = currentB
          currentB = currentB.next
        }
        // Set next property of last B to where we left off in A
        prevB.next = currentA
        // Pre was the null placeholder we attached A to, return everything
        // attached to Pre
        return pre.next
      } else {
        prevA = currentA
        currentA = currentA.next
        currentAIndex++
      }
    }
  }
}
