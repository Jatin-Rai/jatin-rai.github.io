import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vite-plus/test";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders hero section correctly", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("#hero")).toBeInTheDocument();

    // There should be some links/buttons like "Get in touch"
    const buttonText = screen.getByText(/Get in touch/i);
    expect(buttonText).toBeInTheDocument();
  });
});
