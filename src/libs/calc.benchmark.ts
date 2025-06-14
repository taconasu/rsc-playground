import { bench, describe } from "vitest";
import { calcIncrement } from "./calc";

describe("benchmark", () => {
  bench("from 0 to 100", () => {
    calcIncrement(0, 100);
  });

  bench("from 0 to 2000", () => {
    calcIncrement(0, 2000);
  });
});
