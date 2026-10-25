import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vite-plus/test";
import Projects from "./Projects";

describe("Projects Component", () => {
  it("renders projects section", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: /Projects/i })).toBeInTheDocument();
  });
});
