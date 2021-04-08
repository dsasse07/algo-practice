const path1 = [0,0,1,0,0,1,0] // 4 jumps

const path2 = [0, 0, 0, 0, 1, 0] // 3 jumps

function jumpingOnClouds ( c ){
  let i = 0 
  let jumps = 0
  
  while ( i < c.length-1 ) {
    if ( i+2 < c.length && c[i+2] === 0 ){
      i += 2
      jumps++
    } else {
      i += 1
      jumps++
    }
  }
  return jumps
}