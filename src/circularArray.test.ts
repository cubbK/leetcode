import { rotLeft } from "./circularArray";

it("return the updated rotated array", () => {
  expect(rotLeft([1, 2, 3, 4, 5], 1)).toEqual([2, 3, 4, 5, 1]);
  expect(rotLeft([1, 2, 3, 4, 5], 3)).toEqual([4, 5, 1, 2, 3]);
});
