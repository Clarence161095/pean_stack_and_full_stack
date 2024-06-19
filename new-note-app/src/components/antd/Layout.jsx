import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  ContactsOutlined,
  ProfileOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Content, Footer, Sider } = Layout;

// Dummy: Default item for menu
const DEFAULT_ITEM = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Home',
  },
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'Admin',
    children: [
      {
        key: '3',
        icon: <SettingOutlined />,
        label: 'Settings',
      },
      {
        key: '4',
        icon: <ProfileOutlined />,
        label: 'Profile',
      },
    ],
  },
  {
    key: '5',
    icon: <ContactsOutlined />,
    label: 'Contact',
  },
];

const AntdLayout = ({
  menus = DEFAULT_ITEM,
  themeInit = 'dark',
  defaultSelectedKeysInit = '3',
  defaultOpenKeysInit = 'sub1',
  collapsedInit = false,
  license = `Note App ${new Date().getFullYear()} Created by TuanNA`,
  children,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(collapsedInit);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu
          theme={themeInit}
          defaultSelectedKeys={[defaultSelectedKeysInit]}
          defaultOpenKeys={[defaultOpenKeysInit]}
          mode="inline"
          items={menus}
          {...props}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {license}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AntdLayout;
