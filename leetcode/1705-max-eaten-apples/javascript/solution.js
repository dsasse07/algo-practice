class AppleQueue {
  constructor() {
    this.queue = []
  }
  push(node) {
    this.queue.push(node)
    this._bubbleUp()
    return this.queue
  }
  _bubbleUp() {
    let cIdx = this.queue.length - 1
    let pIdx = Math.floor((cIdx - 1) / 2)

    while (
      pIdx >= 0 &&
      this.queue[pIdx].expiration >= this.queue[cIdx].expiration
    ) {
      this._swap(cIdx, pIdx)
      cIdx = pIdx
      pIdx = Math.floor((cIdx - 1) / 2)
    }
  }
  _swap(i1, i2) {
    ;[this.queue[i1], this.queue[i2]] = [this.queue[i2], this.queue[i1]]
  }
  dequeue() {
    if (this.queue.length <= 1) return this.queue.pop()
    let lastIndex = this.queue.length - 1
    this._swap(0, lastIndex)
    const popValue = this.queue.pop()
    this._trickleDown()
    return popValue
  }
  _trickleDown() {
    let cIdx = 0

    while (true) {
      let lIdx = 2 * cIdx + 1
      let rIdx = 2 * cIdx + 2
      let swapIdx = null
      if (
        lIdx < this.queue.length &&
        this.queue[cIdx].expiration > this.queue[lIdx].expiration
      ) {
        swapIdx = lIdx
      }
      if (
        rIdx < this.queue.length &&
        ((swapIdx === null &&
          this.queue[cIdx].expiration > this.queue[rIdx].expiration) ||
          (swapIdx !== null &&
            this.queue[rIdx].expiration < this.queue[lIdx].expiration))
      ) {
        swapIdx = rIdx
      }
      if (swapIdx === null) break
      this._swap(cIdx, swapIdx)
      cIdx = swapIdx
    }
  }
}

// const countEatenApples = (apples, days) => {
//   let dayNumber = 1
//   let appleCount = 0
//   const applesQ = new AppleQueue()
//   let i = 0

//   while (true) {
//     if (i < apples.length) {
//       for (let j = 0; j < apples[i]; j++) {
//         const newApple = dayNumber + days[i] - 1
//         applesQ.push(newApple)
//       }
//     }
//     let todaysApple = applesQ.dequeue()
//     while (todaysApple && todaysApple < dayNumber) {
//       todaysApple = applesQ.dequeue()
//     }
//     if (todaysApple) appleCount++
//     dayNumber++
//     i++
//     if (i >= apples.length && applesQ.queue.length <= 0) break
//   }

//   return appleCount
// }

const countEatenApples = (apples, days) => {
  let appleCount = 0
  let i = 0
  const heap = new AppleQueue()
  while (i < apples.length || heap.queue.length > 0) {
    if (i < apples.length && apples[i] > 0) {
      heap.push({ expiration: i + days[i], count: apples[i] })
    }
    while (
      heap.queue.length > 0 &&
      (heap.queue[0].expiration <= i || heap.queue[0].count <= 0)
    ) {
      heap.dequeue()
    }
    if (heap.queue.length > 0) {
      heap.queue[0].count -= 1
      appleCount += 1
    }
    i += 1
    // console.log(heap)
  }
  return appleCount
}

console.log(countEatenApples([2, 1, 1, 4, 5], [10, 10, 6, 4, 2]))
console.log(countEatenApples([3, 0, 0, 0, 2], [3, 0, 0, 0, 2]))
