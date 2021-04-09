// 1, 2, 3, 4, 5
// 1, 2, 3, 5, 4
// 1, 2, 4, 3, 5
const q4 = [1, 4, 2, 5, 3]

function minimumBribes(q) {
  let bribes = 0

  for ( let i = 0; i < q.length; i++){
    if ( (q[i] - ( i + 1 )) > 2 ) {
      return console.log("Too chaotic")
    }

    for ( let j = Math.max(0, q[i] - 2 ); j < i; j++ ){
      if ( q[j] > q[i] ) bribes++
    }
  }

  console.log(bribes)
}