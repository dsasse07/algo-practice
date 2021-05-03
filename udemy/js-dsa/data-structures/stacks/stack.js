class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  // Push & Pop will function like shift & unshift in order to maintain a O(1) runtime. Using the SLL pointer structure, push and pop normall have a O(n) complexity since we need to iterate through the list to find the second-to-last node.

  push(value){
    const node = new Node(value)
    if (this.size === 0){
      this.first = node
      this.last = node
    } else {
      const oldFirst = this.first
      this.first = node
      node.next = oldFirst
    }
    this.size ++
    return this.size
  }

  pop(){
    if (this.size === 0) return null
    if (this.size === 1) this.last = null
    const popValue = this.first
    this.first = popValue.next
    this.size--
    return popValue.value  }
}
