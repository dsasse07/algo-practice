/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
Example 4:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/

const t1 = ['ab#c', 'ad#c'] //true
const t2 = ['ab##','c#d#'] //true
const t3 = ['a##c', '#a#c'] //true
const t4 = ['a#c','b'] //false
const t5 = ["bbbextm","bbb#extm"] //false


function solution ( [s,t] ){
  /*********  Not in O(1) space
    const str1 = []
    const str2 = []
    
    for( let char of s){
        char === '#' ? str1.pop() : str1.push(char)
    }
    
    for( let char of t){
        char === '#' ? str2.pop() : str2.push(char)
    }
    return str1.join() === str2.join()
  */

  let [i,j] = [s.length - 1 , t.length -1]
  // Keep going until both strings have reach the end
  // If one indx is in negative values, we will be comparing undefined, which will still be false
  while (i >= 0 || j >= 0){
    // Get the next kept index for each string.
    // If those two elements at not the same, at each iteration, they cannot be equal
    sChar = getNext(s, i)
    tChar = getNext(t, j)
    console.log([sChar, tChar])
    if (s[sChar] !== t[tChar]) return false
    i = sChar - 1
    j = tChar - 1
  }
  return true
};

// Starting at an index keep track of how many backspaces in a row we encounter.
// For each backspace encountered, skip an actual value that would be erased
// When we hit an actual value and have no more backspaces, thats the next kept index

const getNext = (str, idx) => {
  let count = 0
  while (idx >= 0){
      if (str[idx] === "#"){
          count ++
      } else if (count > 0) {
          count --
      } else {
          break
      }
    idx--
  }
  return idx
}


// console.log(solution(t1))
// console.log(solution(t2))
// console.log(solution(t3))
// console.log(solution(t4))
console.log(solution(t5))


module.exports = { solution }