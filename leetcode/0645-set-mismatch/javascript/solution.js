


function solution ( nums ){
  const numMap = {}
  const result = []
  
  for ( let i = 0; i < nums.length; i++){
    numMap[ nums[i] ] ? result[0] = nums[i] : numMap[ nums[i] ] = 1
  }
  
  for ( let i = 1; i <= nums.length; i++ ){
    if ( !!numMap[ i ] ) continue
    result[1] = i
    break
  }
  return result
  
} 

module.exports = { solution }