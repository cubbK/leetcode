import { hourglassSum } from "./hourGlass";

it("Calculate the hourglass sum for every hourglass in the array", () => {
  const array = [
    [-9, 0, -9, 0, 0, 0],
    [-9, -9, -9, 0, 0, 0],
    [-9, 0, -9, 8, 0, 1],
    [1, 4, 1, 6, -2, 2],
    [1, 3, 2, 6, 0, 0],
    [1, 2, 3, 0, 0, 0],
  ];
  expect(hourglassSum(array)).toBe(18);
});
