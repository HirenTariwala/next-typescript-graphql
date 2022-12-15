import { render, fireEvent } from "@testing-library/react";
import ProfileCard from ".";
import { getPageUrl } from "./util";

describe("Test Profile card component", () => {
  const character = {
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
  };
  test("Render component and check whether compnent has same props or not", async () => {
    const { getByText, getByRole } = render(<ProfileCard character={character} index={1} />);
    expect(getByText(character.name)).toBeInTheDocument();
    expect(getByText("Open Profile")).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute('href', `/profile/${character.id}`);
  });
});
