import React from "react";
import { screen, render } from "@testing-library/react";
import { Results } from "./Results";

const mockResultsData = [
  ["sampleQuestion1", "sampleAnswer1"],
  ["sampleQuestion2", "sampleAnswer2"],
];
test("Results should render a results container", () => {
  render(<Results results={mockResultsData} />);
  expect(screen.queryByTestId("result-container")).toBeInTheDocument();
});

test("Results should render a heading", () => {
  render(<Results results={mockResultsData} />);
  expect(screen.queryByRole("heading")).toBeInTheDocument();
});

test("Results should render two results", () => {
  render(<Results results={mockResultsData} />);
  expect(screen.getAllByTestId("result")).toHaveLength(2);
});

test("Results should be displayed in the correct order and format", () => {
  render(<Results results={mockResultsData} />);
  expect(screen.getAllByTestId("result")[0]).toHaveTextContent(
    "sampleQuestion1: sampleAnswer1"
  );
});
