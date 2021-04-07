require 'pry'

n1 = 9
t1 = [10, 20, 20, 10, 10, 30, 50, 10, 20]

n2 = 10
t2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

def sock_sort(n, array)
  collection = array.each_with_object({}) do |color, collection|
    collection[color] ? collection[color] += 1 : collection[color] = 1
  end
  
  collection.sum{ |color, count| count / 2}
end

binding.pry

false
