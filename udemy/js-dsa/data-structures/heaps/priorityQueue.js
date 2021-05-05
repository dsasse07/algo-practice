class Node {
  constructor(value, priority){
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue{
  constructor(){
    this.values = []
  }

  enqueue(value, priority){
    const node = new Node(value, priority)
    this.values.push(node)

    const swap = ( arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }
    let currentIdx = this.values.length - 1
    let parentNodeIdx = Math.floor( (currentIdx - 1) / 2)

    while( currentIdx !== 0 && this.values[currentIdx].priority < this.values[parentNodeIdx].priority){
      swap(this.values, currentIdx, parentNodeIdx)
      currentIdx = parentNodeIdx
      parentNodeIdx = Math.floor( (currentIdx - 1) / 2)
    }
    return this.values
  }

  dequeue(){
    if(this.values.length <= 1) return this.values.pop().value
    const swap = ( arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }

    const lastIndex = this.values.length - 1
    let currentIdx = 0
    swap(this.values, currentIdx, lastIndex)
    const next = this.values.pop()


    while(true){
      let leftChildIdx = 2 * currentIdx + 1
      let rightChildIdx = 2 * currentIdx + 2
      let swapIdx = null
      if ( leftChildIdx < this.values.length && this.values[currentIdx].priority > this.values[leftChildIdx].priority){
        swapIdx = leftChildIdx
      }
      if (
            rightChildIdx < this.values.length &&
            (
              (swapIdx === null && this.values[currentIdx].priority > this.values[rightChildIdx].priority) ||
              (swapIdx !== null && this.values[rightChildIdx].priority < this.values[leftChildIdx].priority)
            )
      ){
        swapIdx = rightChildIdx
      }
      if (swapIdx === null) break
      swap(this.values, currentIdx, swapIdx)
      currentIdx = swapIdx
    }

    return next.value
  }
}