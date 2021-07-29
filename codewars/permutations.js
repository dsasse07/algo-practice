/**
 * In this kata you have to create all permutations of an input string 
 * and remove duplicates, if present. This means, you have to shuffle 
 * all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
 */
const swap = (arr, i1, i2) => {
  ;[arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

function permutations(string) {
  const permutations = new Set()
  const chars = string.split('')

  const enumerate = (arr, start) => {
    for (let i = start; i < arr.length; i++) {
      // swap ith element with the starting element of this window
      swap(arr, start, i)

      // Add new swap to our set (if it didn't already exist)
      permutations.add(arr.join(''))

      // Recursive enumerate. Shift the window once index to the right
      // And permute that window while keeping the swap in place
      enumerate(arr, start + 1)

      // undo the swap
      swap(arr, start, i)
    }
  }

  enumerate(chars, 0)
  return [...permutations]
}
