import { useState } from "react";
import { RouteObject, useNavigate } from "react-router-dom";
import "./index.scss";

// 引入路由数组
import { routeArr } from "../../../router";
// 导航栏规则
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

// 存放路由的key
const rootSubmenuKeys: Array<React.Key | undefined> = [];

// 遍历路由的方法
const routerEach = (routes: RouteObject[] | undefined) => {
  // 迭代出口
  if (!routes) return;
  // 存放节点的数组
  const result: MenuItem[] = [];
  // 循环获取路由节点
  routes.forEach((route) => {
    if (route.label !== undefined) {
      const item = {
        key: route.path,
        label: route.label,
        children: routerEach(route.children),
      } as MenuItem;
      result.push(item);
      // 判断key数组中是否已存在
      rootSubmenuKeys.includes(item?.key)
        ? ""
        : rootSubmenuKeys.push(item?.key);
    }
  });
  return result;
};

export default function Aside() {
  // 当前展开的key
  const [openKeys, setOpenKeys] = useState<string[]>(["/layout"]);

  // 添加节点数组
  const items: MenuItem[] = routerEach(routeArr) as MenuItem[];

  // 只展开当前父级菜单的方法
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // 路由重定向方法
  const navigate = useNavigate();

  return (
    <>
      <div className="aside-container">
        <Menu
          mode="inline"
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          items={items}
          onClick={({ key }) => navigate(key)}
        />
      </div>
    </>
  );
}
