import React from "react";
import { screen, render } from "@testing-library/react";
import { Label } from "./Label";

test("Label should display correctly", () => {
  render(<Label text="My Label Text" />);
  expect(screen.getByText("My Label Text")).toBeInTheDocument();
});

test("Label should display correctly with different text", () => {
  render(<Label text="Alternate test" />);
  expect(screen.getByText("Alternate test")).toBeInTheDocument();
});
