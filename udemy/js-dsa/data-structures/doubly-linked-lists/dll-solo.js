class Node {
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value){
    let newNode = new Node(value)
    if (this.length === 0){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return list
  }

  pop(){
    if (this.length === 0) return
    const node = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else{
      const newTail = node.prev
      newTail.next = null
      node.prev = null
    }
    this.length --
    return node
  }

  shift(){
    const node = this.head
    if (!node) return
    if (this.length === 1){
      this.head = null
      this.tail = null
    } else {
      const newHead = node.next
      newHead.prev = null
      node.next = null
      this.head = newHead
    }
    this.length --
    return node
  }

  unshift(value){
    const node = new Node(value)
    if (this.length === 0){
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.length ++
    return list
  }

  get(index){
    if (index < 0 || index >= this.length) return
    let current
    if (index < Math.floor(this.length / 2 ) ){
      current = this.head
      for( let i = 0; i < index; i++){
        current = current.next
      }
    } else {
      current = this.tail
      for( let i = this.length - 1; i > index; i--){
        current = current.prev
      }
    }
    return current
  }

  set(index, value){
    const node = this.get(index)
    if (!node) return false
    node.value = value
    return true
  }

  insert(index, value){
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    // Identify the new node, and the surrounding ones.
    const prevNode = this.get(index-1)
    if (!prevNode) return false

    const nextNode = prevNode.next
    const newNode = new Node (value)
    // Set links with previous node.
    prevNode.next = newNode
    newNode.prev = prevNode
    // Set links with next node
    nextNode.prev = newNode
    newNode.next = nextNode

    this.length ++
    return true
  }

  remove(index){
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    
    const node = this.get(index)
    if (!node) return

    const prevNode = node.prev
    const nextNode = node.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    this.length --
    return node
  }

  reverse(){
    if (this.length <= 1) return this

    let current = this.head
    this.head = this.tail
    this.tail = current

    let prev = null
    let temp

    while(current){
      next = current.next
      temp = next
      current.next = prev
      current.prev = temp

      prev = current
      current = next
    }

    return this
  }




  print(){
    const vals = []
    let current = this.head
    while(current){
      vals.push(current.value)
      current = current.next
    }
    return vals
  }
}

list = new DoublyLinkedList
list.push("hi")
list.push("there")
list.push('banana')
console.log(`list`, list)
console.log(`list vals`, list.print())