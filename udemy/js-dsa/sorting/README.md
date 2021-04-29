[Sorting Animations](https://www.toptal.com/developers/sorting-algorithms)

[Animations](https://visualgo.net/en)


## Quadratic Sorting O(n^2)

#### Bubble Sort
  * Max value "bubbles" to the right through continuous swaps.
  * After each iteration the largest unsorted value will be furthest to the right

#### Selection Sort O(n^2)
  * Sorts minimum values first.
  * Minimizes swap operates
  * Pseudo:
    * Iterate over entire array, find minimum value and save its index
    * When iteration ends, swap index `i` with the saved index, ensuring minimum values sorted to beginning first.

#### Insertion Sort O(n^2)
  * Good at maintaining an already sorted array by inserting new values into the array as they are added.
  * Builds a sorted sub-array at the start of the array.
  * Iterate over unsorted values
  * Pseudo:
    * Save current value for reference.
    * Iterate through sub-array from right to left.
    * If sub-array value is larger than stored value then copy the sub-array value into current position.
    * When we reach a point that the sub-array value is smaller, OR the end of the sub-array (-1), insert the stored value at the position next to the one being checked (`subIndex + 1`) 

## More Complex Algorithms

#### Merge Sort
