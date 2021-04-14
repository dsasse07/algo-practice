const { solution } = require('./solution')

const test1 = [
  [1, 12, 5, 111, 200, 1000, 10 ],
  50
]

describe('solution function', () => {
  test('should ', () => {
    const [ prices, account ] = test1
    expect( solution( prices, account ) ).toEqual( 4 )
  })
  
})

