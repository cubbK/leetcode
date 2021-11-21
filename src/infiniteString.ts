export function repeatedString(string: string, number: number): number {
  const nrOfIterations = Math.floor(number / string.length);
  const rest = number - nrOfIterations * string.length;

  let aCount = 0;

  for (let j = 0; j < string.length; j++) {
    if (string[j] === "a") {
      aCount = aCount + 1;
    }
  }
  aCount = aCount * nrOfIterations;
  for (let i = 0; i < rest; i++) {
    if (string[i] === "a") {
      aCount = aCount + 1;
    }
  }
  return aCount;
}
