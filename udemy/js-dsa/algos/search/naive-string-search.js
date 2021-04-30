/*
  How many tmes does a substring appear in a longer string?

  Psuedocode:
  - iterate over longer string, checking each character against the first
    character of str2
    - If it matches, begin iterating over str2 and checking each lteer against str1
      - if all leters match, increment counter
      - If mismatch, exit iteration

  Time: O(short * (long - short + 1))

  Does not work well if there are many sequences where 
  most of the shortString chars match and then 
  theres a final mismatch
*/

const naiveStringSearch = (longString, shortString) => {
  if ( longString.length < shortString.length ) return 0
  let counter = 0

  for( let i = 0; i < longString.length - shortString.length + 1; i++){
    for( let j = 0; j < shortString.length; j++){
      if (longString[i + j] !== shortString[j]) break
      if (j === shortString.length - 1 ) counter++
    }
  }
  return counter
}

console.log('3', naiveStringSearch('wowzzomgzomgomg', 'omg'))
console.log('3', naiveStringSearch('oooo', 'oo'))
console.log('3', naiveStringSearch('ooo', 'o'))
console.log('0', naiveStringSearch('ooo', 'a'))
