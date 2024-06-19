import { Outlet, useNavigate } from 'react-router-dom';
import { rootConfig } from '../configs/router';
import AntdLayout from './antd/Layout';

const RootLayout = () => {
  const menusConfig = rootConfig[0].children;
  const menus = getMenus(menusConfig);
  const { defaultSelectedKeysInit, defaultOpenKeysInit } = getDefaultSelectedAndOpenKeys();
  const navigate = useNavigate();

  const handleOnClickLayout = (e) => {
    const { keyPath } = e;
    const path = keyPath.reverse().join('/');
    navigate(path);
  };

  return (
    <AntdLayout
      onClick={handleOnClickLayout}
      defaultSelectedKeysInit={defaultSelectedKeysInit}
      defaultOpenKeysInit={defaultOpenKeysInit}
      menus={menus}
    >
      <Outlet />
    </AntdLayout>
  );
};

export default RootLayout;

const getMenus = (menuConfig) => {
  const getRawMenus = (menuConfig) => {
    return menuConfig
      .filter((root) => root.menu)
      .map((root) => {
        if (root.menu?.key) {
          return {
            key: root.menu.key,
            icon: root.menu.icon,
            label: root.menu.label,
            children: root.children && root.children?.length > 0 ? getRawMenus(root.children) : undefined,
          };
        }
        return null;
      });
  };
  return getRawMenus(menuConfig).map((menu) => {
    let children = [];
    if (menu?.children && menu?.children?.length > 0) {
      children = menu.children.filter((child) => child);
    }
    if (children.length === 0 && menu?.key) {
      return {
        key: menu?.key,
        icon: menu?.icon,
        label: menu?.label,
      };
    }
    return { ...menu };
  });
};

const getDefaultSelectedAndOpenKeys = () => {
  const currentPath = window.location.pathname;
  const path = currentPath.split('/').filter((item) => item);
  const defaultSelectedKeysInit = path[path.length - 1] || 'home';
  const defaultOpenKeysInit = path.slice(0, path.length - 1).join('/');
  return { defaultSelectedKeysInit, defaultOpenKeysInit };
};
