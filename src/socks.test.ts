import { sockMerchant } from "./socks";
describe("socks", () => {
  it("calculates the number of pairs", () => {
    const n = 9;
    const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const result = sockMerchant(n, ar);
    expect(result).toBe(3);
  });
});
