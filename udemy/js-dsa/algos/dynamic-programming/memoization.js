
const fib = num => {
  if (num <= 2) return 1
  return fib(num - 2) + fib(num - 1)
}

const memoFib = num => {
  const memo = []

  const fib = num => {
    if ( !memo[num] ){
      if (num <= 2){
        memo[num] = 1
      } else {
        memo[num] = fib(num - 2) + fib(num - 1)
      }
    }
    return memo[num]
  }

  return fib(num)
}

// ALT MEMO FIB

const altMemoFib = (num, memo = [] ) => {
  if (!memo[num]){
    if (num <= 2) {
      memo[num] = 1
    } else {
      memo[num] = altMemoFib(num - 2, memo) + altMemoFib(num - 1, memo)
    }
  }
  return memo[num]
}

// let start = Date.now()
// console.log(fib(30))
// console.log(Date.now() - start)
let start = Date.now()
console.log(altMemoFib(60))
console.log(Date.now() - start)

start = Date.now()
console.log(memoFib(60))
console.log(Date.now() - start)
