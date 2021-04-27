
/*
 which accepts a number and adds up all the numbers from 0 to the number passed to the function 
 */

const recursiveRange = ( num ) => {
  if ( num === 1 ) return 1
  return num + recursiveRange(--num)
}

console.log( '6', recursiveRange(3) )
console.log( '15', recursiveRange(5) )

