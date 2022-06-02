/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []
  const sums = [0, 0]

  for (let num of input) {
    if (num > 0) sums[0]++
    if (num < 0) sums[1] += num
  }
  return sums
}

function countPositivesSumNegativesALT(input) {
  if (!input || input.length === 0) return []

  return input.reduce(
    (sums, num) => {
      num > 0 ? sums[0]++ : (sums[1] += num)
      return sums
    },
    [0, 0]
  )
}
