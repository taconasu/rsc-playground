import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LinkCard } from "./LinkCard";

test("LinkCard", async () => {
  render(<LinkCard title="ほげ太郎" description="" href="" />);
  const title = await screen.findByRole("heading", {
    name: "ほげ太郎",
    level: 5,
  });
  expect(title.textContent).toBe("ほげ太郎");
});
