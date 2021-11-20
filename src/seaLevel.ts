export function countingValleys(steps: number, path: string): number {
  let nrOfValleys = 0;
  let prevLevel = null;
  let level = 0;
  for (let i = 0; i < path.length; i++) {
    let step = path[i];
    if (step === "U") {
      level++;
    } else {
      level--;
    }
    if (level === 0 && prevLevel === -1) {
      nrOfValleys++;
    }
    prevLevel = level;
  }
  return nrOfValleys;
}
