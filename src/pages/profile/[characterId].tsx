import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { Button, Card, Layout, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Styles from "./profile.module.scss";
import { ICharacterDetail } from "../../common/type";
import SearchComponent from "../../common/Search";
import { saveLast10VisitedProfiles } from "../../components/CharactersPage/duck/slice";
import { COPY } from "../../common/constants";
import Head from "next/head";

const { Content } = Layout;
const { Meta } = Card;

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = router;

  const [searchString, setSearchString] = useState<string>(query?.q as string);
  const [selectedProfile, setSelectedProfile] = useState<ICharacterDetail>();
  const { allCharacters, last10VisitedProfiles } = useSelector(
    (state: RootState) => state.charactersDetail
  );
  const { characterId } = router.query;

  useEffect(() => {
    saveProfileInLast10VisitedList(allCharacters, characterId);
  }, [allCharacters, characterId]);

  const saveProfileInLast10VisitedList = (
    characters: ICharacterDetail[],
    characterID?: string | string[]
  ) => {
    if (allCharacters.length > 0 && characterID) {
      const profileId = (characterID as string).split("-")[0];
      const profile = allCharacters.find((el) => el.id === profileId);
      if (last10VisitedProfiles.length === 10 && profile) {
        const visitedProfiles = [...last10VisitedProfiles, profile?.name];
        visitedProfiles.shift();
        dispatch(saveLast10VisitedProfiles(visitedProfiles));
      } else {
        dispatch(
          saveLast10VisitedProfiles([...last10VisitedProfiles, profile?.name])
        );
      }
      setSelectedProfile(profile);
    }
  };

  const onSearch = (value: string) => {
    if (value.length > 0) {
      router.push(`/search?q=${value}`);
    }
  };

  const onButtonClick = () => {
    Router.push("/");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  return (
    <Content className={Styles.ProfileContainer}>
      <Head>
        <title>{selectedProfile?.name}</title>
      </Head>
      <div>
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          className={Styles.homeButton}
          onClick={onButtonClick}
        >
          Home
        </Button>
      </div>

      <div className={Styles.searchbar}>
        <SearchComponent
          size={"large"}
          allowClear={true}
          searchValue={searchString}
          placeholder={COPY.SEARCH_INPUT_PLACEHOLDER}
          onSearch={onSearch}
          onChange={onChange}
        />
      </div>
      <Card
        hoverable
        title={"Profile"}
        style={{ width: 500, height: 550 }}
        cover={
          <Image
            className={Styles.characterImage}
            alt="character_image"
            width={100}
            height={100}
            src={selectedProfile?.image as string}
          />
        }
      >
        <div className={Styles.metaInfo}>
          <Meta title="Name" />
          <Meta description={selectedProfile?.name} />
        </div>
        <div className={Styles.metaInfo}>
          <Meta title="Species" />
          <Meta description={selectedProfile?.species} />
        </div>
        <div className={Styles.metaInfo}>
          <Meta title="Type" />
          <Meta description={selectedProfile?.type || "-"} />
        </div>
        <div className={Styles.metaInfo}>
          <Meta title="Gender" />
          <Meta description={selectedProfile?.gender} />
        </div>
        <div className={Styles.metaInfo}>
          <Meta title="Location" />
          <Meta description={selectedProfile?.location.name} />
        </div>
      </Card>
    </Content>
  );
};

export default Profile;
