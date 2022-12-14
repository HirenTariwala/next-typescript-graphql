import Router, { useRouter } from "next/router";
import Image from "next/image";
import { Button, Card, Layout } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Styles from "./profile.module.scss";
import { ICharacterDetail } from "../../common/type";
import Link from "next/link";
import SearchComponent from "../../common/Search";
import { saveLast10VisitedProfiles } from "../../components/CharactersPage/slice";

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
    if (allCharacters && characterId) {
      const profile = allCharacters.find((el) => el.id === characterId);
      if (last10VisitedProfiles.length === 10 && profile) {
        const visitedProfiles = [...last10VisitedProfiles, profile?.name];
        visitedProfiles.shift();
        dispatch(saveLast10VisitedProfiles(visitedProfiles))
      } else {
        dispatch(saveLast10VisitedProfiles([...last10VisitedProfiles, profile?.name]))
      }
      setSelectedProfile(profile);
    }
  }, [allCharacters, characterId]);

  const onSearch = (value: string) => {
    if (value.length > 0) {
      router.push(`/search?q=${value}`);
    }
  };

  const onButtonClick = () => {
    Router.push("/")
  }

  const onChange = (e: any) => {
    setSearchString(e.target.value);
  }
  return (
    <Content className={Styles.ProfileContainer}>
      <Button type="link" icon={<ArrowLeftOutlined />} className={Styles.homeButton} onClick={onButtonClick}>Home</Button>
      <div className={Styles.searchbar}>
      <SearchComponent
          size={"large"}
          allowClear={true}
          searchValue={searchString}
          placeholder={"Search"}  
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
