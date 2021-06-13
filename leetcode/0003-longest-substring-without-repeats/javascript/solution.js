const t1 = "abcabcbb"
const t2 = "bbbbb"
const t3 = 'pwwkew'
// Index Map
function solution(s){
  if (s.length <= 1) return s.length
  const map = {}
  let [left, right] = [0,0]
  let length = 0

  while (right < s.length){
    if (map[s[right]] !== undefined){
      left = Math.max(left, map[s[right]] + 1)
    }
    map[s[right]] = right
    length = Math.max(length, right - left + 1)
    right ++
  }

  return length
}

// Optimized Window
function solution2(s){
  if (s.length === 0) return 0
  let maxLen = 1
  let substring = s[0]

  for(let i = 1; i < s.length; i++){
    const nextLetter = s[i]
    const prevIndex = substring.indexOf(nextLetter)
    if (prevIndex !== -1){
      substring = substring.slice(prevIndex+1) + nextLetter
    } else {
      substring += nextLetter
    }
    maxLen = Math.max(substring.length, maxLen)
  }
  return maxLen
}

console.log(solution(t1))
console.log(solution(t2))
console.log(solution(t3))


