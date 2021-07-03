/**
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
 */

class Node {
  constructor(val){
    this.value = val
    this.left = null
    this.right = null
  }
}

const rootNode = new Node(3)
rootNode.left = new Node(9)
rootNode.right = new Node(20)
rootNode.right.left = new Node(15)
rootNode.right.right = new Node(7)


const minDepth = (root) => {
    if (!root) return 0
    let depth = 0
    let minDepth = Infinity
    
    const dfs = (node) => {
        if (!node) return
        depth++
        if (!node.left && !node.right){
            minDepth = Math.min(depth, minDepth)    
        }
        dfs(node.left)
        dfs(node.right)
        depth--
    }
    dfs(root)
    return minDepth
};
console.log(minDepth(rootNode)) // leetcode
