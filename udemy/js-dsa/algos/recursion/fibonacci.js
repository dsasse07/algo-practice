
/*
th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 

fib: 1, 1, 2, 3, 5, 8, 13, 21, 34... 
dig: 1  2  3  4  5  6  7   8   9

which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

const fib = (num) => {
  const sequence = {}

  const calculate = (num) => {

    if ( sequence[num] !== undefined ){
      value = sequence[num]
    } else {
      if (num === 1 || num === 2) {
        value = 1
      } else {
        value = calculate(num - 1) + calculate( num - 2)
      }
      sequence[num] = value
    }

    return value
  }
  
  return calculate(num)
}

console.log( '2', fib(3) )
console.log( '34', fib(50) )

