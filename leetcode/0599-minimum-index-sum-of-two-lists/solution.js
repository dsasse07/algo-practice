/*
  Given two arrays of strings list1 and list2, find the common strings with the least index sum.

  A common string is a string that appeared in both list1 and list2.

  A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

  Return all the common strings with the least index sum. Return the answer in any order.

  Ex: 
  Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
  Output: ["sad","happy"]
  Explanation: There are three common strings:
    "happy" with index sum = (0 + 1) = 1.
    "sad" with index sum = (1 + 0) = 1.
    "good" with index sum = (2 + 2) = 4.
  The strings with the least index sum are "sad" and "happy".
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