class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.rowCount = matrix.length;
    this.colCount = matrix[0].length;
    this.regionSums = {};
  }

  sumRegion(row1, col1, row2, col2) {
    const previousRegionSum =  this.regionSums[`${row1},${col1},${row2},${col2}`];
    if (previousRegionSum) return previousRegionSum;
    
    let sum = 0;

    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }
    this.regionSums[`${row1},${col1},${row2},${col2}`] = sum;
    return sum;
  }
}

const t1 = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]

const a = new NumMatrix(t1)

a.sumRange(1,1,2,2)

