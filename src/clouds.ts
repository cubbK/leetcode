export function jumpingOnClouds(clouds: number[]): number {
  let jumps = 0;
  for (let i = 0; i < clouds.length - 1; ) {
    if (clouds[i + 2] === 0) {
      i = i + 2;
      jumps = jumps + 1;
    } else {
      i = i + 1;
      jumps = jumps + 1;
    }
  }
  return jumps;
}
