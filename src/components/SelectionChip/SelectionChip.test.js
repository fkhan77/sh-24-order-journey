import React from "react";
import { screen, render } from "@testing-library/react";
import { SelectionChip } from "./SelectionChip";

test("Selection chip should render", () => {
  render(<SelectionChip text="My Selection Chip" selected={false} />);
  expect(screen.getByRole("radio")).toBeInTheDocument();
});

test("Selection chip should still render when selected is true", () => {
  render(<SelectionChip text="My Selection Chip" selected={true} />);
  expect(screen.getByRole("radio")).toBeInTheDocument();
});

test("Selection chip display correctly", () => {
  render(<SelectionChip text="My Selection Chip" />);
  expect(screen.getByRole("radio")).toHaveTextContent("My Selection Chip");
});
