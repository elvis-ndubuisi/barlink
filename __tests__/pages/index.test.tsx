import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/index";
import { describe, it, test } from "node:test";

describe("Home", () => {
  test("renders a heading", () => {
    render(<Home articles={[Object]} />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
