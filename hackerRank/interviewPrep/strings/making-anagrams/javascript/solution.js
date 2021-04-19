
const a = "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn"
const b = "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk"

const sortedA = "abbbcddeeeeghiijjklllnpppqsttuuuuvvwxyzz"
const sortedB = "aaabbccccdddeeffghhiijjkkllmnnopppqqrrrsssssstuvvvvvwxxxxxxy"

function solution(a,b){
  const sortedA = a.split("").sort((a,b) => a.localeCompare(b) ).join("")
  const sortedB = b.split("").sort((a,b) => a.localeCompare(b) ).join("")
  let ai = 0, bi = 0, count = 0

  while (ai < sortedA.length && bi < sortedB.length){
    const [letterA, letterB] = [ sortedA[ai], sortedB[bi] ]
    switch(true){
      case( letterA.localeCompare(letterB) === 0 ):
        ai++
        bi++
        break
      case( letterA.localeCompare(letterB) === 1):
        count ++
        bi++
        break
      case( letterA.localeCompare(letterB) === -1):
        count ++ 
        ai++
        break
    }
  }
  count += sortedA.slice(ai).length + sortedB.slice(bi).length
  return count
}

module.exports = { solution }