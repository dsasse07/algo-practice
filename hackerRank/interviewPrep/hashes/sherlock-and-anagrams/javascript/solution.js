function solution ( string ){
  const substrings = {}
  let counter = 0

  // iterate through each letter as a starting point
  for( let i = 0; i < s.length; i++){
    // create a substring starting at the letter above, and extending 1 letter incrementall
    // until the end of the string is reached
    for (let j = 1; i+j <= s.length; j++){
      //sort the substrings alphabetically, so that anagrams will stack
      const sub = s.substr(i, j).split("").sort().join("")
      if (!sub) continue
      // store the substring into a hash. If if previously was stored,
      // we have a matching pair! 
      // Increase the pair counter by the number of stacked versions.
      // Incrementing counter in this way prevents having to use
      // factorial afterwards to get combination count.

      // After dealing with the counter, increment its stack count
      if ( substrings[sub] ) {
        counter += substrings[sub]
        substrings[ sub ] += 1
      } else {
        // If the substring wasn't previously stored, add it to hash
        substrings[ sub ] = 1
      }
    }
  }
  
  return counter
} 

module.exports = { solution }