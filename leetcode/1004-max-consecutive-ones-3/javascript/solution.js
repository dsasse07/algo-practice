const t1 = [1,1,1,0,0,0,1,1,1,1,0]
const k1 = 2

function findLength(nums, k){
  let zeros = 0
  let start = 0
  let end = 0
  let length = 0

  while (end < nums.length){
    if (nums[end] === 0){
      zeros++
      while (zeros > k){
        if(nums[start] === 0){
          zeros--
        } 
        start++
      }
    }
    length = Math.max(length, end - start + 1)
    end++
  }
  return length
}


console.log(findLength(t1,k1))


