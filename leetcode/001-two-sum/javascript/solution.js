const nums = [3,3]
const target = 6

function twoSum(nums, target){
  const numMap = {}

  for(let i = 0; i < nums.length; i++){
    const thisNum = nums[i]
    if(numMap[thisNum] !== undefined && thisNum*2 === target) return [numMap[thisNum], i]
    numMap[nums[i]] = i
  }

  for( let key in numMap){
    const remainder = target - (+key)
    if ( numMap[remainder] && numMap[remainder] > 0) return [numMap[key], numMap[remainder]]
  }
}



