import { useDispatch, useSelector } from "react-redux";
import { List, Typography } from "antd";
import { RootState } from "../../store/store";
import ProfileCard from "../../common/ProfileCard";
import { ICharacterDetail } from "../../common/type";
import Styles from "./characterPage.module.scss";
import Pagination from "../../common/Pagination";
import React, { useEffect, useState } from "react";
import SearchComponent from "../../common/Search";
import { useRouter } from "next/router";
import { setCurrentPageNumber } from "./slice";

const { Title } = Typography;

const CharactersPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = router;
  const [searchString, setSearchString] = useState<string>(query?.q as string);
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
      <div className={Styles.appHeading}>
        <Title level={1}>Rick and Morty</Title>
      </div>
      <div className={Styles.searchCharacter}>
        <SearchComponent
          size={"large"}
          allowClear={true}
          searchValue={searchString}
          placeholder={"Search"}
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
