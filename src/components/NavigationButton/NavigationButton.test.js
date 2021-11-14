import React from "react";
import { screen, render } from "@testing-library/react";
import { NavigationButton } from "./NavigationButton";

test("NavigationButton should render", () => {
  render(
    <NavigationButton onCLick={jest.fn()} isNext={true} isError={false} />
  );
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("NavigationButton should still render when isError is true ", () => {
  render(<NavigationButton onCLick={jest.fn()} isNext={true} isError={true} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("NavigationButton should display correctly when isNext is true", () => {
  render(
    <NavigationButton onCLick={jest.fn()} isNext={true} isError={false} />
  );
  expect(screen.getByRole("button")).toHaveTextContent("Next");
});

test("NavigationButton should display correctly when isNext is false", () => {
  render(
    <NavigationButton onCLick={jest.fn()} isNext={false} isError={false} />
  );
  expect(screen.getByRole("button")).toHaveTextContent("Back");
});
