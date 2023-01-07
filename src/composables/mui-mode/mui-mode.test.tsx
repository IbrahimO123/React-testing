import { render, screen } from "../../../test-utils";
import { MuiMode } from "./mui-mode";

describe("MuiMode", () => {
  test("render element text content correctly", () => {
    render(<MuiMode />);
    const element = screen.getByRole("heading");
    expect(element).toHaveTextContent("dark mode");
  });
});
