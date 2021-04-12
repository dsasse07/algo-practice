const { solution } = require('./solution')

const test1 = ["hello", "world"]
const test2 = ["hi", "world"]


describe('solution function', () => {
  test('should be Yes', () => {
    const [s1, s2] = test1
    expect( solution( s1, s2 ) ).toEqual( "YES" )
  })
  test('should be NO', () => {
    const [s1, s2] = test2
    expect( solution( s1, s2 ) ).toEqual( "NO" )
  })
  
})

