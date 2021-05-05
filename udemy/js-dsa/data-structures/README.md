## DATA STRUCTURES
* [Singly Linked Lists](#singly-linked-lists)
* [Doubly Linked Lists](#Doubly-linked-lists)
* [Stacks](#stacks)
* [Queue](#queue)
* [Trees](#trees)
  * [Binary Search Trees](#binary-search-trees)
  * [Breadth First Search](#breadth-first-search)
  * [Depth First Search](#depth-first-search)
* [Binary Heaps](#binary-heaps)
  * [Priority Queue](#priority-queue)
* [Hash Tables](#hash-tables)

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

[Top](#data-structures)

#### Doubly Linked Lists
  *  Same structure as a Singly Linked List, with many same propoerties
  * Primary difference is that nodes in a DLL have an pointer tot he previous node, so the list can be traversed in either direction

  __PROS__
  * Reverse pointer makes `push`/`pop` O(1), which was not the case for SLL.
  __CONS__
  * DLL takes more space to store the second pointer

  __USE EXAMPLE__
  * Browser history is stored as a DL: (back/forward buttons)

[Top](#data-structures)

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

[Top](#data-structures)

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

[Top](#data-structures)

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

[Top](#data-structures)

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

[Top](#data-structures)

### TREE TRAVERSAL for Binary Trees --- NOT -- Binary __SEARCH__ trees

#### Breadth First Search
* Searches across each level of the tree before going deeper
* __STEPS__
  * Create a queue, or use and array and a separate variable to store the nodes visited
  * Place the root node into the queue
  * While items in queue:
    * dequeue a node from queue and push it into the the storage variable
    * If the stored node has a `left` add `left` to the queue
    * if the stored node had a `right` add `right` to the queue

[Top](#data-structures)

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
  
  * When to use each?
    * InOrder returns all of the value in order, so it creates a sorted array.
    * PreOrder returns array that is organized in a way that you could recreate the tree through iteration since you know where the root and its children will always be.

[Top](#data-structures)

#### DFS vs. BFS
  * Space Complexity:
    * BFS can take up more memory than DFS if it is a very wide tree since it has the queue creation.
  * Time Complexity:
    * Both search with O(log n) on average

### Binary Heaps
  * Type of Tree structure
    * Time Complexity:
      * Insert & Removal = O(log n) __THIS IS WHY WE WOULD USE THEM__
      * Search = O(n) __Would be better to use a BST here__
    * Space Complexity:
      * O(n)

  * Two Types:
    * __MaxBinaryHeap__:
      * The parent nodes are ALWAYS larger than both child nodes. The side the child is on does not matter.
    * __MinBinaryHeap__:
      * The parent nodes are ALWAYS smaller than both child nodes.  The side the child is on does not matter.
  
  * There is no rule about the relationship that one sibling has to the other.
  * A heap is always constructed to be as compact as possible, and the left child is inserted before the right.
  * __VERY__ commonly used data structure to help created a priority based Queue
  * Also commonly used in graph traversal algorithms.

    
    * Ex:
    ```
    -               Max Binary Heap                     Binary Search Tree
    -                    41                                    33
    -            39              33                    18              41
    -        18      27      12                    12      27      39
    -
    -             
    -             Max Binary Heap
    -                   100
    -            19             36
    -        17      3       25     1
    -     2     7
    -
    ```

  * To store a heap, you can use an array. The mathematical relationship of the array index to the heap position is given by the formula:
    * For any index of an array `n`
      * The left child of `n` is located at index `2n+1`
      * The right child of `n` is located at index `2n+2`
      * The parent node of `n` is located at:
        * if `n` is odd, `(n-1) / 2`
        * if `n` is even, `(n-2) / 2`
        * Alternatively, we can use `Math.floor( (n-1) / 2)` for both even & odd `n`
      * Ex:
  ```
    -             Max Binary Heap
    -                   100
    -            19             36
    -        17      3       25     1
    -     2     7       
    -
    -
    -
    -     [ 100, 19, 36, 17, 3, 25, 1, 2, 7 ]
    - n:     0    1   2   3  4   5  6  7  8
    -
  ```
    * For node 100, n = 0.
      * left child is n = 1, 19
      * right child is n = 2, 36
    
    * for node 17, n = 3
      * left child is n = 7, 2    (2n + 1)
      * right child is n = 8, 7   (2n + 2)

[Top](#data-structures)

#### Priority Queue

* A Data Structure where each element has a priority.
* Elements with higher priorities are served before those with lower priorities.
* Heaps are great for this since it maintains a compact structure where we can always extract from the root
* Functions the same as a Heap, however instead of just comparing a value, use a `Node`
  * `Node` has a value property, but it also has a `priority` property.
  * Compare the `priority` property of the nodes to create the rankings instead of the value

[Top](#data-structures)

### Hash Tables
  * Used to store _key-value_ pairs
    * Most languages have a built in data structure for a hash table / hash map 
      * Python has __Dictionaries__
      * JS has __Objects__ and __Maps__
      * 
    * 


[Top](#data-structures)

