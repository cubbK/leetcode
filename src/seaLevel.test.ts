import { countingValleys } from "./seaLevel";

it("counts valleys", () => {
  const steps = 8;
  const path = "UDDDUDUU";
  expect(countingValleys(steps, path)).toBe(1);
});
