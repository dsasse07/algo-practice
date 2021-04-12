const { solution } = require('./solution')

const test1 = "loom"
const test2 = "mom"
const test3 = "noon"
const test4 = "dump"
const test5 = "ifailuhkqq"
const test6 = "kkkk"
const test7 = "cdcd"


describe('solution function', () => {
  test('loom has 1 anagram pair', () => {
    // [o,o]
    expect( solution( test1 ) ).toEqual( 1 )
  })
  test('mom has 2 anagram pairs', () => {
    // [m,m], [mo, om]
    expect( solution( test2 ) ).toEqual( 2 )
  })
  test('noon has 2 anagram pairs', () => {
    // [n,n], [o,o], [no, on], [noo, oon]
    expect( solution( test3 ) ).toEqual( 4 )
  })
  test('dump has 0 anagram pairs', () => {
    expect( solution( test4 ) ).toEqual( 0 )
  })
  test('ifailuhkqq has 3 anagram pairs', () => {
    // [i,i], [q,q], [ifa, fai]
    expect( solution( test5 ) ).toEqual( 3 )
  })
  test('kkkk has 10 anagram pairs', () => {
    expect( solution( test6 ) ).toEqual( 10 )
  })
  test('cdcd has 5 anagram pairs', () => {
    // [c,c], [d,d], [cd, cd], [cd,cd], [dc,cd] 
    expect( solution( test7 ) ).toEqual( 5 )
  })
})

