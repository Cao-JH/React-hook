import { useRoutes, RouteObject, Navigate } from "react-router-dom";

import Layout from "../view/Layout";
import Home from "../view/Home";
import User from "../view/User";
import Login from "../view/Login";

/**
 * 定义路由数组并暴露出去
 *  若是需要在侧边栏可以导航，添加label属性即可
 */
export const routeArr: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/layout/home"></Navigate>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/layout",
    element: <Layout />,
    label: "首页",
    children: [
      { path: "/layout/home", element: <Home />, label: "Home" },
      { path: "/layout/user", element: <User />, label: "个人信息" },
    ],
  },
  {
    path: "/xxx",
    // element: <Layout />,
    label: "测试",
    children: [
      { path: "/xxx/home", element: <Home />, label: "1111" },
      { path: "/xxx/user", element: <User />, label: "2222" },
    ],
  },
];

// 定义useRoutes钩子方法并暴露出去
export const GetRouters = () => useRoutes(routeArr);
