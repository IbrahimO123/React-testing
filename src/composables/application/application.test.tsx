import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  it("render corresponding roles", () => {
    render(<Application />);
    const pageElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageElement).toBeInTheDocument();

    const sectionElement = screen.getByRole("heading", { level: 2 });
    expect(sectionElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const fullNameElement = screen.getByPlaceholderText("Fullname");
    expect(fullNameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const paragraphElement = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paragraphElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    
    expect(submitElement).not.toBeEnabled();
  });
});
