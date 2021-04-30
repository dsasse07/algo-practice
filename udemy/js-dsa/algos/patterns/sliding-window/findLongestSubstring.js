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

  let startIndex = 0;
  let max = 0;

  const letterIndexes = {}
  
/*      t h i s i s a w e s o m e
    1.  *
        {t: 0}
        longest substring is [0]

        t h i s i s a w e s o m e
    2.  * *
        {t: 0, h: 1}
        longest substring is [0,1]
        
        t h i s i s a w e s o m e
    3.  * * * 
        {t: 0, h: 1, i: 2}
        longest substring is [0,1,2]

        t h i s i s a w e s o m e
    4.  * * * *
        {t: 0, h: 1, i: 2, s: 3}
        longest substring is [0,1,2,3]

        t h i s i s a w e s o m e
    5.        * *
        {t: 0, h: 1, i: 4, s: 3}
        longest substring is [3, 4]

        t h i s i s a w e s o m e
    6.          * *
        {t: 0, h: 1, i: 4, s: 5}
        longest substring is [4, 5]

        t h i s i s a w e s o m e
    7.          * * * 
        {t: 0, h: 1, i: 4, s: 5, a: 6}
        longest substring is [4, 5, 6]

        t h i s i s a w e s o m e
    8.          * * * *
        {t: 0, h: 1, i: 4, s: 5, a: 6, w: 7}
        longest substring is [4, 5, 6, 7]

        t h i s i s a w e s o m e
    9.          * * * * *
        {t: 0, h: 1, i: 4, s: 5, a: 6, w: 7, e: 8}
        longest substring is [4, 5, 6, 7, 8]

        t h i s i s a w e s o m e
    10              * * * *
        {t: 0, h: 1, i: 4, s: 9, a: 6, w: 7, e: 8}
        longest substring is [4, 5, 6, 7, 8]

        t h i s i s a w e s o m e
    11              * * * * *
        {t: 0, h: 1, i: 4, s: 5, a: 6, w: 7, e: 8, o: 10}
        longest substring is [4, 5, 6, 7, 8]

        t h i s i s a w e s o m e
    12              * * * * * *
        {t: 0, h: 1, i: 4, s: 5, a: 6, w: 7, e: 8, o: 10, m: 11}
        longest substring is [6, 7, 8, 9, 10, 11]

        t h i s i s a w e s o m e
    13                    * * * *
        {t: 0, h: 1, i: 4, s: 5, a: 6, w: 7, e: 12, o: 10, m: 11}
        longest substring is [6, 7, 8, 9, 10, 11]
*/   

  for (let i = 0; i < str.length; i++ ){
    let char = str[i]

    if ( letterIndexes[char] ) {
      startIndex = Math.max( letterIndexes[char], startIndex )
    } 
    max = Math.max( max, i - startIndex + 1)
    
    letterIndexes[char] = i + 1
  }

   return max
}


console.log('0', findLongestSubstring('')                    )
console.log('7', findLongestSubstring('rithmschool')         )
console.log('6', findLongestSubstring('thisisawesome')       )
console.log('7', findLongestSubstring('thecatinthehat')      )
console.log('1', findLongestSubstring('bbbbbb')              )
console.log('8', findLongestSubstring('longestsubstring')    )
console.log('6', findLongestSubstring('thisishowwedoit')     )