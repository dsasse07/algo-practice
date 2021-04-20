


function solution ( str ){
  let newStr = ""
  for(j=str.length-1; j >= 0; j--){
    newStr += str[j]
  }
  return newStr
} 

module.exports = { solution }