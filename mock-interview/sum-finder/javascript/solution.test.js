const { solution } = require('./solution')


describe('solution function', () => {
  test('should ', () => {
    const t1 = [6,4,3,2,1,7]
    const sum = 9
    expect( solution( t1, sum ) ).toEqual( true )
  })
  test('should ', () => {
    const t2 = [6,4,3,2,1,7]
    const sum = 2
    expect( solution( t2, sum ) ).toEqual( false )
  })
  test('should ', () => {
    const t2 = [1,1,1]
    const sum = 2
    expect( solution( t2, sum ) ).toEqual( true )
  })
  test('should ', () => {
    const t2 = [1,1,1]
    const sum = 1
    expect( solution( t2, sum ) ).toEqual( false )
  })
  test('should ', () => {
    const t2 = [1,1,1]
    const sum = 3
    expect( solution( t2, sum ) ).toEqual( false )
  })
})

