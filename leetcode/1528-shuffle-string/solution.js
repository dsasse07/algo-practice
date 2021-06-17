const solution = (s, indices) => {
  const res = []

  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s[i]
  }
  return res.join('')
}
console.log(solution('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])) // leetcode
