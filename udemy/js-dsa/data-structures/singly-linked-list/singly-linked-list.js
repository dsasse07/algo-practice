class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail =  null
    this.length = 0
  }

  /* PUSH
    Adds value to end of list.
    - Create a new note with the param
    - Check if there are any vals in the list
      - If tail exists, point it to the new node
      - if it doesnt exist, there are no items, set new node as hea
    - set new node as tail
    - increment length
    - return list instance
  */
  push(value){
    let newNode = new Node(value)
    this.tail ? this.tail.next = newNode : this.head = newNode
    this.tail = newNode
    this.length++
    return this
  }

  /* POP
    Remove and return value from the end of the list
      - If no items, returns undefined.
      - Store the tail for return later.
      - Need to find what Node will be the new tail, must start at head.
      - iterate through list until we reach second to last item, that should be new tail
      - set this new value as the tail, remove its previous pointer to old tail
      - decrement the length

      ** Make sure that the list still has a length, if not, nullify head/tail

      return value
  */

  pop(){
    if (this.length === 0) return
    let popValue = this.tail
    let newTail = this.head

    for( let i = 1; i < this.length-1; i++){
      newTail = newTail.next
    }

    this.tail = newTail
    newTail.next = null
    this.length--
    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return popValue
  }

  /* SHIFT
    - If no nodes, return
    - store current head for return later
    - set the new head to be next node of old head
    - decrement length
    - If there are no nodes left, set tail to null
    - return old head
  */
  shift(){
    if (this.length === 0) return
    let shiftValue = this.head
    this.head = shiftValue.next
    this.length--
    if (this.length === 0) this.tail = null
    return shiftValue
  }

  /* UNSHIFT
    - Create a new node.
    - Point new node at current head.
    - set new node as head
    - increment length
    - if list was empty, set the new node as tail too
    - return list
  */
  unshift(value){
    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    if(this.length === 0) this.tail = newNode
    this.length++
    return this
  }

  /* Get
    - retrieve a Node from the list by its position
  */
  get(pos){
    if (pos > this.length || pos < 0 ) return
    let node = this.head
    for ( let i = 0; i < pos; i++){
      node = node.next
    }
    return node
  }

  /* SET
    Updates the value of a Node at a position
    - Get the node at that position
    - If it exists, reassign value and return true
    - If it does not exist, return false
  */
  set(pos, value){
    let node = this.get(pos)
    if (node){
      node.value = value
      return true
    }
    return false
  }

  /* INSERT
    - If position given no within range of 0 < x < list.length return false
    - If position is at beginning, same as unshift
    - if position is at end, same as push
      - coerce these tow functions to return boolen
    - Anywhere else in list, create new node
    - get prev node and save,a long with prev.next
    - change prev node's pointer to new node
    - change new nodes pointer to saved next node
    - increment length
    return true
  */

  insert(pos, value){
    if (pos < 0 || pos > this.length) return false
    if (pos === 0) return !!this.unshift(value)
    if (pos === this.length) return !!this.push(value)

    let newNode = new Node(value)
    let prevNode = this.get(pos-1)
    let nextNode = prevNode.next 
    prevNode.next = newNode
    newNode.next = nextNode
    this.length++
    return true
  }

  /*  REMOVE
    - If index invalid, return
    - if removing first item, same as shift
    - if removing last item, same as pop
    - if in middle:
      - get node prior to target
      - save previous node, target node, and next nodes
      - point prev node to next node
      - decrement length
      - return target
  */
  remove(pos){
    if (pos < 0 || pos > this.length-1) return
    if (pos === 0) return this.shift()
    if (pos === this.length-1) return this.pop()
    
    let prevNode = this.get(pos-1)
    let thisNode = prevNode.next
    let nextNode = thisNode.next
    prevNode.next = nextNode
    this.length--
    return thisNode
  }

  /* REVERSE
    - Setting this as null ensure new tail automatically updates it pointer
    - We need to store the current head to use in our loop
    - Then, swap the head/tail values using the CURRENT variable as a reference.

    - Create two new vars, on for the previous node from CURRENT, one for the next
    - At the start, the PREV node will be null (since that will now be the tail)

    - Iterate through the list once for each node
      - in the loop:
        - save/update the NEXT node to be the next node from current.
        - Point the CURRENT node at PREV instead of next.
        - Move all variables up
          - PREV becomes CURRENT
          - NEXT becomes current

    - return list at the end
  */
  reverse(){
    if (this.length <= 1) return
    let current = this.head
    this.head = this.tail
    this.tail = current

    let prev = null 
    let next = current.next
    
    for( let i = 0; i < this.length; i++){
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this
  }

}

let list = new SinglyLinkedList
list.push("hi")
list.push("there")
list.push("james")
list.push("!!!!")
console.log(list)

// console.log("POPPING!!!!!")
// console.log(list.pop())
// console.log(list)
// console.log("POPPING!!!!!")
// console.log(list.pop())
// console.log(list)
// console.log("POPPING!!!!!")
// console.log(list.pop())
// console.log(list)
// console.log("POPPING!!!!!")
// console.log(list.pop())
// console.log(list)
// console.log("POPPING!!!!!")
// console.log(list.pop())
// console.log(list)

// console.log("SHIFTING!")
// console.log(list.shift())
// console.log(list)
// console.log("SHIFTING!")
// console.log(list.shift())
// console.log(list)
// console.log("SHIFTING!")
// console.log(list.shift())
// console.log(list)
// console.log("SHIFTING!")
// console.log(list.shift())
// console.log(list)


// console.log("UNSHIFTING!")
// console.log( list.unshift("BAM"))

// console.log(list.insert(1,"banana"))
// console.log(list)
// console.log(list.remove(1))
console.log(list.reverse())