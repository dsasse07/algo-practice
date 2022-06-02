/**
You are visiting a farm that has a single row of fruit trees arranged 
from left to right. The trees are represented by an integer array fruits 
where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has 
some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single 
type of fruit. There is no limit on the amount of fruit each basket 
can hold.

Starting from any tree of your choice, you must pick exactly one fruit 
from every tree (including the start tree) while moving to the right. 
The picked fruits must fit in one of your baskets.

Once you reach a tree with fruit that cannot fit in your baskets, 
you must stop.

Given the integer array fruits, return the maximum number of fruits 
you can pick.

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

Example 4:
Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can pick from trees [1,2,1,1,2].

Constraints:
1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length
 */

const fruits = [
  0, 1, 1, 5, 1, 5, 5, 1, 5, 5, 1, 5, 11, 5, 11, 11, 5, 5, 11, 5, 11, 11, 11,
  11, 11, 11, 22, 11, 11, 11,
]

const totalFruit = (fruits) => {
  if (fruits.length < 3) return fruits.length
  let maxLength = 0
  let currentLength = 1
  let firstFruit = { fruit: fruits[0], first: 0, last: 0 }
  let secondFruit = { fruit: undefined, first: undefined, last: undefined }

  for (let i = 1; i < fruits.length; i++) {
    // If we haven't previously found a second fruit, set it
    if (fruits[i] !== firstFruit.fruit && secondFruit.fruit === undefined) {
      secondFruit.fruit = fruits[i]
      secondFruit.first = i
      secondFruit.last = i
      currentLength++
      maxLength = Math.max(maxLength, currentLength)
      // If the current fruit is one we already saw, update the last index of that fruit
      // Update the length counter, and see if its a new max
    } else if (
      fruits[i] === firstFruit.fruit ||
      fruits[i] === secondFruit.fruit
    ) {
      if (fruits[i] === secondFruit.fruit) secondFruit.last = i
      if (fruits[i] === firstFruit.fruit) firstFruit.last = i
      currentLength++
      maxLength = Math.max(maxLength, currentLength)
      // If we encounter a new fruit, we need to determine which fruit
      // should remain by comparing their indices
    } else {
      // If the first fruit was seen more recently that the FIRST time we
      // saw the second fruit...
      if (firstFruit.last > secondFruit.first) {
        // AND if the second fruit was seen most recently
        if (secondFruit.last > firstFruit.last) {
          // Update firstFruit to be the second fruit
          // Whose first instance must be the index AFTER the last
          // time we saw the ORIGINAL first frui
          firstFruit.fruit = secondFruit.fruit
          firstFruit.first = firstFruit.last + 1
          firstFruit.last = firstFruit.first
        } else {
          // Otherwise, keep firstFruit as the same fruit,
          // But update its tracker to start after the
          // Last instance of secondFruit
          firstFruit.first = secondFruit.last + 1
        }
        // If the firstFruit was NOT seen more recently that the FIRST
        // instance of secondFruit, just keep secondFruit
      } else {
        firstFruit.fruit = secondFruit.fruit
        firstFruit.first = secondFruit.first
        firstFruit.last = firstFruit.first
      }
      // Update secondFruit to be the new fruit we just found
      // and reset length tracker
      secondFruit.fruit = fruits[i]
      secondFruit.first = i
      secondFruit.last = i
      currentLength = secondFruit.last - firstFruit.first + 1
    }
  }
  // Run one last check against maxLength to check for the final index of fruits
  maxLength = Math.max(maxLength, currentLength)
  return maxLength
}

console.log(totalFruit(fruits)) // 15
/**
 * From index 11 to index 25
[...,5,11,5,11,11,5,5,11,5,11,11,11,11,11,11,...]
 */
