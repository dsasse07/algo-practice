/*
which accepts a string and returns the length of the longest substring with all distinct characters.

Time = O(n)

Ex:
findLongestSubstring('')                    //  0
findLongestSubstring('rithmschool')         //  7
findLongestSubstring('thisisawesome')       //  6
findLongestSubstring('thecatinthehat')      //  7
findLongestSubstring('bbbbbb')              //  1
findLongestSubstring('longestsubstring')    //  8
findLongestSubstring('thisishowwedoit')     //  6

*/

const findLongestSubstring = ( str ) => {
  if (!str) return 0
  if ( new Set(str).size === str.length ) return str.length

  let left = 0;
  let right = 0;
  let result = 1;

  while ( right < str.length ){
    right ++
    if (str[left] !== str[right]){
      result++
    }
  }


}


console.log('0', findLongestSubstring('')                    )
console.log('7', findLongestSubstring('rithmschool')         )
console.log('6', findLongestSubstring('thisisawesome')       )
console.log('7', findLongestSubstring('thecatinthehat')      )
console.log('1', findLongestSubstring('bbbbbb')              )
console.log('8', findLongestSubstring('longestsubstring')    )
console.log('6', findLongestSubstring('thisishowwedoit')     )