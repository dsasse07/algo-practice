/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.


Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

We know the min amount that can be eaten is 1. We know the max amount is the amount in a pile.
Binary search over that range to find the min value that leads to the target hours
*/

const findRestaurant = function(list1, list2) {
  let minSum = Infinity;
  let res = [];
  const allWords = new Set()

  const map1 = list1.reduce((map, string, index) => {
      map[string] = index;
      allWords.add(string);
      return map
  }, {})  

  for (let i = 0; i < list2.length; i++)
  {
      let str = list2[i]
      if (isNaN(map1[str])) continue;
      
      let total = map1[str] + i

      if (minSum === total)
      {
          res.push(str)
      } else if (minSum > total)
      {
          minSum = total
          res = [str]
      }
  }

  return res
};