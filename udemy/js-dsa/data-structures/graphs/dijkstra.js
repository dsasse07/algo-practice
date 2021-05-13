/*
  Each edge will have a weight/cost associated with it.
  This cost could be a distance (maps), a cost, time, etc.

  unweighted adjacencyList = {
    "A": ["B","C"]
  }

  weighted adjacencyList = {
    "A": [{node: "B", weight:10}, {node:"C", weight:20}]
  }
*/
class WeightedGraph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(v){
    if (this.adjacencyList[v] === undefined){
      this.adjacencyList[v] = []
      return true
    }
    return false
  }

  addEdge(v1, v2, weight){
    if (this.adjacencyList[v1]?.some( ({node}) => node === v2)) return false
    this.adjacencyList[v1].push({node: v2, weight})
    this.adjacencyList[v2].push({node: v1, weight})
    return true
  }

  /*
    Find shortest path between two nodes
          
          4
      A ----- B
    2 |         \   3
      |  2     3  \
      C --- D ---- E
        \   |1    /
      4  \  |   /  1
            F
  
    PSEUDO:
    1. When selecting a new node, pick the node with the smallest known distance
    2. After picking a node, look at each of its neighbors
      3. For each neighbor, calculate the distance from the starting node to that node
      4. if the new total distance is less that previous total, store the shorter 
          distance for that node

    - Initialize a shortest distance from "start" object
      - distance from start -> start = 0
      - We don't know the other distances, so put Infinity
      - distances = {
        A: 0,
        B: Infinity,
        C: Infinity,
        D: Infinity,
        E: Infinity,
        F: Infinity,
      }
    - Start by selecting the node with the smallest known distance (A)
      - Add current node to visited. 
        - visited = [A]
      - Check current node (A) neighbors (B, C) and compare the new sum with their weight to the current sum
      - A > B is 4, which is less that Infinity; A > C is 2
      - distances = {
        A: 0,
        B: 4,
        C: 2,
        D: Infinity,
        E: Infinity,
        F: Infinity,
      }
      - Also update the "previous" object to the current node:
      - previous = {
          A: null,
          B: A,
          C: A,
          D: null,
          E: null,
          F: null,
      }
    **************REPEAT***************
    - Pick the smallest known distance from A, which is 2, leading to C.
    - Add C to visited. visited = [A, C]
    - Look at C's UNVISITED neighbors (D, F)
      - C > D = 2. 2 + (current distance to C, 2) = 4. 4 is less than Infinity
      - C > F = 4. 4 + (current distance to C, 2) = 6. 6 is less than Infinity
      - distances = {
        A: 0,
        B: 4,
        C: 2,
        D: 4,
        E: Infinity,
        F: 6,
      }
      - previous = {
          A: null,
          B: A,
          C: A,
          D: C,
          E: null,
          F: C,
      }
    **************REPEAT***************
      - Pick smallest UNVISITED NODE (B, D both equal 4)
      - Add B to visited. visited = [A, C, B]
      - Look at B's UNVISITED neighbors (only E)
      - Evaluate:
        - B -> E = 3. 3 + (current distance to B, 4) = 7. & is less than Infinity
      - distances = {
        A: 0,
        B: 4,
        C: 2,
        D: 4,
        E: 7,
        F: 6,
      }
      - previous = {
          A: null,
          B: A,
          C: A,
          D: C,
          E: B,
          F: C,
      }
       **************REPEAT***************
      - Pick smallest UNVISITED NODE (D equal 4)
      - Add D to visited. visited = [A, C, B, D]
      - Look at D's UNVISITED neighbors (E, F)
      - Evaluate:
        - D -> E = 3. 3 + (current distance to D, 4) = 7. 7 is the same distance previous
          - No updates
        - D -> F = 1. 1 + Current distance to D, 4) = 5. 5 is less than prev. of 6
          - update!
      - distances = {
        A: 0,
        B: 4,
        C: 2,
        D: 4,
        E: 7,
        F: 5,
      }
      - previous = {
          A: null,
          B: A,
          C: A,
          D: C,
          E: B,
          F: D,
      }
      **************REPEAT***************
      - Pick smallest UNVISITED NODE (F equal 5)
      - Add F to visited. visited = [A, C, B, D, F]
      - Look at F's UNVISITED neighbors (only E)
      - Evaluate:
        - F -> E = 1. 1 + (current distance to F, 5) = 6. 6 is less than prev. distance of 7
          - update!
      - distances = {
        A: 0,
        B: 4,
        C: 2,
        D: 4,
        E: 6,
        F: 5,
      }
      - previous = {
          A: null,
          B: A,
          C: A,
          D: C,
          E: F,
          F: D,
      }
      **************REPEAT***************
      - Pick smallest UNVISITED NODE (E)
      - Add E to visited. visited = [A, C, B, D, F, E]
      - Look at E's UNVISITED neighbors (NONE)

    *************** GETTING THE PATH ***************
    Use the "previous" object to work backwards and find the path from E to A

    NOTE:
      - We need a priority queue to track the current distances
        - Naive Priority Queue: O(n log n)
        - MinHeap Priority Queue: O(log n)
  */

  naiveDijkstra(start, end){
    const queue = new NaivePriorityQueue()
    const distances = {}
    const previous = {}
    const shortestPath = []
    let minDistNode

    for(let node in this.adjacencyList){
      distances[node] = node === start ? 0 : Infinity
      queue.enqueue(node, distances[node])
      previous[node] = null
    }

    while(queue.values.length > 0){
      minDistNode = queue.dequeue().value // We just want the node letter, not the priority
      if (minDistNode === end) {
        // Done. Return path
        let next = end
        while(next){
          shortestPath.push(next)
          next = previous[next]
        }
        return {path: shortestPath.reverse(), distance: distances[end]}

      } else {
        for(let edge in this.adjacencyList[minDistNode]){
          // Get the next neighbor node letter
          let thisEdge = this.adjacencyList[minDistNode][edge]
          //Calculate the new distance to this node from start using minDistNode's value
          let newDistance = thisEdge.weight + distances[minDistNode]
          // If new distance is smaller, update the objects
          if (newDistance < distances[thisEdge.node]){
            distances[thisEdge.node] = newDistance
            previous[thisEdge.node] = minDistNode
            queue.enqueue(thisEdge.node, newDistance)
          }

        }
      }
    }
  }
  
  heapDijkstra(start, end){
    const queue = new minHeapQueue()
    const distances = {}
    const previous = {}
    const shortestPath = []
    let minDistNode

    for (let node in this.adjacencyList){
      distances[node] = node === start ? 0 : Infinity
      previous[node] = null
      queue.insert( node, distances[node])
    }
    while (queue.values.length > 0){
      minDistNode = queue.pop()

      if (minDistNode.value === end){
        let next = end
        while(next){
          shortestPath.push(next)
          next = previous[next]?.value
        }
        return {path: shortestPath.reverse(), distance: distances[end]}
      } else {
        for (let i in this.adjacencyList[minDistNode.value]){
          let thisNode = this.adjacencyList[minDistNode.value][i]
          const newDistance = thisNode.weight + distances[minDistNode.value]
          if (newDistance < distances[thisNode.node]){
            distances[thisNode.node] = newDistance
            previous[thisNode.node] = minDistNode
            queue.insert(thisNode.node, distances[thisNode.node])
          }
        }
      }
    }
    
  }
}

class NaivePriorityQueue{
  constructor(){
    this.values = []
  }

  enqueue(value, priority){
    this.values.push({value, priority})
    this.sort()
  }

  dequeue(){
    return this.values.pop()
  }

  sort(){
    this.values.sort( (a,b) => b.priority - a.priority )
  }
}

class minHeapQueue{
  constructor(){
    this.values = []
  }

  insert(value, priority){
    if (value === undefined || priority === undefined) return
    this.values.push({value, priority})
    this._bubbleUp()
  }

  _bubbleUp(){
    let currentIndex = this.values.length - 1
    let parentIndex
    while (currentIndex !== 0){
      parentIndex = Math.floor( (currentIndex - 1) / 2)
      if (this.values[currentIndex].priority > this.values[parentIndex].priority) break
      this._swap(currentIndex, parentIndex)
      currentIndex = parentIndex
    }
  }

  _swap(i1, i2){
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]]
  }

  pop(){
    if (this.values.length === 0) return
    const lastIndex = this.values.length - 1
    this._swap(0, lastIndex)
    const minValue = this.values.pop()
    this._trickle()
    return minValue
  }

  _trickle(){
    let currentIndex = 0
    let leftChild, leftChildIndex, rightChild, rightChildIndex, current
    let swapIndex = null

    while(true){
      leftChildIndex = (currentIndex * 2) + 1
      rightChildIndex = (currentIndex * 2) + 2
      current = this.values[currentIndex]
      leftChild = this.values[leftChildIndex]
      rightChild = this.values[rightChildIndex]
      swapIndex = null

      if (leftChild && current.priority >= leftChild.priority){
        swapIndex = leftChildIndex
      }
      if (rightChild && 
          (
            (swapIndex === null && current.priority >= rightChild.priority) ||
            (swapIndex !== null && rightChild.priority < leftChild.priority)
          )
          ){
        swapIndex = rightChildIndex
      }
      if (swapIndex === null) break
      this._swap(currentIndex, swapIndex)
      currentIndex = swapIndex
    }
  }
}



const g = new WeightedGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B", 4)
g.addEdge("B", "E", 3)
g.addEdge("A", "C", 2)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)
// console.log(g)

// console.log(g.naiveDijkstra("A", "E"))
console.log(g.heapDijkstra("A", "E"))