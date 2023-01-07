import { render, screen } from "@testing-library/react";
import { User } from "./user";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("render correctly", () => {
    render(<User />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the number of users", async () => {
    render(<User />);
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).toHaveLength(3);
  });

  test("render error messsage when request failed", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<User />);
    const errorElement = await screen.findByText("Error fetching users");
    expect(errorElement).toBeInTheDocument();
  });
});
