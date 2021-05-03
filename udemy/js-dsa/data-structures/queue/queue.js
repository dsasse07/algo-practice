class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  
  // This will mirror a push & shift combination to maintain a O(1) complexity. If we tried to remove from the end of the queue, it would be O(n) to scan through the quque to find second to last value

  enqueue(value){
    const newNode = new Node(value)
    if (this.size === 0){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this.size
  }

  dequeue(){
    if (this.size === 0) return null
    if (this.size === 1) this.last = null
    const node = this.first
    this.first = this.first.next
    this.size--
    return node.value
  }
}