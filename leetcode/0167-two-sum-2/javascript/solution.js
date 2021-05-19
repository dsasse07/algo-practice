const s1 = [2,7,11,15]
const t1 = 22
const s2 = [2,3,4]
const t2 = 6
const s3 = [-1,0]
const t3 = -1


function twoSum(arr, target){
  let [left, right] = [0,arr.length -1]
  let temp
  while (left < right){
    temp = arr[left] + arr[right]
    if (temp === target) return [left + 1, right + 1]
    right --
    temp = arr[left] + arr[right]
    if (temp < target){
      right ++ 
      left++
    }
  }
}

console.log(twoSum(s1,t1))
console.log(twoSum(s1,18))
console.log(twoSum(s2,t2))
console.log(twoSum(s3,t3))
