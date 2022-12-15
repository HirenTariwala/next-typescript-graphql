import ErrorFallbackComponent from ".";
import { render } from "@testing-library/react";

describe("Test ErrorFallbackComponent", () => {
  test("Check if component contains renders error", () => {
    const error = {
      message: "Something went wrong",
    };
    const { getByText } = render(<ErrorFallbackComponent error={error} />);
    expect(
      getByText(`An error occurred: ${error.message}`)
    ).toBeInTheDocument();
  });
});
