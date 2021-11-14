import React from "react";
import { screen, render } from "@testing-library/react";
import { TextInputQuestion } from "./TextInputQuestion";

test("Heading should render", () => {
  render(
    <TextInputQuestion title="My Question Title" label="My Question Label" />
  );
  expect(screen.getByRole("heading")).toBeInTheDocument();
});

test("Label should render", () => {
  render(
    <TextInputQuestion title="My Question Title" label="My Question Label" />
  );
  expect(screen.getByText("My Question Label")).toBeInTheDocument();
});

test("Input should render", () => {
  render(
    <TextInputQuestion title="My Question Title" label="My Question Label" />
  );
  expect(screen.getByTestId("text-input")).toBeInTheDocument();
});

test("Error should render by default", () => {
  render(
    <TextInputQuestion title="My Question Title" label="My Question Label" />
  );
  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});

test("Error should render when isError is true", () => {
  render(
    <TextInputQuestion
      title="My Question Title"
      label="My Question Label"
      isError={true}
    />
  );
  expect(screen.queryByTestId("error")).toBeInTheDocument();
});
