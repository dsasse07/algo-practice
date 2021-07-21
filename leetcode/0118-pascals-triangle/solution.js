function generate(numRows) {
  const triangle = [[1]]

  while (triangle.length < numRows) {
    let prevRow = triangle[triangle.length - 1]
    let nextRow = []
    for (let i = 0; i < prevRow.length; i++) {
      nextRow[i] = prevRow[i] + nextRow[i] || prevRow[i]
      nextRow[i + 1] = prevRow[i] + nextRow[i + 1] || prevRow[i]
    }
    triangle.push(nextRow)
  }
  return triangle
}
