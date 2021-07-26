/**
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, 
and the sign represents its direction (positive meaning right, 
negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. 

If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. 
Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Example 4:
Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.

Constraints:
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
 */

const asteroidCollision = (asteroids) => {
  // Keep track of "surviving" asteroids in order
  const stack = []

  for (let asteroid of asteroids) {
    // Since we are starting on the left of the array
    // If the asteroid is moving to the right, immediately add to stack
    if (asteroid > 0) {
      stack.push(asteroid)
      // If the asteroid is moving left and the stack is empty,
      // or if the "surviving" asteroids are also all moving left
      // add it to the stack
    } else if (
      asteroid < 0 &&
      (stack.length === 0 || stack[stack.length - 1] < 0)
    ) {
      stack.push(asteroid)
      // To reach this point, the asteroid must be moving left so...
      // If the most recent survivor is moving to the right
    } else if (stack[stack.length - 1] > 0) {
      // Remove that asteroid from the stack, and collide them
      let movingRight = stack.pop()
      // Keep colliding subsequent asteroids
      // If the one moving left keeps surviving
      while (movingRight) {
        // If the moving left asteroid is bigger than the one moving right
        if (Math.abs(asteroid) > movingRight) {
          // The one moving left survives and continues to the
          // next asteroid. Check if the next one is moving right
          if (stack[stack.length - 1] > 0) {
            // If the next asteroid is moving right, remove it
            // from the stack and repeat
            movingRight = stack.pop()
          } else {
            // If the next asteroid is also moving left
            // they will never collide, ass lefty to the stack
            // and end the loop
            stack.push(asteroid)
            break
          }
          // If the two asteroids are equal in size, both are destroyed
          // add nothing to the stack and end the loop
        } else if (Math.abs(asteroid) === movingRight) {
          break
          // If the asteroid moving to the right wins, put it back into the stack
        } else {
          stack.push(movingRight)
          break
        }
      }
    }
  }
  // Stack should contain only the surviving asteroids
  return stack
}
