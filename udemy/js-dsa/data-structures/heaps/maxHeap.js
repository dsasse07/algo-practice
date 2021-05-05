class MaxBinaryHeap {

  // We don't need to build a Node class or any other properties if we use the array storage model
  // left child of n is located as 2n + 1
  // right child of n is located at 2n + 2
  // parent of n is located at Math.floo( (n-1) / 2)

  constructor(){
    this.values = []
  }

  // Pseudo:
  // 1. We add the new value to the bottom of the heap (end of the array)
  // 2. We "bubble" the value up the heap.
  //  - Bubbling is done by comparing new value to its parent.
  //  - If new value > parent value swap them.

  insert(value){
    this.values.push(value)
    if ( this.values.length === 1) return this.values

    let valueIndex = this.values.length - 1
    let parentIndex = Math.floor( (valueIndex - 1) / 2 )

    const swap = (arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }

    while ( value > this.values[parentIndex] && valueIndex != 0 ){
      swap(this.values, valueIndex, parentIndex)
      valueIndex = parentIndex
      parentIndex = Math.floor( (valueIndex - 1) / 2 )
    }

    return this.values
  }

  // Pseudo:
  // - Save to variable the first value from heap (in Max Heap)
  // - swap the most recently added value to the heap with (this.values[0] & this.values[this.values.length - 1])
  // - Re-adjust the heap (down-heap) aka (bubble-down, percolate-down, sink-down, sift-down, trickle-down, etc)
  //    - This basically puts a value at the root that is - most likely - wrong, and we have it sink down
  //      through the heap until it finds its correct spot
  //    - Compare current value with its children. If it is less than a child swap them.
  //    - If it is less than both children, swap with larger child

  extractMax(){
    if (this.values.length <= 1) return this.values.pop()

    const swap = (arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }

    const sinkDown = () => {
      let current = 0
      const value = this.values[0]
      const length = this.values.length

      while(true){
        let leftChildIdx = 2 * current + 1
        let rightChildIdx = 2 * current + 2
        let swapIdx = null

        // Check if left child exists, then if its value should be swapped with current.
        if (leftChildIdx < length && value < this.values[leftChildIdx]) {
          swapIdx = leftChildIdx
        }

        //Check if right child exists.
        // If it does, and either:
        //  - A swap was not previously declared, but rightChild > value
        //  or
        //  - A swap was declared, but rightChild value > leftChild value
        // update the swap index
        if (
            rightChildIdx < length && (
            (swapIdx === null && value < this.values[rightChildIdx]) ||
            (swapIdx !== null && this.values[rightChildIdx] > this.values[leftChildIdx])
          ))  {
            swapIdx = rightChildIdx
        } 
        
        // If we did not identify a need to swap, the element is in its correct place, so stop 
        if (swapIdx === null) break
        // Swap the parent/child. Update current index to be the index of the child that was swapped
        swap( this.values, current, swapIdx)
        current = swapIdx
      }
    }

    const lastIndex = this.values.length - 1
    swap( this.values, 0, lastIndex)
    const max = this.values.pop()
    sinkDown()


    return max
  }

}