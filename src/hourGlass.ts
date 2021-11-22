export function hourglassSum(arr: number[][]): number {
  const sums = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      sums.push(sum);
    }
  }
  console.log(sums);
  return Math.max(...sums);
}
