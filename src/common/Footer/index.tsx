import { Layout, Typography } from 'antd';

const { Footer: MyFooter } = Layout;
const { Title } = Typography;

interface IFooterProps {
  last10VisitedProfiles: string[]
}

const Footer:React.FC<IFooterProps> = ({ last10VisitedProfiles }) => {
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