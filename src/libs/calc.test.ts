import { test, expect } from "vitest";
import { calcIncrement } from "./calc";

test("calcIncrement", () => {
  expect(calcIncrement(0, 100)).toBe(4950);
});
