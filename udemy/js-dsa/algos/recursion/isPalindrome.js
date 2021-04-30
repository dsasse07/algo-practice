// Check for condition recursively

const isPalindrome = (str) => {
  if (str.length <= 1) return true
  const firstLetter = str[0]
  const lastLetter = str.slice(-1)
  if (firstLetter !== lastLetter) return false
  return isPalindrome( str.slice(1,-1) )
}

console.log('false', isPalindrome('awesome') )
console.log('false', isPalindrome('foobar') )
console.log('true', isPalindrome('tacocat') )
console.log('true', isPalindrome('amanaplanacanalpanama') )
console.log('false', isPalindrome('amanaplanacanalpandemonium') )
