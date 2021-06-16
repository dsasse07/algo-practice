const stepsToReduce = (num) => {
  let count = 0

  const step = (num) => {
    if (num === 0) return count
    count++
    if (num % 2 === 0) {
      return step(num / 2)
    } else {
      return step(num - 1)
    }
  }

  return step(num)
}
