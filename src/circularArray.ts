export function rotLeft(array: number[], numberOfRotations: number): number[] {
  for (let i = 0; i < numberOfRotations; i++) {
    const firstElement = array[0];
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = firstElement;
  }
  return array;
}
