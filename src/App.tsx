import { HashRouter } from "react-router-dom";

// 引入useRoutes
import { GetRouters } from "./router";

function App() {
  return (
    <HashRouter>
      <GetRouters />
    </HashRouter>
  );
}

export default App;
