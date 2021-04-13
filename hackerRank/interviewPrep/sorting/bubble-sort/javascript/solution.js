

function solution ( a ){
  let isSorted = false
  let endOfArray = a.length - 1
  let swaps = 0

  while (!isSorted){
    isSorted = true
    
    for ( let i = 0; i < endOfArray; i++){
      if ( a[i] > a[i + 1] ) {
        [ a[i], a[i + 1] ] = [ a[i + 1], a[i] ]
        swaps++
        isSorted = false
      }
    }
    endOfArray--
  }

  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${ a[a.length-1] }`)
} 

module.exports = { solution }


function bubbleSort( a ){
  let isSorted = false
  let endOfArray = a.length - 1

  while (!isSorted){
    isSorted = true
    
    for ( let i = 0; i < endOfArray; i++){
      if ( a[i] > a[i + 1] ) {
        [ a[i], a[i + 1] ] = [ a[i + 1], a[i] ]
        isSorted = false
      }
    }
    endOfArray--
  }

  return a
}