/*

Read: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/knuth-morris-pratt/knuthMorrisPratt.js
Watch: https://www.youtube.com/watch?v=GTJr8OvyEVQ

  - create a prefix/suffix array

pattern =   d   s   g   w   a   d   s   g   z
  - ps = [  0 , 0 , 0 , 0 , 0 , 1 , 2 , 3 , 0 ]
            0   1   2   3   4   5   6   7   8
            
  - The value of each slot in the array refers to the size of the prefix/suffix match
  - Creating the prefix array:
    - create two pointers (i, j)
      - if pattern[i] !== pattern[j] j++
      - if pattern[i] === pattern[j]{
        increase array value by one
        j++
        i++
        repeat until no prefix/suffix match
      }
    - Array values tell you what index you can start scanning the string at at the next mismatch
    Ex: if There was a mismatch at pattern[7], that means that ds...ds must have matched
    - We can move the scan window up, so that we align the prefix "ds" with where the 
    suffix "ds" was in the string and continue scan from there.


    Full Example:

string =    a   d   s   g   w   a   d   s   x   d   s   g   w   a   d   s   g   z
            0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17

pattern =   d   s   g   w   a   d   s   g   z
  - ps = [  0 , 0 , 0 , 0 , 0 , 1 , 2 , 3 , 0 ]
            0   1   2   3   4   5   6   7   8

      1. s[0] = a ; p[0] = d; NO MATCH
      1. s[1] = d ; p[0] = d; MATCH     **
        a. s[2] = s; p[1] = s; MATCH    **
        b. s[3] = g; p[2] = g; MATCH    **
        c. s[4] = w; p[3] = w; MATCH    **
        d. s[5] = a; p[4] = a; MATCH    **
        e. s[6] = d; p[5] = d; MATCH    **
        f. s[7] = s; p[6] = s; MATCH    **
        g. s[8] = x; p[6] = g; NO MATCH 

      ** Not a match, but we know that everything up to this point matched.
      - The pref/suffix pair tells us the largest sequence prior to this point.
      - In this case it is "ds".
      If we shifted he substring to align "ds" in both strings, we don't need to recheck them.

      If the realignment still doesn't match, then we realign again, ultimately resuming the scan as if we
      just started if no substring match is available.
      However the point in S does not reset, maintaining linear time.


      1. s[0] = a ; p[0] = d; NO MATCH
      1. s[0] = a ; p[0] = d; NO MATCH
      1. s[0] = a ; p[0] = d; NO MATCH
      1. s[0] = a ; p[0] = d; NO MATCH
      1. s[0] = a ; p[0] = d; NO MATCH
      1. s[0] = a ; p[0] = d; NO MATCH
      

*/    


const KMPSearch = (text, pattern) => {
  if (pattern.length === 0) return 0

  let textIndex = 0
  let patternIndex = 0
  let matchIndexes = []

  const prefixTable = buildPrefixTable(pattern)

  while (textIndex < text.length){
    // Do Letters match
    if (text[textIndex] === pattern[patternIndex]){
      // They match!! Is it the final letter of the pattern?
      if ( patternIndex === pattern.length - 1) {
        //It is! lets add the starting index of the match to the array
        // and then see if the pattern matches again starting over in this
        // same index
        // If the pattern is only 1 char long, move the text string forward
        // or else it will never end.
        matchIndexes.push( textIndex - pattern.length + 1)
        patternIndex = 0
        if (pattern.length === 1){
          textIndex++
        }
        continue
      }
      
      // It was not the last letter, let's check the next one,
      textIndex++
      patternIndex++

    } else if ( patternIndex > 0 ) {
      // There is a mismatch, but we are in the middle of the string, we dont want
      // To completely restart.
      // We use our prefix table to find the index to start at based on the
      // previous prefix/suffix pair
      patternIndex = prefixTable[patternIndex - 1]

    } else {
      // If we hit this, it means that even the very first letter of the pattern
      // was not a match. Move on to next letter of text string.
      patternIndex = 0
      textIndex++
    }
  }

  // Return match indexes if we found them. If not, return -1
  return matchIndexes.length > 0 ? matchIndexes : -1
}


const buildPrefixTable = (pattern) => {
  const patternTable = [0]
  let prefixIndex = 0
  let suffixIndex = 1

  while (suffixIndex < pattern.length){
    if (pattern[prefixIndex] === pattern[suffixIndex] ){
      patternTable[suffixIndex] = prefixIndex + 1
      suffixIndex++
      prefixIndex++
    } else if (prefixIndex === 0){
      patternTable[suffixIndex] = 0
      suffixIndex++
    } else {
      prefixIndex = patternTable[prefixIndex - 1]
    }
  }
  return patternTable
}


console.log('[0,9]', KMPSearch('AABAACAADAABAABA', 'AABA'))
console.log('[0,1,2]', KMPSearch('oooo', 'oo'))
console.log('[0,1,2]', KMPSearch('ooo', 'o'))
console.log('-1', KMPSearch('ooo', 'a'))


string = "adsgwadsxdsgwadsgz"
pattern = "dsgwadsgz"
console.log( KMPSearch(string, pattern) )