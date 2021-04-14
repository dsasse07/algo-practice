require 'pry'
class Solution
  def solve( array )
    quicksort( array, 0, array.length - 1 )
  end

  private

  def quicksort( array, left_index, right_index )
    return if left_index >= right_index
    pivot_index = ( left_index + right_index ) / 2
    pivot = array[ pivot_index ]
    split_index = swap_and_split( array, left_index, right_index, pivot)
    quicksort( array, left_index, split_index - 1)
    quicksort( array, split_index, right_index)

    array
  end

  def swap_and_split( array, left_index, right_index, pivot )
    while left_index <= right_index do
      left_index += 1 while array[left_index] < pivot
      right_index -= 1 while array[right_index] > pivot
      break if left_index > right_index

      array[left_index], array[right_index] = array[right_index], array[left_index]
      left_index += 1
      right_index -= 1
    end

    left_index
  end
end