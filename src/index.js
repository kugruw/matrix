import Determinan from "./Determinan.js";

const maxtrixA = new Determinan([
  [2, 1, 1],
  [0, 5, -2],
  [1, -3, 4],
]);

console.log(`| A | = ${maxtrixA.laplace3x3()}`);
console.log(`| A | = ${maxtrixA.sarrus3x3()}`);
