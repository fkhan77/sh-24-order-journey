import React from "react";
import { screen, render } from "@testing-library/react";
import { Heading } from "./Heading";

test("Heading should render", () => {
  render(<Heading text="My Heading Text" />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});

test("Heading should display correctly", () => {
  render(<Heading text="My Heading Text" />);
  expect(screen.getByRole("heading")).toHaveTextContent("My Heading Text");
});

test("Heading should display correctly with different text", () => {
  render(<Heading text="Alternate test" />);
  expect(screen.getByRole("heading")).toHaveTextContent("Alternate test");
});
