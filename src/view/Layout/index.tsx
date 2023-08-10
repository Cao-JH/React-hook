import { Outlet } from "react-router-dom";
// 引入样式
import "./index.scss";

// 引入组件
import Aside from "./Aside";

export default function Layout() {
  return (
    <>
      <section id="container">
        <aside>
          <Aside />
        </aside>
        <section>
          <header>header</header>
          <main>
            {/* 子组件放置的位置 */}
            <Outlet />
          </main>
        </section>
      </section>
    </>
  );
}
