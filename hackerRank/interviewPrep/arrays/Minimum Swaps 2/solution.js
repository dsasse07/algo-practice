const a1 = [4,3,1,2] // 3
const a2 = [2,3,4,1,5] // 3
const a3 = [1,3,5,2,4,6,7] // 3

function minimumSwaps( arr ){
  const valueAtIndex = {...arr}
  const indexOfValue = {}
  let swaps = 0

  Object.values(valueAtIndex).forEach( (index, i) => {
    indexOfValue[index] = i
  })

  Object.keys(valueAtIndex).forEach( index => {
    if ( valueAtIndex[index] !== Number(index) + 1 ){
      const prev = valueAtIndex[index]
      const newValIndex = indexOfValue[ Number(index) + 1 ]
      
      valueAtIndex[index] = valueAtIndex[newValIndex]
      valueAtIndex[newValIndex] = prev
      indexOfValue[ valueAtIndex[index] ] = Number(index)
      indexOfValue[prev] = newValIndex

      swaps ++
    }
  })
  return swaps
}


