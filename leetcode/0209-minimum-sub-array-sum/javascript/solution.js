const t1 = 7
const s1 = [2,3,1,2,4,3]

const s2 = [1,1,1]
const t2 = 3

const s3 = [1,1,1]
const t3 = 10

const s4 = [1,4,5]
const t4 = 5

function twoSum(arr, target){
  let [i,j] = [0,0]
  let sum = arr[i]
  let minLen = Infinity
  
  while (j < arr.length){
    if (sum < target){
      j++
      sum += arr[j]
    } else {
      minLen = Math.min(minLen, j-i+1)
      sum -= arr[i]
      i++
    }
  }
  return minLen === Infinity ? 0 : minLen
}

console.log(twoSum(s1,t1)) // 2
console.log(twoSum(s2,t2)) // 3 
console.log(twoSum(s3,t3)) // 0
console.log(twoSum(s4,t4)) // 1

