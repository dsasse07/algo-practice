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