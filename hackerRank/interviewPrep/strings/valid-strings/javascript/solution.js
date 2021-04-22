const test = "abcdefghhgfedecba"
const test2 = "aabbccddeefghi"
const test3 = "aaaabbcc"
const test4 = "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"

function solution ( s ){
  const string = s.split("\n")[0]
  const letterFreq = {}
  const freqCount = []
  let freqs = 0
  let maxFreq = 0
  let minFreq = Infinity

  for( let i = 0; i < string.length; i++){
    const letter = string[i]
    const prevFreq = letterFreq[letter] || 0

    letterFreq[letter] ? letterFreq[letter] += 1 : letterFreq[letter] = 1
    freqCount[ letterFreq[letter] ] ? freqCount[ letterFreq[letter] ] += 1 : freqCount[ letterFreq[letter] ] = 1
    
    freqCount[prevFreq] ? freqCount[prevFreq] -= 1 : freqCount[prevFreq] = 0 
  }

  Object.values(letterFreq).forEach( freq => {
    maxFreq = freq > maxFreq ? freq : maxFreq
    minFreq = freq < minFreq ? freq : minFreq
  })

  Object.values(freqCount).forEach( count => {
    if (count > 1) freqs++
  })

  console.log(`freqCount`, freqCount)
  console.log(`letterFreq`, letterFreq)
  console.log(`freqs`, freqs)
  console.log(`maxFreq`, maxFreq)
  console.log(`minFreq`, minFreq)
  return freqs > 1 || maxFreq - minFreq >= 2 ? "NO" : "YES"
} 

module.exports = { solution }