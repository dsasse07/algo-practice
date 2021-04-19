const { solution } = require('./solution')



describe('solution function', () => {
  test('should ', () => {
    const array = [2, 3, 4, 2, 3, 6, 8, 4, 5]
    const d = 5
    expect( solution( array, d ) ).toEqual( 2 )
  })
  test('should ', () => {
    const array = [1,2,3,4,4]
    const d = 4
    expect( solution( array, d ) ).toEqual( 0 )
  })
  test('should ', () => {
    const array = [10,20,30,40,50]
    const d = 3
    expect( solution( array, d ) ).toEqual( 1 )
  })
  
})

