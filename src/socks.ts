export function sockMerchant(n: number, socks: number[]): number {
  // Write your code here
  const uniqueSocks = socks.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  const nrOfUniqueSocks = [];
  for (let i = 0; i < uniqueSocks.length; i++) {
    const uniqueSock = uniqueSocks[i];
    const nr = socks
      .map((sock, i) => (sock === uniqueSock ? i : -1))
      .filter((index) => index !== -1).length;
    nrOfUniqueSocks.push(nr);
  }
  return nrOfUniqueSocks
    .map((nr) => Math.floor(nr / 2))
    .reduce((prev, curr) => prev + curr);
}
