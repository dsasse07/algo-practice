var findLongestWord = function(s, dictionary) {
  
  dictionary.sort((a,b) => {
      if (b.length !== a.length){
          return b.length - a.length
      } else {
          return a.localeCompare(b)
      }
  })

  for( const word of dictionary){
    let sChar = 0
    let wordChar = 0
    while( sChar < s.length ){
      if (s[sChar] === word[wordChar]){
        sChar++
        wordChar++
      } else {
        sChar++
      }
    }
    if (wordChar === word.length) return word
  }
  return ''
};

console.log(findLongestWord("abpcplea",
["ale","apple","monkey","plea", "abpcplaaa","abpcllllll","abccclllpppeeaaaa"]))
console.log(findLongestWord("aewfafwafjlwajflwajflwafj",
["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]))
// module.exports = { solution }