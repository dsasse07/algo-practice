/**
 * Once we reach a left, both left and right will be null
 * It is only when BOTH of these return null that the next line of code runs
 *
 * The next line BACKTRACKS by removing the current node val from the freq counter
 * This continues up the branch to the closest parent that have another branch
 * This ensures that the count will be correctly reset to what it was
 * when we originally got to this parent node.
 * Ex: root = [2,3,1,3,1,null,1]
 * Log:
 *    node [2,3,1,3,1,null,1] freqMap { '2': 1 }
 *    node [3,3,1] freqMap { '2': 1, '3': 1 }
 *    node [3] freqMap { '2': 1, '3': 2 }
 ********* This Branch Ends. Result + 1. Backtrack to parent node (3) to explore other
 *         branch of [1]
 *
 *    node [1] freqMap { '1': 1, '2': 1, '3': 1 }
 ********* This Branch Ends. Not Palindrome. Backtrack to parent node (3)
 ********* No other branches! Backtrack to parent node (2), remove current node from Freq
 ********* Parent node (2) has another branch [1, null, 1]
 *
 *    node [1,null,1] freqMap { '1': 1, '2': 1, '3': 0 }
 ********* First branch of (1) is null, skip it
 *
 *    node [1] freqMap { '1': 2, '2': 1, '3': 0 }
 ********* This Branch Ends. Result + 1. Backtrack to parent node (2)
 ********* No other branches, collapse back to root and end.
 *
 * Return: 2
 *
 */

const pseudoPalindromicPaths = (root) => {
  let result = 0
  const freqMap = {}

  const mapNodeVals = (node) => {
    if (node === null) return
    freqMap[node.val] = freqMap[node.val] + 1 || 1
    if (!node.left && !node.right && isPalindrome(freqMap)) {
      result++
    }
    mapNodeVals(node.left)
    mapNodeVals(node.right)
    freqMap[node.val] = freqMap[node.val] - 1
  }

  const isPalindrome = (map) => {
    let oddCount = 0
    for (let key in freqMap) {
      if (map[key] % 2 !== 0) oddCount++
      if (oddCount > 1) return false
    }
    return true
  }

  mapNodeVals(root)
  return result
}
