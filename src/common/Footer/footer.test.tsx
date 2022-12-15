import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Test footer component", () => {
  const last10VisitedProfiles = ["Alexander", "Alien Googah"];
  test("render footer heading text and profies name if exist", () => {
    render(<Footer last10VisitedProfiles={last10VisitedProfiles} />);
    expect(screen.getByText("Last 10 visited profiles")).toBeInTheDocument();
    expect(screen.getByText("1 Alexander")).toBeInTheDocument();
    expect(screen.getByText("2 Alien Googah")).toBeInTheDocument();
  });
});
