## DATA STRUCTURES

### Lists

#### Singly Linked List
* A List structure similar to an array
* It is not indexed as an array is
* It is composed of a series of nodes, that each point to
  the next node in the sequence
  * The DS has a __head__, __tail__, and __length__ property
  * Nodes have a __value__, and a __pointer__ which points to the next node in the sequence

  __PROS__
  * able to easily shift/unshift/insert/remove without the need to reindex.
  * Good alternative to arrays when random access is less important than insertion and removal

  __CONS__
  * Random Access is not permitted
  * Can only quickly access the head or tail

  __TIME__
  * Insertion: push/unshift O(1); insert = O(n) because we have to find the position first
  * Removal: pop/shift = O(1); remove = O(n) because we have to find it first
  * Search: O(n)
  * Read/Access: O(n)

#### Doubly Linked Lists
  *  Same structure as a Singly Linked List, with many same propoerties
  * Primary difference is that nodes in a DLL have an pointer tot he previous node, so the list can be traversed in either direction

  __PROS__
  * Reverse pointer makes `push`/`pop` O(1), which was not the case for SLL.
  __CONS__
  * DLL takes more space to store the second pointer

  __USE EXAMPLE__
  * Browser history is stored as a DL: (back/forward buttons)


#### STACKS

  *  __LIFO__ data structure
    * Last item (most recent) into the stack is the First item to be removed from the stack
  
  * More than one way to implement a stack
    * More like a concept that a structure
    * Easiest way is to use an array in JS and just use `push` / `pop` __OR__ `shift` / `unshift`
      * `shift` & `unshift` has worse Time Complexity bc you would need to reindex each item with each action.
    * For really large data sets, and to optimize, use a __linked list__ since we only care about __LIFO__, not random access & indexes.
    * Some programming languages have a predefined Stack structure.
  
  * Uses:
    * Managing Function Invocation
    * Undo/Redo operators
    * History object of Routing
    * Graph/Tree Traversal

#### QUEUE

* __FIFO__ data structure. First item in is the first item out. Values stand in line, and will be removed one after another
* Two operators, add items in, take items out.
  * `enqueue` & `dequeue`
  * With array
    * We would need to do either `unshift` & `pop` or `push` & `shift`
    * With either combination, you would always need to re index the array, so it is not optimal
* Can be done using an array, or with a custom class
  * custom Queue class is more light weight, no storage of indexes

* Background tasks
* Downloads
* Uploads
* Waiting to join a game queue
* Print queue

### TREES

* A tree is a data structure that consists of nodes in a __parent/child__ relationship. 
* Non-linear relationship
* In a __TREE__ a node cannot reference another sibling node or a parent node. 
  * Pointers begin at the root and search downwards
* Only one root node is permissible.
* __TERMS__
  * __Root__ : The top node in a tree
  * __Child__ : a node directly connected to another node moving away from the root.
  * __Parent__ : The opposite of a parent
  * __Siblings__ A group of nodes with the same parent 
  * __Leaf__ : A node with no children
  * __Edge__ : The actual connection between one node and nother node

__Uses__
* HTML & DOM
* Network Routing
* Abstract Syntax Tree
* AI (Decision Making Trees & Classification Systems)
* Folders in OS
* JSON

#### Binary Search Trees
* Special Type of Binary Tree, which is a special type of Tree
* Excels at searching
* Requires sorted data
* In a __Binary Search Tree__ each node can hat __AT MOST__ two children

* In a BST, every node whose value is __less than__ the current node, is located as the left child. Every Node that is __greater than__ the current node is located to the right.

* Time Complexity
  * Insertion - Best O(log n)
  * Search - Best O(log n)
  * This is not guaranteed because it implies that half of the values will be discarded at each comparison. If the tree is heavily one sided, it functions more like a linked list O(n)

### TREE TRAVERSAL

#### Breadth First Search
* Searches across each level of the tree before going deeper
* __STEPS__
  * Create a queue, or use and array and a separate variable to store the nodes visited
  * Place the root node into the queue
  * While items in queue:
    * dequeue a node from queue and push it into the the storage variable
    * If the stored node has a `left` add `left` to the queue
    * if the stored node had a `right` add `right` to the queue

#### Depth First Search
* PreOrder
  * Recursive
    * Push current node to visited array
    * If it has a left value, recursive call on that node
    * If it has a right value, recursive call on that node
  * Output will be in order of:
    * root, root.left, root.left, root.left.right, root.right, etc.
* PostOrder
  * Output:
    * Parents do not get stored as _visited_ until both of their children have been visited
    * Order:
      * root.left.left, root.left.right, root.left, root.right.left, root.right.right, root.right, root
* InOrder
  * Output:
    * Visit entire left side, starting as the bottom
    * THEN visit the entire right side from top -> down
  * Order:
    * root.left.left, root.left, root.left.right, root, root.right.left, root.right, root.right.right