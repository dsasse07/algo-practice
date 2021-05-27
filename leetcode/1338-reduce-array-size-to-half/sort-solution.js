
const solution = array => {
  const numMap = {}
  const length = array.length
  const maxLength = Math.floor(length / 2)
  
  for (let i = 0; i < array.length; i++){
      numMap[array[i]] = numMap[array[i]] + 1 || 1
  }

  counts = Object.values(numMap).sort((a,b) => b-a)

  let total = 0
  let nums = 0
  for (count of counts){
    nums++
    total += count
    if (total >= maxLength) return nums
  }
}

console.log(solution([3,3,3,3,5,5,5,2,2,7])) // 2
console.log(solution([7,7,7,7,7,7])) // 1
console.log(solution([1,2,3,4,5,6,7,8,9,10])) // 1