const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length){
    return false
  }

  if (str1.length <= 1){
    return true
  }

  const freqCounter = {}

  for(let char of str1){
    freqCounter[char] = ++freqCounter[char] || 1
  }

  for( let char of str2){
    if (freqCounter[char] > 0){
      --freqCounter[char]
    } else {
      return false
    } 
  }
  return true
}

console.log("true", validAnagram("",'') )
console.log("true", validAnagram(" ", ' ') )
console.log("false", validAnagram('aaz','zza') )
console.log("true", validAnagram('anagram', 'nagaram')) 
console.log("false", validAnagram('rat', 'car')) 
console.log("false", validAnagram('awesome', 'awesom')) 
console.log("true", validAnagram('qwerty', 'qeywrt')) 
console.log("true", validAnagram('texttwisttime', 'timetwisttext')) 

