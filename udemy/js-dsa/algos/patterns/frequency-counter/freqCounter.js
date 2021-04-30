
const same = ( arr1, arr2 ) => {
  const freqCounter = {}

  for (let val of arr2) {
    freqCounter[val] = ++freqCounter[val] || 1
  }

  for( let val of arr1){
    if (freqCounter[val**2] > 0){
      freqCounter[val**2]--
    } else {
      console.log("false")
      return false
    }
  }
  console.log("true")
  return true
}

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,9]) // false
