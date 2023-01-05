import { Greet } from "./greet";
import { render, screen } from "@testing-library/react";

describe("Greet Component", () => {

    test("renders on the DOM", () => {
        render(<Greet />);
        const result = screen.getByText(/Hello/);
        expect(result).toBeInTheDocument();
    });
    
    test("renders with a name", () => {
        render(<Greet name="Ibrahim" />);
        const textElement = screen.getByText("Hello Ibrahim");
        expect(textElement).toBeInTheDocument();
    });
    
});