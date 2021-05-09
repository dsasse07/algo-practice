const s1 = "theskyisblue"
const s2 = "helloworld"
const s3 = "agoodexample"
const s4 = "Bob    Loves  Alice   "
const s5 = "Alice does not even like bob"

function solution(letters, target){
  let result = ''
  for( let letter of letters){
    if (letter > target) {
      result = letter
      break
    }
  }
  if (result === "") return letters[0]

  return result
}
