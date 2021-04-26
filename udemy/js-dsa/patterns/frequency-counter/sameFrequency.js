/*
Write a function called - sameFrquency - Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:

- Time: O(N)

Sample Input:
  - sameFrequency( 182, 281 ) // true
  - sameFrequency( 34, 14 ) // false
  - sameFrequency( 3589578, 5879385 ) // true
  - sameFrequency( 22, 222 ) // false
*/

// const sameFrequency = ( num1, num2 ) => {
//   const freqCounter = {}
//   powerOfTen1 = Math.floor( Math.log(num1) / Math.log(10) )
//   powerOfTen2 = Math.floor( Math.log(num2) / Math.log(10) )

//   if ( powerOfTen1 !== powerOfTen2 ) return false

//   const getDigits = (num, powerOfTen) => {
//     const digits = []
//     for( let i = powerOfTen; i >= 0; i--){
//       digits.push( Math.floor(num / 10**i) )
//       num %= 10**i
//     }
//     return digits
//   }

//   const digits1 = getDigits(num1, powerOfTen1)
//   const digits2 = getDigits(num2, powerOfTen2)

//   for( let num of digits1 ){
//     freqCounter[num] = ++freqCounter[num] || 1
//   }

//   for( let num of digits2 ){
//     if (freqCounter[num] > 0) {
//       freqCounter[num]-- 
//     } else {
//       return false
//     }
//   }

//   return true
// }


const sameFrequency = (num1, num2) => {
  const freqCounter = {};
  const powerOfTen1 = Math.floor( Math.log(num1) / Math.log(10) );
  const powerOfTen2 = Math.floor( Math.log(num2) / Math.log(10) );

  if ( powerOfTen1 !== powerOfTen2 ) return false;

  const getDigits = (num, powerOfTen) => {
    const digits = [];

    let power = 1;

    for (let j = 1; j <= powerOfTen; j++){
      power *= 10; 
    }

    for( let i = powerOfTen; i >= 0; i--){
      const digit = Math.floor(num / power) ;
      digits.push( digit );
      num %= power;
      power /= 10;
    }
    return digits;
  };

  const digits1 = getDigits(num1, powerOfTen1);
  const digits2 = getDigits(num2, powerOfTen2);

  
  for( let num of digits1 ){
    freqCounter[num] = ++freqCounter[num] || 1;
  }

  for( let num of digits2 ){
    if (freqCounter[num] > 0) {
      freqCounter[num]-- ;
    } else {
      return false;
    }
  }

return true;
}



console.log('true', sameFrequency( 182, 281 ) )
console.log('false', sameFrequency( 34, 14 ) )
console.log('true', sameFrequency( 3589578, 5879385 ) )
console.log('false', sameFrequency( 22, 222 ) )