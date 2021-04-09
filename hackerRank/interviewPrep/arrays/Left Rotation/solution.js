const d1 = 4
const a1 = [1, 2, 3, 4, 5]

// a = array
// d = rotation count
function rotLeft( a, d ) {
  const rotatedSection = a.slice(0, d)
  const remainingSection = a.slice(d)
  return [...remainingSection, ...rotatedSection]
}