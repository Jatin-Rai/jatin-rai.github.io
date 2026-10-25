import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vite-plus/test";
import App from "./App";

describe("App Component", () => {
  it("renders correctly with all main sections", () => {
    const { container } = render(<App />);

    // Check main IDE workspace elements
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(container.querySelector("header")).toBeInTheDocument(); // Titlebar
    expect(container.querySelector("footer")).toBeInTheDocument(); // Statusbar
  });
});
