import { Outlet, Link } from "react-router-dom";
// 引入样式
import "./index.scss";

export default function Layout() {
  return (
    <>
      <section id="container">
        <aside>
          <div>
            <Link to="/">控制台</Link>
          </div>
          <div>
            <Link to="/user">用户</Link>
          </div>
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
