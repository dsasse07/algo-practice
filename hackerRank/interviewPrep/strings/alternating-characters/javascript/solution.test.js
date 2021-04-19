const { solution } = require('./solution')

const t1 = "AAAA"
const t2 = "BBBBB"
const t3 = "ABABABAB"
const t4 = "BABABA"
const t5 = "AAABBB"


describe('solution function', () => {
  test('should pass t1', () => {
    expect( solution( t1 ) ).toEqual( 3 )
  })
  test('should  pass t2', () => {
    expect( solution( t2 ) ).toEqual( 4 )
  })
  test('should  pass t3', () => {
    expect( solution( t3 ) ).toEqual( 0 )
  })
  test('should  pass t4', () => {
    expect( solution( t4 ) ).toEqual( 0 )
  })
  test('should  pass t5', () => {
    expect( solution( t5 ) ).toEqual( 4 )
  })
})

