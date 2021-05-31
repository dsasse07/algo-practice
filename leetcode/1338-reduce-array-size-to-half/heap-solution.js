
const solution = array => {
  const numMap = {}
  const length = array.length
  const maxLength = Math.floor(length / 2)
  
  for (let i = 0; i < array.length; i++){
      numMap[array[i]] = numMap[array[i]] + 1 || 1
  }
  
  const swap = (arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
  }
  const heap = []
  const bubbleUp = () => {
    let currentIndex = heap.length - 1
    let parentIndex
    while (currentIndex !== 0){
      parentIndex = Math.floor( (currentIndex - 1) / 2 )
      if (heap[parentIndex] <= heap[currentIndex]){
            swap(heap, currentIndex, parentIndex)
            currentIndex = parentIndex
        } else {
            break
        }
    }
  }
  const trickle = () => {
    let currentIndex = 0
    let leftChildIndex, rightChildIndex
    let swapIdx = null
    while (true){
      leftChildIndex = 2 * currentIndex + 1
      rightChildIndex = 2 * currentIndex + 2
      if ( heap[currentIndex] <= heap[leftChildIndex]){
        swapIdx = leftChildIndex
      }
      if ( 
            (!swapIdx && heap[currentIndex] <= heap[rightChildIndex]) ||
            (swapIdx && heap[rightChildIndex] > heap[leftChildIndex])
          ){
            swapIdx = rightChildIndex
          }
      if (swapIdx === null) break
      swap(heap, currentIndex, swapIdx)
      currentIndex = swapIdx
      swapIdx = null
    }
  }

  for( let num in numMap){
    heap.push(numMap[num])
    bubbleUp()
  }

  let currentTotal = 0
  let count = 0

  while (currentTotal < maxLength){
    swap(heap, 0, heap.length - 1)
    currentTotal += heap.pop()
    trickle()
    count ++
  }

  return count
}
console.log(solution([3,3,3,3,5,5,5,2,2,7])) // 2
console.log(solution([7,7,7,7,7,7])) // 1
console.log(solution([1,2,3,4,5,6,7,8,9,10])) // 1