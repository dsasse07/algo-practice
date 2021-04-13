const { solution } = require('./solution')

const test1 = [
  [1,2,2,4],
  2
]
const test2 = [
  [1,3,9,9,27,81],
  3
]
const test3 = [
  [1,5,5,25,125],
  5
]
const test4 = [
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1 
  ],
  1
]

const test5 = [
  [1,2,1,2,4],
  2
]


describe('solution function', () => {
  test('test1 ', () => {
    const [arr, r] = test1
    expect( solution( arr, r ) ).toEqual( 2 )
  })
  test('test2 ', () => {
    const [arr, r] = test2
    expect( solution( arr, r ) ).toEqual( 6 )
  })
  test('test3 ', () => {
    const [arr, r] = test3
    expect( solution( arr, r ) ).toEqual( 4 )
  })
  test('test4 ', () => {
    const [arr, r] = test4
    expect( solution( arr, r ) ).toEqual( 161700 )
  })
  test('test5 ', () => {
    const [arr, r] = test5
    expect( solution( arr, r ) ).toEqual( 3 )
  })
})

