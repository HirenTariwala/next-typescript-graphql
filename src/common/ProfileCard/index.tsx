import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";
import { IProfileCardProps } from "../type";
import Styles from "./profileCard.module.scss";
const { Meta } = Card;

const ProfileCard: React.FC<IProfileCardProps> = ({ character, index }) => {
  return (
    <div className={Styles.profileContainer}>
      <Badge status={character.status}>
        <Card
          key={index}
          hoverable
          cover={
            <Image
              className={Styles.characterImage}
              alt="character_image"
              width={100}
              height={100}
              src={character?.image}
            />
          }
        >
          <Meta title={character?.name} />
          <Link href={`/profile/${character.id}`}>
            Open Profile
          </Link> 
        </Card>
      </Badge>
    </div>
  );
};

export default ProfileCard;
