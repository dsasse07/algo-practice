/*
 which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
 In other words, the function should check whether the characters in the first string appear somewhere in the second string, 

 Ex:

 isSubsequence('hello', 'hello world')      // true
 isSubsequence('sing', 'sting')             // true
 isSubsequence('abc', 'abracadabra')        // true
 isSubsequence('abc', 'acb')                // false
*/


const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length ) return false
  if (str1.length === 0) return true
  let i = 0;
  let j = 0;

  while (j < str2.length && i < str1.length){
    if (str2[j] === str1[i]){
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === str1.length;
}

console.log('true', isSubsequence('hello', 'hello world')      )
console.log('true', isSubsequence('sing', 'sting')             )
console.log('true', isSubsequence('abc', 'abracadabra')        )
console.log('false', isSubsequence('abc', 'acb')                )