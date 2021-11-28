import { maximumToys } from "./cheapestToys";

it("returns the maximum ammount of toys you can buy with ammount", () => {
  //   expect(maximumToys([1, 2, 3, 4], 7)).toBe(3);
  expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4);
});
