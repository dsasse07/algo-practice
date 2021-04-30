[Sorting Animations](https://www.toptal.com/developers/sorting-algorithms)

[Animations](https://visualgo.net/en)


## Quadratic Sorting O(n^2)

* These sort in place, Space complexity is O(1)

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
  * Always Time: O(n log n) Space: O(n)
    * Split function is O(log n)
    * Merge is O(n)
  * Does not get faster with items being sorted already
  * Everything must get split and then recombined.
  * Increases auxillary space bc it creates a new array whose size depends on size of input array, so O(n) space

#### Quicksort
  * Best case: O(n log n) ; Space O(1)
  * Worst case: O(n^2) 
    * This would occur if the max or min value was selected each time, causing arrays to not be evenly split

## NON-COMPARISON SORT

#### Radix Sort
  * Time: O(nk)   n = length of array; k = max # digits
  * Special sorting algorithm that only works on a list of numbers (binary)
  * Could be used on other types of data if it is coverted to binary
  * Never makes comparisons between values
  * exploits te fact that information about a number is encoded in data about the number
    * a 4 digit number is always larger than a 2 digit number

  * Create 3 helper methods
    * `getDigit`, `countDigits`, `maxDigits`
    * Create an outer loop than runs maxDigit times
    * iterate over arr in the inner loop, pushing vals into buckets at the index that matches the current digit being checked
    * After inner loop, reassign array to the buckets concatenated 
      * `arr = [].concat(...bucket)`
      * Alterative we could loop over bucket and concat one by one.