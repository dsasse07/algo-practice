/**
 * Given a string s which represents an expression, 
 * evaluate this expression and return its value. 

The integer division should truncate toward zero.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "3+2*2"
Output: 7

Example 2:
Input: s = " 3/2 "
Output: 1

Example 3:
Input: s = " 3+5 / 2 "
Output: 5

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.

 */

const calculate = (s) => {
  // Add a + 0 operation to the end of the string.
  // This does not affect the total, but is neeeded since the loops
  // evaluates the previous operation when it encounters a new one.
  s += '+0'
  // s = s.match(/(\d+)|(\+)|(\-)|(\*)|(\/)/g)
  const stack = []
  let currentNum = 0
  let operator = '+'
  let temp

  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > -Infinity) {
      // move the previously discovered digit to the next placevalue
      // ex: "123" => would be read as 1, then 12, then 123
      // This continues until we read a non-digit character
      currentNum = currentNum * 10 + parseInt(s[i])
    } else if (s[i] !== ' ') {
      // Leetcode is a jerk and included spaces, lets ignore those.
      // If the character is not a digit, we will perform the PREVIOUSLY SEEN
      // operation, and store the CURRENT operation for next
      switch (true) {
        // Use a stack to keep track of the values to be added / subtracted
        // After multiplication & division takes place
        case operator === '-':
          // If we store the value to be subtracted as negative, we can just
          // sum them later
          stack.push(-currentNum)
          break
        case operator === '+':
          stack.push(currentNum)
          break
        // For multiplication & division, remove the most recent value from the stack
        // perform the operation, and then put the new value back into the stack
        case operator === '*':
          temp = stack.pop()
          stack.push(temp * currentNum)
          break
        case operator === '/':
          temp = stack.pop()
          // I'm still unsure why this had to be Math.trunc instead of Math.floor
          // but Math.floor was not passing tests consistently
          stack.push(Math.trunc(temp / currentNum))
      }
      // Store the current operation now that the last one has been completed
      operator = s[i]
      // Reset the current number back to zero
      currentNum = 0
    }
  }
  // Perform all of the addition operations to return the total
  return stack.reduce((sum, el) => (sum += el), 0)
}
