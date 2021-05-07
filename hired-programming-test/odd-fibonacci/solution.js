// Find all odd Fibonacci numbers <= nth digit

const solution = (n) => {
  
  const memo = {}
  const odds = []
  
  const fibonacci = n => {
      if (n === 1 || n === 2){
          memo[n] = 1
          return 1
      }
      if (memo[n]){
          return memo[n]
      }
      memo[n] = fibonacci(n - 2) + fibonacci(n - 1)
      return memo[n]
  }
  
  const isPrime = num => {
      for(let i = 2; i < num ** 0.5; i++){
          if (num % i === 0) return false
      }
      return true
  }
  
  fibonacci(n)
  for( key of Object.keys(memo) ) {
      if (isPrime(memo[key]) && memo[key] !== 1 ) {
          odds.push(memo[key])    
      }
  }

  return odds
};

