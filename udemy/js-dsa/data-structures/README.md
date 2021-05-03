## DATA STRUCTURES

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