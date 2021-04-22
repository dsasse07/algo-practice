const { solution } = require('./solution')



describe('solution function', () => {
  test('should ', () => {
    const test = "aabbcd"
    expect( solution( test ) ).toEqual( "NO" )
  })
  test('should ', () => {
    const test = "aabbccddeefghi"
    expect( solution( test ) ).toEqual( "NO" )
  })
  test('should ', () => {
    const test = "abcdefghhgfedecba"
    expect( solution( test ) ).toEqual( "YES" )
  })
  test('should ', () => {
    const test = "aaaabbcc"
    expect( solution( test ) ).toEqual( "NO" )
  })
  
})

