import { render } from "@testing-library/react";
import { describe, it, expect } from "vite-plus/test";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
