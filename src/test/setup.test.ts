import { describe, expect, test } from "vitest";

describe("example describe", () => {
  test("example test", async ({ annotate }) => {
    annotate("example test annotation", {
      contentType: "image/jpeg",
      path: "./public/spacecat.jpg",
    });
    expect(100 * 0.05).toBe(5);
  });
});
