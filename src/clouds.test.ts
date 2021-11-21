import { jumpingOnClouds } from "./clouds";

it("returns the fastest way to jump the clouds", () => {
  const clouds = [0, 0, 1, 0, 0, 1, 0];
  expect(jumpingOnClouds(clouds)).toBe(4);
});
