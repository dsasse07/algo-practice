const a1 = [-4,-1,0,3,10]
const a2 = [-7,-3,2,3,11]
const a3 = [-5,-3,-2,-1]
const a4 = [-10000,-9999,-7,-5,0,0,10000]

function solution(arr){
  let [left, right] = [0, arr.length -1]
  result = new Array(arr.length)

  while (left <= right){
    leftVal = arr[left] ** 2
    rightVal = arr[right] ** 2
    if (leftVal > rightVal) {
      result[right - left] = leftVal
      left ++
    } else {
      result[right - left] = rightVal
      right--
    }
  }
  return result
}

console.log(solution(a1))
console.log(solution(a2))
console.log(solution(a3))
console.log(solution(a4))

/*

[ -4 , -1 , 0 , 3 , 10 ]
  i                  j
[ 3 , -1 , 0 , 16 , 100 ]
  i             j

[ 0 , -1 , 9 , 16 , 100 ]
  i        j

[ 0 , 4 , 9 , 16 , 100 ]
  i   j
*/