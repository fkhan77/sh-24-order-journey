import React from "react";
import { screen, render } from "@testing-library/react";
import { NavigationBar } from "./NavigationBar";

test("NavigationBar should render", () => {
  render(<NavigationBar isFirstStep={false} isLastStep={false} />);
  expect(screen.queryByTestId("navigation-bar")).toBeInTheDocument();
});
test("No buttons should render if isFirstStep is true and isLastStep is true", () => {
  render(<NavigationBar isFirstStep={true} isLastStep={true} />);
  expect(screen.queryAllByRole("button")).toHaveLength(0);
});

describe("Two buttons tests", () => {
  test("Two buttons should render if isFirstStep is false and isLastStep is false", () => {
    render(<NavigationBar isFirstStep={false} isLastStep={false} />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  test("When two buttons are rendered the first one should be a back button", () => {
    render(<NavigationBar isFirstStep={false} isLastStep={false} />);
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("Back");
  });

  test("When two buttons are rendered the second one should be a next button", () => {
    render(<NavigationBar isFirstStep={false} isLastStep={false} />);
    expect(screen.getAllByRole("button")[1]).toHaveTextContent("Next");
  });

  test("Two buttons should render if isFirstStep is false and isLastStep is false", () => {
    render(<NavigationBar isFirstStep={false} isLastStep={false} />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});

describe("Single button tests", () => {
  test("A single button should render if isFirstStep is true and isLastStep is false", () => {
    render(<NavigationBar isFirstStep={true} isLastStep={false} />);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  test("A next button should render if isFirstStep is true and isLastStep is false", () => {
    render(<NavigationBar isFirstStep={true} isLastStep={false} />);
    expect(screen.getByRole("button")).toHaveTextContent("Next");
  });

  test("A single button should render if isFirstStep is true and isLastStep is false", () => {
    render(<NavigationBar isFirstStep={true} isLastStep={false} />);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  test("A back button should render if isFirstStep is false and isLastStep is true", () => {
    render(<NavigationBar isFirstStep={false} isLastStep={true} />);
    expect(screen.getByRole("button")).toHaveTextContent("Back");
  });
});
