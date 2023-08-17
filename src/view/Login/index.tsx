import "./index.scss";

// 引入SVG
import reactSvg from "../../assets/react.svg";

// 引入组件
import LoginForm from "./components/loginForm";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-mask">
          <div className="login-form">
            <img src={reactSvg} alt="" />
            <h1>React + Hook</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
