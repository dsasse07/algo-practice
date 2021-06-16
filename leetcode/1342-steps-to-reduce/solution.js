const fibonacci = (n) => {
  const memo = {
    0: 0,
    1: 1,
  }

  const fib = (num) => {
    if (num === 0 || num === 1) {
      return num
    }
    if (memo[num]) return memo[num]
    memo[num] = fib(num - 1) + fib(num - 2)
    return memo[num]
  }

  return fib(n)
}
