import { Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const { Footer: MyFooter } = Layout;
const { Title } = Typography;

const Footer = () => {
  const { last10VisitedProfiles } = useSelector((state: RootState) => state.charactersDetail);
  return (
    <>
        <MyFooter style={{ backgroundColor: "black" }}>
            <Title type="success" level={3}>Last 10 visited profiles</Title>
            {last10VisitedProfiles.length > 0 && last10VisitedProfiles.map((profilename: string, index: number) => (
              <Title key={index} type="success" level={5}>{`${index+1} ${profilename}`}</Title>
            ))}
        </MyFooter>
    </>
  )
}

export default Footer