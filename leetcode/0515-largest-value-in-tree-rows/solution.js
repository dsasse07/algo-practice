/**
 * Given a string s which represents an expression, 
 * evaluate this expression and return its value. 

The integer division should truncate toward zero.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "3+2*2"
Output: 7

Example 2:
Input: s = " 3/2 "
Output: 1

Example 3:
Input: s = " 3+5 / 2 "
Output: 5

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.

 */

// BFS evaluate each row of the tree at a time
const largestValuesMINE = (root) => {
  if (!root) return []
  let currentRow = [root]
  let nextRow = []
  const res = [-Infinity]
  while (nextRow){
      while (currentRow.length > 0){
          const currentNode = currentRow.pop()
          if (currentNode.left) nextRow.push(currentNode.left)
          if (currentNode.right) nextRow.push(currentNode.right)
          res[res.length - 1] = Math.max(res[res.length - 1], currentNode.val)
      }
      currentRow = nextRow
      nextRow = currentRow.length > 0 ? [] : null
      res.push(-Infinity)
  }
  if (res[res.length - 1] === -Infinity) res.pop()
  return res
};

// DFS faster, less memory. Store the level of the node as the index of array for comparison later
var largestValues = function(root) {
  let res = [];
  if(!root) return res;
  function trav(node, level){
      if(!node) return;
      if(res[level] == undefined || res[level] < node.val ) res[level] =node.val;
      if(node.left) trav(node.left, level+1);
      if(node.right) trav(node.right, level+1);
  }
  trav(root, 0);
  return res;
  
};

class TreeNode {
  constructor(value){
    this.val = value
    this.left = null
    this.right = null
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(3)
root.right = new TreeNode(1)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(3)
root.right.right = new TreeNode(9)

[1,3,2,5,3,null,9]