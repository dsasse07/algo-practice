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

const minEatingSpeed = function(piles, h) {
  let max = piles.reduce((sum, val) => Math.max(sum, val),-Infinity);
  let min = 1;
  let res = max;

  while (min < max)
  {
      let mid = getMid(min, max);
      const hoursToEat = calculateHours(piles, mid);
      if (hoursToEat <= h)
      {
          if (mid <= res) {
              res = mid                
          }
      } 

      if (hoursToEat > h) // Eat to slow
      {
          min = mid + 1;
      } else {
          max = mid;
      }
  }

  return res;
};


const getMid = (min, max) => Math.floor((max + min) / 2)

const calculateHours = (piles, k) => piles.reduce((total, pile) => total + Math.ceil(pile / k), 0);

