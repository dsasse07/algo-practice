/*
Psuedo:
- if vertex empty, return
- add vertex to results list
- mark vertex as visited
for each neighbor in vertex's neighbors:
  if neighbor is not visited, recursively call fn
*/
class Graph {

  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2){
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return
    if (this.adjacencyList[vertex1].includes(vertex2)) return
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
    return true
  }

  removeEdge(v1, v2){
    if (!this.adjacencyList[v1] || this.adjacencyList[v2]) return
    if (!this.adjacencyList[v1].includes(v2)) return
    this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => {
      return v !== v2
    })
    this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => {
      return v !== v1
    })
  }

  removeVertex(v1){
    if (!this.adjacencyList[vertex]) return
    for(let v2 of this.adjacencyList[vertex]){
      this.removeEdge(v1, v2)
    }
    delete this.adjacencyList[v1]
  }

  depthFirstRecursive(start){
    const results = []
    const visited = {}

    const search = node => {
      if (!node) return
      results.push(node)
      visited[node] = true
      for (let neighbor of this.adjacencyList[node]){
        if ( visited[neighbor] ) continue
        search(neighbor)
      }
    }

    search(start)
    return results
  }


}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.depthFirstRecursive("A"))