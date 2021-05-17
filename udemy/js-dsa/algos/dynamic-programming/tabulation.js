
const tabFib = num => {
  if (num <= 2) return 1
  const sequence = [0,1,1]
  for(let i = 3; i <= num; i++){
    sequence[i] = sequence[i-2] + sequence[i-1]
  }
  return sequence[num]
}

let start = Date.now()
console.log(tabFib(40))
console.log(Date.now() - start)