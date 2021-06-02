const s1 = 'abcd'
const t1 = 'abcde'

const s2 = ''
const t2 = 'y'

const s3 = 'a'
const t3 = 'aa'

const s4 = 'ae'
const t4 = 'aea'

function findDifference(s, t){
  const letterMap = {}

  for (let char of t){
    letterMap[char] === undefined ? letterMap[char] = 1 : letterMap[char] += 1
  }

  for (let char of s){
    letterMap[char] -= 1
  }

  for (let char in letterMap){
    if (letterMap[char] > 0) return char
  }
}

console.log(findDifference(s1,t1)) // 2
console.log(findDifference(s2,t2)) // 3 
console.log(findDifference(s3,t3)) // 0
console.log(findDifference(s4,t4)) // 1

