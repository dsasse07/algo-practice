/**
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Faster, O(n), but uses O(n) space
const insertionSortList = (head) => {
  if (!head.next) return head

  const values = []
  let node = head
  while (node) {
    values.push(node.val)
    node = node.next
  }

  for (let i = 1; i < values.length; i++) {
    let cur = values[i]
    let subIdx = i - 1

    while (subIdx >= 0 && values[subIdx] > cur) {
      values[subIdx + 1] = values[subIdx]
      subIdx--
    }
    values[subIdx + 1] = cur
  }

  node = head
  for (let i = 0; i < values.length; i++) {
    node.val = values[i]
    node = node.next
  }
  return head
}

// O(1) space, O(n^2)
const insertionSortList2 = (head) => {
  const start = new ListNode(0)
  let current = head
  let prev = start
  let insert = null

  while (current) {
    insert = current.next
    while (prev.next && prev.next.val < current.val) {
      prev = prev.next
    }
    current.next = prev.next
    prev.next = current
    prev = start
    current = insert
  }
  return start.next
}
