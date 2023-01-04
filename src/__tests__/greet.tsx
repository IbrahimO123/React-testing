import { Greet } from "../composables/greet/greet";
import { render, screen } from "@testing-library/react";

describe("Greet Component", () => {
  it("renders on the DOM", () => {
    render(<Greet />);
    const result = screen.getByText("Hello");
    expect(result).toBeInTheDocument();
  });

  it("renders with a name", () => {
    render(<Greet name="Ibrahim" />);
    const textElement = screen.getByText("Hello Ibrahim");
    expect(textElement).toBeInTheDocument();
  });
});
