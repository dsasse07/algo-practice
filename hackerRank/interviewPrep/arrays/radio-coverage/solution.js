const antennaCount = (array,range) => {
  let [count, firstUncovered] = [0, 0]
  const sortedArray = [...new Set(array)].sort((a,b) => a-b)

  while (firstUncovered < sortedArray.length){
      let current = firstUncovered
      while (current < sortedArray.length && (sortedArray[current] - sortedArray[firstUncovered]) <= range){
          current += 1
      }

      while (firstUncovered < sortedArray.length && (sortedArray[firstUncovered] - sortedArray[current - 1]) <= range){
          firstUncovered += 1
      }
      count += 1
  }
  
  return count
}