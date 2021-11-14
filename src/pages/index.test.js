import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./index";
import { act } from "react-dom/test-utils";

test("First question should appear by default", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: /What is your name?/ })
  ).toBeInTheDocument();
});

test("Next button should appear on the first question", () => {
  render(<Home />);
  expect(screen.getByRole("button", { name: /Next/ })).toBeInTheDocument();
});

test("Back button should not appear on the first question", () => {
  render(<Home />);
  expect(
    screen.queryByRole("button", { name: /Back/ })
  ).not.toBeInTheDocument();
});

test("Should not be able to click next if the field is empty", () => {
  render(<Home />);
  expect(() =>
    userEvent.click(screen.getByRole("button", { name: /Next/ }))
  ).toThrow();
});

test("When the input for the first question is valid and the next button is pressed the first question should no longer appear", () => {
  render(<Home />);
  userEvent.type(screen.getByLabelText("Name"), "John Doe");
  userEvent.click(screen.getByRole("button", { name: /Next/ }));

  expect(
    screen.queryByRole("heading", { name: /What is your name?/ })
  ).not.toBeInTheDocument();
});

test("When the input for the first question is valid and the next button is pressed the second question should appear", () => {
  render(<Home />);
  userEvent.type(screen.getByLabelText("Name"), "John Doe");
  userEvent.click(screen.getByRole("button", { name: /Next/ }));

  expect(
    screen.getByRole("heading", { name: /What is your email address?/ })
  ).toBeInTheDocument();
});
