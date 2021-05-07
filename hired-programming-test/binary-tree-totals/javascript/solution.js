
const solution = (arr) => {
  // Type your solution here
  // left child = 2n + 1
  // right child = 2n + 2n
  if (arr.length <= 1) return ""
  const leftQueue = [1]
  const rightQueue = [2]
  let leftTotal = 0
  let rightTotal = 0
  
  while (leftQueue.length > 0){
      const current = leftQueue.shift()
      leftTotal += arr[current]
      const leftChild = 2 * current + 1 
      const rightChild = 2 * current + 2
      if (arr[leftChild] && arr[leftChild] >= 0){
          leftQueue.push(leftChild)
      }
      if (arr[rightChild] && arr[rightChild] >= 0){
          leftQueue.push(rightChild)
      }
  }
  
  while (rightQueue.length > 0){
      const current = rightQueue.shift()
      rightTotal += arr[current]
      const leftChild = 2 * current + 1 
      const rightChild = 2 * current + 2
      if (arr[leftChild] && leftChild >= 0){
          rightQueue.push(leftChild)
      }
      if (arr[rightChild] && arr[rightChild] >= 0){
          rightQueue.push(rightChild)
      }
  }
  if (leftTotal === rightTotal){
      return ""
  } else if (leftTotal > rightTotal){
      return "Left"
  } else {
      return "Right"
  }
};



console.log(solution([3, 6, 2, 9, -1, 10]))
module.exports = { solution }