class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
    this.next = null
  }
}

class Tree {
  constructor(){
      this.root = null
  }

  dfsPreOrder(){
    const visited = []
    const search = node => {
      visited.push(node)
      if (node.left) search(node.left)
      if (node.right) search(node.right)
    }
    
    search(this.root)
    return visited
  }

  dfsPostOrder(){
    const visited = []

    const search = node => {
      if (node.left) search(node.left)
      if (node.right) search(node.right)
      visited.push(node)
    }

    search(this.root)
    return visited
  }

}


const tree = new Tree()
tree.root = new Node(10)
tree.root.right = new Node(80)
tree.root.right.left = new Node(31)
tree.root.right.right = new Node(15)

tree.root.left = new Node(8)
tree.root.left.right = new Node(12)
tree.root.left.left = new Node(119)