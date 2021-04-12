const n1 = 5
const q1 = [
  [1,2,100],
  [2,5,100],
  [3,4,100]
]
// Output array = [100, 200, 200, 200, 100]
// Output value = 200

function arrayManipulation( n, queries ){
  const array = Array(n)
  let max = 0
  
  for( let query of queries){
    const [ a, b, k ] = query
    for ( let i = a; i <= b; i++ ){
      const index = i - 1
      array[index] === undefined ? array[index] = k : array[index] += k
      if ( array[index] > max) max = array[index]
    }
  }

  return max
}

// describe('arrayManipulation', () => {
//   const n1 = 5
//   const q1 = [
//     [1,2,100],
//     [2,5,100],
//     [3,4,100]
//   ]
//   test('should return max value after manipulation', () => {
//     expect( arrayManipulation(n1, q1) ).toBe(200)
//   })
// })


function arrayManipulation2( n, queries ){
  const tracker = []

  for( let [a, b, k] of queries){
    tracker[ a ] ? tracker[ a ] += k : tracker[ a ] = k
    tracker[ b + 1 ] ? tracker[ b + 1 ] -= k : tracker[ b + 1] = -k
  }

  let sum = 0
  let max = 0

  for ( let i = 0; i < tracker.length; i++ ){
    if ( tracker[i] !== undefined ) {
      sum += tracker[i]
    }
    if ( sum >= max ) max = sum 
  }
  return max
}

describe('arrayManipulation2', () => {
  const n1 = 5
  const q1 = [
    [3,4,100],
    [1,2,100],
    [2,5,100],

  ]
  test('should return max value after manipulation q1', () => {
    expect( arrayManipulation2(n1, q1) ).toBe(200)
  })
  const n2 = 10
  const q2 = [
    [2,6,8],
    [3,5,7],
    [1,8,1],
    [5,9,15]
  ]

  test('should return max value after manipulation q1', () => {
    expect( arrayManipulation2(n2, q2) ).toBe(31)
  })

  const n3 = 4
  const q3 = [
    [2,3,603],
    [1,1,286],
    [4,4,882]
  ]
  /*
  round 1: [ un, 603, un, -603 ]
  round 2: [ 286, 317, un, -603 ]
  round 3: [ 286, 317, ud, 279, -882 ]
  ==> Positive sum = 882
  */

  test('should pass test case 1', () => {
    expect( arrayManipulation2(n3,q3)).toBe(882)
  })
  
})