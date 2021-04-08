const s1 = "aba"
const n1 = 10

const s2 = "a"
const n2 = 1_000_000_000_000

function repeatedString( s, n ){
  const pattern = /a/g
  const numSegments = Math.floor(n/s.length)
  const partialStringLength = n % s.length

  const wholeMatches = s.match(pattern)
  const remainderMatch = s.slice(0, partialStringLength).match(pattern)
  
  let total = 0
  if (wholeMatches) total += wholeMatches.length * numSegments
  if (remainderMatch) total += remainderMatch.length
  return total
}