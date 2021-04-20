const { solution } = require('./solution')

const t1 = "racecar"
const t2 = "josh"
const t3 = "Sit on a potato pan, Otis"
const t4 = "Ah. Satan sees Natasha."
const t5 = "Eva, can I see bees in a cave?"
const t6 = "I wanna build a snowman!"

describe('solution function', () => {
  test('should ', () => {
    expect( solution( t1 ) ).toEqual( true )
  })
  test('should ', () => {
    expect( solution( t2 ) ).toEqual( false )
  })
  test('should ', () => {
    expect( solution( t3 ) ).toEqual( true )
  })
  test('should ', () => {
    expect( solution( t4 ) ).toEqual( true )
  })
  test('should ', () => {
    expect( solution( t5 ) ).toEqual( true )
  })
  test('should ', () => {
    expect( solution( t6 ) ).toEqual( false )
  })
  
})

