import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { List, Typography } from "antd";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { RootState } from "../../store/store";
import ProfileCard from "../../common/ProfileCard";
import { ICharacterDetail } from "../../common/type";
import Styles from "./characterPage.module.scss";
import Pagination from "../../common/Pagination";
import SearchComponent from "../../common/Search";
import { setCurrentPageNumber } from "./duck/slice";
import { COPY } from "../../common/constants";

const { Title } = Typography;

const CharactersPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const query = searchParams.get("q");
  const [searchString, setSearchString] = useState<string>(query as string);
  const { allCharacters, charactersCount, currentPageNumber } = useSelector(
    (state: RootState) => state.charactersDetail
  );

  const onSearch = (value: string) => {
    dispatch(setCurrentPageNumber(1));
    router.push(`/search?q=${value}`);
  };

  const onChange = (e: any) => {
    setSearchString(e.target.value);
  };

  return (
    <div className={Styles.listContainer}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={Styles.appHeading}>
        <Title level={1}>{COPY.RICK_AND_MONTY_CHARACTERS}</Title>
      </div>
      <div className={Styles.searchCharacter}>
        <SearchComponent
          size={"large"}
          allowClear={true}
          searchValue={searchString}
          placeholder={COPY.SEARCH_INPUT_PLACEHOLDER}
          onSearch={onSearch}
          onChange={onChange}
        />
      </div>
      <List
        grid={{
          gutter: 16,
          column: 5,
        }}
        renderItem={(character: ICharacterDetail, index) => (
          <List.Item>
            <ProfileCard character={character} index={index} />
          </List.Item>
        )}
        dataSource={allCharacters}
      ></List>
      {charactersCount > 20 && (
        <div className={Styles.paginationRow}>
          <Pagination
            total={charactersCount}
            currentPageNumber={currentPageNumber}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(CharactersPage);
