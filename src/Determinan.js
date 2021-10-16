import Matrix from "./Matrix.js";

export default class Determinan extends Matrix {
  constructor(matrix) {
    super(matrix);
  }

  static twoX2(
    matrix = [
      [0, 0],
      [0, 0],
    ]
  ) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  laplace3x3(rowIndex = 1) {
    if (rowIndex > 3) throw new Error("Max rowIndex is 3.");
    const closedMatrix = this.matrix.filter((_, i) => i !== rowIndex - 1);
    return this.getRow(rowIndex).reduce((pv, cv, i) => {
      const matrix2x2 = closedMatrix.map((el) => el.filter((_, j) => j !== i));
      return pv + cv * (-1) ** (rowIndex + i + 1) * Determinan.twoX2(matrix2x2);
    }, 0);
  }

  sarrus3x3() {
    let a = 0,
      b = 0;
    const matrix = this.merge(this.getColumn(1, 2));
    for (let i = 0; i < 3; i++) {
      a += matrix[0][i] * matrix[1][i + 1] * matrix[2][i + 2];
      b += matrix[0][4 - i] * matrix[1][4 - (i + 1)] * matrix[2][4 - (i + 2)];
    }
    return a - b;
  }
}
