import { Layout } from "antd";
import { useSelector } from 'react-redux';
import Footer from "../common/Footer";
import { RootState } from "../store/store";

interface AppLayout {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayout> = ({ children }) => {
  const { last10VisitedProfiles } = useSelector((state: RootState) => state.charactersDetail);
  return (
    <Layout>
      {children}
      <Footer last10VisitedProfiles={last10VisitedProfiles} />
    </Layout>
  );
};

export default AppLayout;
