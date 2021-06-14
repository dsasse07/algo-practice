/*
Given the root of a binary tree, return the sum of all left leaves.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Example 2:
Input: root = [1]
Output: 0
*/

class TreeNode {
  constructor(value, left, right) {
    this.val = value !== undefined ? value : null
    this.left = left !== undefined ? left : null
    this.right = right !== undefined ? right : null
  }
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)

root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const sumOfLeftLeaves = (root, isLeft) => {
  if (!root) return 0
  if (!root.left && !root.right) return isLeft ? root.val : 0
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
}

console.log(sumOfLeftLeaves(root)) //24
