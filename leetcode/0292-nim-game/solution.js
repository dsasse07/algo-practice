/**
You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

Example 1:
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.

Example 2:
Input: n = 1
Output: true

Example 3:
Input: n = 2
Output: true

Constraints:
1 <= n <= 231 - 1
 */

var canWinNim = function (n) {
  // If n == 1 || 2 || 3 -> I win
  // if n == 4 -> They win

  // x = 5
  // 5 - 1 -> 4 (p2 takes 1 || 2 || 3) -> ( 1 , 2 , or 3 remain) -> I take rest and win

  // x = 6
  // 6 - 2 -> 4 (p2 takes 1 || 2 || 3) -> ( 1 , 2 , or 3 remain) -> I take rest and win

  // x = 7
  // 7 - 3 -> 4 (p2 takes 1 || 2 || 3) -> ( 1 , 2 , or 3 remain) -> I take rest and win

  // x = 8
  // 8 - 1 -> 7 (p2 will take 3 - optimal -> 4 I will lose

  // x = 9
  // 9 - 1 -> 8 They will lose

  // x = 10
  // 10 - 2 -> 8 They will lose

  // x = 11
  // 11 - 3 -> 8 They will lose

  // x == 12
  // 12 - 1 -> 9 They win
  // 12 - 2 -> 9 They win
  // 12 - 3 -> 9 They win
  return n % 4 !== 0
}
