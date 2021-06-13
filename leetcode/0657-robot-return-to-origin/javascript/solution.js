


const isAtOrigin = ( moves ) => {
  let [x,y] = [0,0]
    
  for (let i = 0; i < moves.length; i++){
      if (moves[i] === 'U') y += 1
      else if (moves[i] === 'D') y -= 1
      else if (moves[i] === 'R') x += 1
      else if (moves[i] === 'L') x -= 1
  }
  
  return (x === 0 && y === 0)
};

console.log( isAtOrigin('UUDD')) // true
console.log( isAtOrigin('UURR')) // false

module.exports = { isAtOrigin }