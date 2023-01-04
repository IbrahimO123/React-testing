import { Greet } from "./greet";
import { render, screen } from "@testing-library/react";

test("Greet render on the DOM", () => {
  render(<Greet />);
  const result = screen.getByText("Hello");
  expect(result).toBeInTheDocument();
});

test("Greet render with name", () => {
  render(<Greet name="Ibrahim" />);
  const textElement = screen.getByText("Hello Ibrahim");
  expect(textElement).toBeInTheDocument();
});
