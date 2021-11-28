export function maximumToys(prices: number[], k: number): number {
  const sortedPrices = [...prices].sort((a, b) => a - b);
  let toys = 0;
  let total = 0;
  for (const price of sortedPrices) {
    if (total + price <= k) {
      total += price;
      toys += 1;
    } else {
      return toys;
    }
  }
  return toys;
}
