const mag = "give me one grand today night".split(" ")
const note = "give one grand today".split(' ')

function checkMagazine( magazine, note ){
  const dict = {}
  let validWords = 0
  magazine.forEach( word => {
    dict[word] ? dict[word]++ : dict[word] = 1
  })

  note.forEach( word => {
    if ( dict[word] ) {
      validWords ++
      dict[word]--
    }
  })
  
  validWords === note.length ? console.log("Yes") : console.log("No")
}

// describe('checkMagazine', () => {
//   test('should return true', () => {
//     const m = "give me one grand today night"
//     const n = "give one grand today"
//     expect(checkMagazine( m,n )).toEqual( {} )
//   })
  
// })
