class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
    this.next = null
  }
}

class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(node){
    if (this.size === 0){
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.size
  }

  dequeue(){
    if (this.size === 0) return
    if (this.size === 1) this.last = null
    const popValue = this.first
    this.first = this.first.next
    --this.size
    return popValue
  }
}

class Tree {
  constructor(){
      this.root = null
  }

  bfs(){
    const queue = new Queue
    queue.enqueue(this.root)
    const visited = []

    while (queue.size > 0){
        const current = queue.dequeue()
        visited.push(current)
        if (current.left) queue.enqueue(current.left)
        if (current.right) queue.enqueue(current.right)
    }
    return visited
  }

}


const q = new Queue()
const tree = new Tree()
tree.root = new Node(10)
tree.root.right = new Node(80)
tree.root.right.left = new Node(31)
tree.root.right.right = new Node(15)

tree.root.left = new Node(8)
tree.root.left.right = new Node(12)
tree.root.left.left = new Node(119)