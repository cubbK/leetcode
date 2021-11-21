import { repeatedString } from "./infiniteString";

it(" the number of letter a's in the first  letters of the infinite string", () => {
  const string = "aba";
  const n = 10;
  expect(repeatedString(string, n)).toBe(7);
});
