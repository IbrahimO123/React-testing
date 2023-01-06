import { Skills } from "./skills";
import { render, screen } from "@testing-library/react";

describe("Skills", () => {
  test("render correctly", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"];
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("renders a list of skills", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"];
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
