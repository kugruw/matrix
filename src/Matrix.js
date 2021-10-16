export default class Matrix {
  constructor(matrix = []) {
    this.matrix = matrix;
  }

  getRow(i = 1) {
    return this.matrix[i - 1];
  }

  getColumn(i = 1, j) {
    if (j) return this.matrix.map((v) => v.slice(i - 1, j));
    return this.matrix.map((v) => v[i - 1]);
  }

  merge = (matrix) => this.matrix.map((v, i) => [...v, ...matrix[i]]);
}
