/*

Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()

Do not worry about negative bases and exponents

*/

const power = ( base, exp ) => {
  if ( exp === 0 ) return 1
  return base * power( base, --exp)
}

console.log( '4', power(2, 2) )
console.log( '27', power(3, 3) )
console.log( '16', power(2, 4) )
console.log( '125', power(5, 3) )
