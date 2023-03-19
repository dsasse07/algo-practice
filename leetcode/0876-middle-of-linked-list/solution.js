/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

1 -> 2 -> _3_ -> 4 -> 5

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

1 -> 2 -> 3 -> _4_ -> 5 -> 6

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

Two pointers. Move the "mid" one step for every two steps of the "tail".
If you aren't able to take two steps as the tail, you have an even list, return the one to the right of mid
*/

var middleNode = function(head) {
    if (!head.next) return head;

    let mid = head;
    let tail = head;

    while(tail.next)
    {
        mid = mid.next
        tail = tail.next

        if (!tail.next) {
            return mid;
        }

        tail = tail.next
    }

    return mid
};