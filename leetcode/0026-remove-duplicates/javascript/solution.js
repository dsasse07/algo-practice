function removeDuplicates(arr, target){
  // ****************************** O(n^2)
  // Solution 1
  // for( let i = 0; i < nums.length; i++){
  //   while (nums[i] === nums[i+1]) nums.splice(i+1, 1)
  // }

  // Solution 2
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i+1]) {
  //         nums.splice(i+1, 1)
  //         i--
  //     }
  // }


  // ************************ O(n) *********************************
  // Solution 3
  // while (right < nums.length){
  //     if(nums[left] !== nums[right]){
  //         left ++
  //         [nums[left], nums[right]] = [nums[right], nums[left]]
  //     }    
  //     right ++
  // }
  // return left + 1
  
  // Solution 4
  let left = 0
  for (let right = 1; right < nums.length; right++){
      if(nums[left] !== nums[right]){
          left++
          [nums[left], nums[right]] = [nums[right], nums[left]]
      }
  }
  return left + 1
}
