/*
  This is for an undirected graph
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


}

const g = new Graph()