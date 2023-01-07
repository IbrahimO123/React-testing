import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders in the DOM", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders count in the DOM", () => {
    render(<Counter />);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("0");
  });

  test("count increases after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "increment" });
    await user.click(incrementButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("1");
  });

  test("count increases to 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("2");
  });

  test("counts renders 10 after setting the amount value to 10", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("10");
  });
  test("tab focus on the element displayed on the screen", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "increment" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    const amountInput = screen.getByRole("spinbutton");
    await user.tab();
    expect(amountInput).toHaveFocus();
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
