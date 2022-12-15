import Badge from ".";
import { render } from "@testing-library/react";

describe("Test Badge component", () => {
  test("render badge component", () => {
    const { getByText } = render(
      <Badge status="Alive">
        <div>Test</div>
      </Badge>
    );
    expect(getByText("Alive")).toBeInTheDocument();
  });
});
