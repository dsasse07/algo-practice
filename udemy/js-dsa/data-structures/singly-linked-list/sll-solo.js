class Node {
  constructor(value){
      this.value = value
      this.next = null
  }
}

class SingleLinkedList{
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
      } else if (this.length === 1){
          this.tail = newNode
          this.head.next = newNode
      } else {
          this.tail.next = newNode
          this.tail = newNode
      }
      this.length++
      return this
  }

  pop(){
      if (this.length == 0) return
      let popValue = this.tail
      let current = this.head
      
      for ( let i = 1; i < this.length - 1; i++){
          current = current.next
          console.log(current)
      }
      current.next = null
      this.tail = current
      this.length --

      return popValue
  }

  shift(){
      if (this.length === 0) return
      let shiftValue = this.head
      this.head = shiftValue.next
      this.length--
      if (this.length === 0) this.tail = null
      return shiftValue
  }

  unshift(value){
      let newNode = new Node(value)
      newNode.next = this.head
      this.head = newNode
      this.length++
      if (this.length === 1) this.tail = newNode
      return this
  }
  get(index){
      if ( index < 0 || index > this.length - 1) return
      let current = this.head
      for ( let i = 0; i < index; i++){
          current = current.next
      }
      return current
  }
  set(index, value){
      let node = this.get(index)
      if (node){
          node.value = value
          return true
      }
      return false
  }
  insert(index, value){
      if (index === 0) return !!this.unshift(value)
      if (index === this.length) return !!this.push(value)

      let prevNode = this.get(index - 1)
      if (prevNode){
          let newNode = new Node(value)
          let nextNode = prevNode.next
          prevNode.next = newNode
          newNode.next = nextNode
          this.length++
          return true
      }
      return false
  }
  remove(index){
      if (index === 0) return this.shift()
      if (index === this.length - 1) return this.pop()
      let prevNode = this.get(index-1)
      if (prevNode){
         let node = prevNode.next
         let nextNode = node.next
         prevNode.next = nextNode
         this.length -- 
         return node
      }
      return
  }
    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current
        
        let prevNode = null
        let nextNode = current.next

        while(current){
          current.next = prevNode
          prevNode = current
          current = nextNode
          nextNode = current?.next
        }

        return this
    }
}


list = new SingleLinkedList()
list.push("hi")
list.push("there")
list.push("James")
console.log(`list`, list)
console.log(list.reverse())
