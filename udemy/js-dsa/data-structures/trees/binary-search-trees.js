class Node{
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  insert(value){
    const newNode = new Node (value)
    let parent = this.root

    if (!parent) {
      this.root = newNode
      return this
    } 

    while (parent){
      if (newNode.value === parent.value) return false
      if (newNode.value > parent.value){
        if (!parent.right){
          parent.right = newNode
          return this
        }
          parent = parent.right
      } else {
        if (!parent.left){
          parent.left = newNode
          return this
        }
        parent = parent.left
      }
    }
  }

  find(value){
    let parent = this.root
    if (!parent) return undefined

    while(parent){
      if (value === parent.value){
        return parent
      } else if (value > parent.value){
        if (!parent.right) return undefined
        parent = parent.right
      } else {
        if (!parent.left) return undefined
        parent = parent.left
      }
    }
  }

}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// tree.root.left.left = new Node(5)
