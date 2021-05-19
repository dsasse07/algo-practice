const s1 = "the sky is blue"
const s2 = "  hello world  "
const s3 = "a good   example"
const s4 = "  Bob    Loves  Alice   "
const s5 = "Alice does not even like bob"

function reverseString(string){
  const trimmedString = string.trim()
  const pattern = /\s{2,}/g
  const normalizedString = trimmedString.replace(pattern, " ")
  return normalizedString.split(" ").reverse().join(" ")
}

