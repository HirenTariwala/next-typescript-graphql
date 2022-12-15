import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CharactersPage from "../../components/CharactersPage";
import { savePageCharacters } from "../../components/CharactersPage/duck/slice";
import { GET_CHARACTERS } from "../../graphql/operations/character";
import { RootState } from "../../store/store";

const ShowSearchCharacters = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { currentPageNumber } = useSelector(
    (state: RootState) => state.charactersDetail
  );

  const [getCharacters, { loading, error, data }] = useLazyQuery(
    GET_CHARACTERS,
    {
      variables: { page: 1 },
    }
  );

  useEffect(() => {
    const count = data?.characters?.info?.count;
    const characters = data?.characters?.results;
    dispatch(savePageCharacters({ count, characters }));
  }, [data]);

  useEffect(() => {
    getCharacters({
      variables: { page: currentPageNumber, filter: { name: query.q } } as any,
    });
  }, [query.q, currentPageNumber]);

  if (loading && currentPageNumber === 1) return <h1>Loading...</h1>;
  if (error) return <h2>{`Error occurred: ${error}`}</h2>;
  return <CharactersPage />;
};

export default ShowSearchCharacters;
