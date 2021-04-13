const queries = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2],
]

const queries2 = [
  [3, 4],
  [2, 1003],
  [1, 16],
  [3, 1],
]

const queries3 = [
  [1, 3],
  [2, 3],
  [3, 2],
  [1, 4],
  [1, 5],
  [1, 5],
  [1, 4],
  [3, 2],
  [2, 4],
  [3, 2],
]


function solution ( queries ){
  const frequencyMap = {}
  const valsAtFreqMap = {}
  const results = []

  for (let query of queries ){
    const action = query[0]
    const value = query[1]

    switch(true){
      case(action === 1):
        removeFromPrevFreq(value)
        frequencyMap[value] ? frequencyMap[value] += 1 : frequencyMap[value] = 1
        addToNewFreq(value)
        break
      case(action === 2):
        if ( !frequencyMap[value] ) break
        removeFromPrevFreq(value)
        frequencyMap[value] -= frequencyMap[value] - 1 >= 0 ? 1 : 0
        addToNewFreq(value)
        break
      case(action === 3):
        valsAtFreqMap[ value ]?.length > 0 ? results.push(1) : results.push(0)
        break
    }
  }

  function removeFromPrevFreq(value){
    if ( frequencyMap[value] ){
      const thisFreqsVals = valsAtFreqMap[ frequencyMap[value] ]
      const oldFreqIndex = thisFreqsVals.indexOf(value)
      if ( oldFreqIndex !== -1 ) thisFreqsVals.splice( oldFreqIndex, 1)
    }
  }

  function addToNewFreq(value){
    if ( valsAtFreqMap[ frequencyMap[value] ] ){
      valsAtFreqMap[ frequencyMap[value] ].push(value)
    } else {
      valsAtFreqMap[ frequencyMap[value] ] = [value]
    } 
  }
  
  return results
} 

module.exports = { solution }