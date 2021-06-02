/* 
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
*/

const t1 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
const t2 = [[0,0,0,0,0,0,0,0]]
const t3 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,0,1,1],
  [0,0,0,1,1]]



const search = grid => {
  let maxArea = 0
  const islands = {}
  for (let i = 0; i < grid.length; i++){
    islands[i] = []
  }

  const mapIsland = (i, j) => {
    const queue = [[i,j]]
    let count = 0
    const directions = [[-1,0], [1,0], [0,1], [0,-1]]
    while (queue.length > 0){
      const current = queue.shift()
      count++

      for (const [a,b] of directions){
        if (
            current[0] + a >= 0 && 
            current[0] + a < grid.length && 
            current[1] + b >= 0 &&
            current[1] + b < grid[0].length &&
            grid[current[0] + a][current[1] + b] === 1 &&
            !islands[current[0] + a].includes(current[1] + b)
            ){
          queue.push([current[0] + a, current[1] + b])
          islands[current[0]+a].push(current[1]+b)
        }
      }
    }
    return count
  }

  for ( let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[0].length; j++){
      if (!islands[i].includes(j) && grid[i][j] === 1){
        islands[i].push(j)
        maxArea = Math.max(maxArea, mapIsland(i,j))
      }
    }
  }
  return maxArea
}

// console.log(search(t1))
// console.log(search(t2))
console.log(search(t3))