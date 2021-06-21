const checkArithmeticSubarrays = (nums, l, r) => {
  const checkSequence = (start, end) => {
    if (end - start <= 0) return false
    const sortedNums = nums.slice(start, end + 1).sort((a, b) => a - b)
    const dif = sortedNums[1] - sortedNums[0]
    for (let i = 2; i < sortedNums.length; i++) {
      if (sortedNums[i] - sortedNums[i - 1] !== dif) {
        return false
      }
    }
    return true
  }

  const result = []
  for (let j = 0; j < l.length; j++) {
    result.push(checkSequence(l[j], r[j]))
  }
  return result
}

const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10]
const l = [0, 1, 6, 4, 8, 7]
const r = [4, 4, 9, 7, 9, 10]
console.log(checkArithmeticSubarrays(nums, l, r)) // [false,true,false,false,true,true]
