import { Layout } from "antd";
import Footer from "../common/Footer";

interface AppLayout {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayout> = ({ children }) => {
  return (
    <Layout>
      {children}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
