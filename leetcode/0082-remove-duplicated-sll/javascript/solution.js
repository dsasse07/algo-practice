/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  const pointer = new ListNode() // Start prior to head in case first nodes are duplicates
  pointer.next = head
  let currentNode = pointer
  
  while (currentNode.next){
      // If the next two nodes are the same...
      if (currentNode.next.next && currentNode.next.val === currentNode.next.next.val){
        let nextNode = currentNode.next.next.next
        // Move a pointer forward until they are no longer the same
        while (nextNode && currentNode.next.val === nextNode.val){
            nextNode = nextNode.next
        }
        // Save this new distinct node as the next node
        currentNode.next = nextNode
      } else {
          // If nodes were distinct, move current node up one.
          currentNode = currentNode.next
      }
  }
  return pointer.next
};
