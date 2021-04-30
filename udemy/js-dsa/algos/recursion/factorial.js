
/*
 which accepts a number and returns the factorial of that number. 
 A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4 * 3 * 2 * 1 = 24)
*/

const factorial = ( num ) => {
  if ( num === 0 ) return 1
  return num * factorial( --num)
}

console.log( '24', factorial(4) )
console.log( '6', factorial(3) )
console.log( '1', factorial(0) )
console.log( '120', factorial(5) )
