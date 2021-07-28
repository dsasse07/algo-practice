/**
You are given two jugs with capacities jug1Capacity and 
jug2Capacity liters. There is an infinite amount of water 
supply available. Determine whether it is possible to measure 
exactly targetCapacity liters using these two jugs.

If targetCapacity liters of water are measurable, 
you must have targetCapacity liters of water contained 
within one or both buckets by the end.

Operations allowed:
Fill any of the jugs with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is 
completely full, or the first jug itself is empty.

Example 1:
Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
Output: true
Explanation: The famous Die Hard example 

Example 2:
Input: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
Output: false

Example 3:
Input: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
Output: true

Constraints:
1 <= jug1Capacity, jug2Capacity, targetCapacity <= 106
 */

// Two Solutions.
// First if Breadth-first search using a Set to keep track of volume combinations that have already been checked

/*
There are six actions than can be made on any state...
1. Fill jug 1
2. Fill jug 2
3. Empty jug 1
4. Empty jug 2
5. Transfer from 1 to 2
6. Transfer from 2 to 1

From the initial state (0,0) check the result of each of those six actions for a match. If its not a match, if the resulting state has not already been seen, add to a queue as another new starting state.

Each loop remove the next state from the queue and repeat until no new states are produced (queue is empty)
*/

// Second uses Greatest Common Divisor solution
const fillJug1 = (currentJug1, jug1Capacity) => {
  if (currentJug1 === jug1Capacity) return null
  currentJug1 = jug1Capacity
  return currentJug1
}

const fillJug2 = (currentJug2, jug2Capacity) => {
  if (currentJug2 === jug2Capacity) return null
  currentJug2 = jug2Capacity
  return currentJug2
}

const emptyJug1 = (currentJug1, jug1Capacity) => {
  if (currentJug1 === 0) return null
  currentJug1 = 0
  return currentJug1
}
const emptyJug2 = (currentJug2, jug2Capacity) => {
  if (currentJug2 === 0) return null
  currentJug2 = 0
  return currentJug2
}
const add1To2 = (currentJug1, currentJug2, jug1Capacity, jug2Capacity) => {
  if (currentJug2 === jug2Capacity || currentJug1 === 0) return [null, null]
  let availableRoom = jug2Capacity - currentJug2
  if (currentJug1 <= availableRoom) {
    currentJug2 += currentJug1
    currentJug1 = 0
  } else {
    currentJug1 -= availableRoom
    currentJug2 += availableRoom
  }
  return [currentJug1, currentJug2]
}
const add2To1 = (currentJug1, currentJug2, jug1Capacity, jug2Capacity) => {
  if (currentJug2 === jug2Capacity || currentJug1 === 0) return [null, null]
  let availableRoom = jug1Capacity - currentJug1
  if (currentJug2 <= availableRoom) {
    currentJug1 += currentJug2
    currentJug2 = 0
  } else {
    currentJug2 -= availableRoom
    currentJug1 = jug1Capacity
  }
  return [currentJug1, currentJug2]
}

const canMeasureWater = (jug1Capacity, jug2Capacity, targetCapacity) => {
  if (targetCapacity === jug1Capacity || targetCapacity === jug2Capacity)
    return true
  if (targetCapacity === Math.abs(jug1Capacity - jug2Capacity)) return true
  if (targetCapacity === Math.abs(jug1Capacity + jug2Capacity)) return true

  const states = new Set().add('0,0')
  let queue = [[0, 0]]
  let currentState, newFill1, newFill2
  while (queue.length > 0) {
    currentState = queue.shift()
    newFill1 = fillJug1(currentState[0], jug1Capacity)
    if (newFill1 !== null && !states.has(`${newFill1},${currentState[1]}`)) {
      if (
        newFill1 === targetCapacity ||
        newFill1 + currentState[1] === targetCapacity
      )
        return true
      states.add(`${newFill1},${currentState[1]}`)
      queue.push([newFill1, currentState[1]])
    }
    newFill2 = fillJug2(currentState[1], jug2Capacity)
    if (newFill2 !== null && !states.has(`${currentState[0]},${newFill2}`)) {
      if (
        newFill2 === targetCapacity ||
        currentState[0] + newFill2 === targetCapacity
      )
        return true
      states.add(`${currentState[0]},${newFill2}`)
      queue.push([currentState[0], newFill2])
    }
    // Empty Jugs
    newFill1 = 0
    if (!states.has(`${newFill1},${currentState[1]}`)) {
      if (newFill1 + currentState[1] === targetCapacity) return true
      states.add(`${newFill1},${currentState[1]}`)
      queue.push([newFill1, currentState[1]])
    }
    newFill2 = 0
    if (!states.has(`${currentState[0]},${newFill2}`)) {
      if (currentState[0] + newFill2 === targetCapacity) return true
      states.add(`${currentState[0]},${newFill2}`)
      queue.push([currentState[0], newFill2])
    }
    ;[newFill1, newFill2] = add1To2(
      currentState[0],
      currentState[1],
      jug1Capacity,
      jug2Capacity
    )
    if (newFill1 !== null && !states.has(`${newFill1},${newFill2}`)) {
      states.add(`${newFill1},${newFill2}`)
      queue.push([newFill1, newFill2])
    }
    ;[newFill1, newFill2] = add2To1(
      currentState[0],
      currentState[1],
      jug1Capacity,
      jug2Capacity
    )
    if (newFill1 !== null && !states.has(`${newFill1},${newFill2}`)) {
      states.add(`${newFill1},${newFill2}`)
      queue.push([newFill1, newFill2])
    }
  }
  return false
}

console.log('Method1')
console.log(canMeasureWater(3, 5, 4)) // true
console.log(canMeasureWater(2, 6, 5)) // false
console.log(canMeasureWater(1, 2, 3)) // true

/* Second uses Greatest Common Divisor solution
Explanation:

Since the target(y) must be achieved by some combination of filling (+x, +y) or emptying (-x, -y) jug1 and jug2, we can model combinations of jug1, jug2, and target quantity THAT WORK with

target = jug1(x) + jug2(y)

If we factor our the greatest common divisor of jug1 and jug 2, it becomes modeled as

(target/g) = (jug1/g)(x) + (jug2/g)(y)

This means that in order to achieve the target, it must be divisible
by the greatest common divisor of jug1 and jug2

*/

/**
 * Built using Euclidean Algorithm from Wikipedia for finding greatestCommonDivisor:
 
Euclidean algorithm
A more efficient method is the Euclidean algorithm, a variant in which the difference of the two numbers a and b is replaced by the remainder of the Euclidean division (also called division with remainder) of a by b.

Denoting this remainder as a mod b, the algorithm replaces (a, b) by (b, a mod b) repeatedly until the pair is (d, 0), where d is the greatest common divisor.

For example, to compute gcd(18,48), the computation is as follows:

(18, 48) -> (18, 48 % 18) == (18, 12)
(18,12) -> (18 % 12, 12) == (6, 12)
(6, 12) -> (6, 12 % 6) === (6, 0)
6 is gcd
 */
const greatestCommonDivisor = (x, y) => {
  if (x > y) {
    // Swap values so that y starts as the larger value
    ;[x, y] = [y, x]
  }
  while (y !== 0) {
    const remainder = x % y
    x = y
    y = remainder
  }
  return x
}

// Find the greatest common divisor. Make sure that the two jugs
// together can actually hold enough water.
// Then see if the target is divisble by the gcd
const canMeasureWater2 = (jug1Capacity, jug2Capacity, targetCapacity) => {
  const gcd = greatestCommonDivisor(jug1Capacity, jug2Capacity)
  if (jug1Capacity + jug2Capacity < targetCapacity) return false
  return targetCapacity % gcd === 0
}

console.log('Method2')
console.log(canMeasureWater2(3, 5, 4)) // true
console.log(canMeasureWater2(2, 6, 5)) // false
console.log(canMeasureWater2(1, 2, 3)) // true
