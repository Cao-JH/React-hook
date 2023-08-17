import { HashRouter } from "react-router-dom";

// 引入useRoutes
import { GetRouters } from "./router";
// 引入路由守卫
import BeforeRouter from "./components/beforeRouter";

function App() {
  return (
    <HashRouter>
      <BeforeRouter>
        <GetRouters />
      </BeforeRouter>
    </HashRouter>
  );
}

export default App;
