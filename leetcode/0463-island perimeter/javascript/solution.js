const s1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
const s2 = [[1]]
const s3 = [[0,1]]
const s4 = [[1,1],[1,1]]

function islandPerimeter(grid){
  const visited = {}
  for (let i = 0; i < grid.length; i++){
      visited[i] = []
  }
  
  const isValid = (i,j, dir) => {
      return (
          i + dir[0] >= 0 && i + dir[0] < grid.length &&
          j + dir[1] >= 0 && j + dir[1] < grid[0].length
      )   
  }
  const mapIsland = (start) => {
      const directions = [[1,0], [-1,0], [0,1], [0,-1]]
      let perimeter = 0
      let stack = [start]
      while (stack.length > 0){
        const [i,j] = stack.pop()
        if (visited[i].includes(j)) continue
        visited[i].push(j)
        for (const dir of directions){
          if ( 
              isValid(i,j, dir) && 
              grid[i + dir[0]][j + dir[1]] === 1 &&
              !visited[i + dir[0]].includes(j + dir[1])
              ){
            stack.push([i + dir[0],j + dir[1]])
          } else if (!isValid(i,j, dir) || grid[i + dir[0]][j + dir[1]] === 0){
            perimeter += 1
          }
        }
      }
      return perimeter
  }
  
  for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[0].length; j++){
          if ( grid[i][j] === 1){
              return mapIsland([i,j])
          }
      }    
  }
}

// console.log(islandPerimeter(s1))
// console.log(islandPerimeter(s2))
// console.log(islandPerimeter(s3))
console.log(islandPerimeter(s4))

