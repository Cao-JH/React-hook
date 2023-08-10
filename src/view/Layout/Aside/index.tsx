import { RouteObject, useNavigate } from "react-router-dom";

// 引入路由数组
import { routeArr } from "../../../router";
// 导航栏规则
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

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
    }
  });
  return result;
};

export default function Aside() {
  // 添加节点数组
  const items: MenuItem[] = routerEach(routeArr) as MenuItem[];

  // 重定向方法
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Menu
          mode="inline"
          items={items}
          onClick={({ key }) => navigate(key)}
        />
      </div>
    </>
  );
}
