/*
There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly 
with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and 
no other cities outside of the group. You are given an n x n matrix 
isConnected where isConnected[i][j] = 1 if the ith city and the jth 
city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3


Constraints:
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

*/

const countProvinces = (isConnected) => {
  // Initialize Disjoint Set
  const parents = {}
  const size = {}
  let provinces = isConnected[0].length // Max # of provinces is # of individual cities
  
  // Find Parent of Set and compress tree so all children come from representative
  const findSet = node => {
      if (parents[node] === node) return node
      parents[node] = findSet(parents[node])
      return parents[node]
  }
  
  // Input two nodes, if they have different parents, join them under same parent
  const unionSets = (node1, node2) => {
      const a = findSet(node1)
      const b = findSet(node2)
      if (a !== b){
          if( size[a] >= size[b] ){
              parents[b] = a
              size[a] += size[b]
          } else {
              parents[a] = b
              size[b] += size[a]
          }
          provinces-- // Every time we join, its one less unique province.
      }
  }
  
  // Initial each city as a unique province
  for (let i = 0; i < isConnected.length; i++){
      parents[i] = i
      size[i] = 1
  }

  // Iterate through connectivity matrix PAST the diagonal
  // We do not need to worry about i === j cels because that is the city with itself
  // Since graph is undirected, we do not need to worry about lower half of matrix
  for (let i = 0; i < isConnected.length; i++){
      for(let j = i + 1; j < isConnected[0].length; j++){
          if (isConnected[i][j] === 1){
            // If two cities are connected, join into the same set.
            unionSets(i,j)
          }
      }
  }
  return provinces
};

console.log( countProvinces( [[1,1,0],[1,1,0],[0,0,1]] )) //2
console.log( countProvinces( [[1,0,0],[0,1,0],[0,0,1]] )) //3