import React from "react";
import { screen, render } from "@testing-library/react";
import { MultiOptionQuestion } from "./MultiOptionQuestion";
import userEvent from "@testing-library/user-event";

test("Heading should render", () => {
  render(
    <MultiOptionQuestion
      title="My Heading Text"
      options={["option 1", "option 2"]}
    />
  );
  expect(screen.getByRole("heading")).toBeInTheDocument();
});

test("Heading should display correctly", () => {
  render(
    <MultiOptionQuestion
      title="My Heading Text"
      options={["option 1", "option 2"]}
    />
  );
  expect(screen.getByRole("heading")).toHaveTextContent("My Heading Text");
});

test("Two options should be rendered", () => {
  render(
    <MultiOptionQuestion
      title="My Heading Text"
      options={["option 1", "option 2"]}
    />
  );
  expect(screen.getAllByRole("radio")).toHaveLength(2);
});

test("First option should display correctly", () => {
  render(
    <MultiOptionQuestion
      title="My Heading Text"
      options={["option 1", "option 2"]}
    />
  );
  expect(screen.getByText("option 1")).toBeInTheDocument();
});

test("First option should still display correctly after being clicked", () => {
  render(
    <MultiOptionQuestion
      title="My Heading Text"
      options={["option 1", "option 2"]}
      handleClick={jest.fn()}
    />
  );
  userEvent.click(screen.getByText("option 1"));
  expect(screen.getByText("option 1")).toBeInTheDocument();
});
test("Second option should display correctly", () => {
  render(
    <MultiOptionQuestion
      title="My Heading Text"
      options={["option 1", "option 2"]}
    />
  );
  expect(screen.getByText("option 2")).toBeInTheDocument();
});
