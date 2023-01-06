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

  test("renders the login button", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"];
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("does not render the start learning button", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"];
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: /Start learning/i,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("start button eventually renders", async () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"];
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: /Start learning/i,
      },
      {
        timeout: 1000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
