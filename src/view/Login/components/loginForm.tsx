import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function LoginForm() {
  const navigate = useNavigate();

  // 登陆成功
  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
    navigate("/layout/home");
  };

  // 登陆失败
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        style={{ maxWidth: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[
            { required: true, message: "用户名不能为空!" },
            // () => ({
            //   validator(_, value) {
            //     if (!value) {
            //       return Promise.resolve();
            //     }
            //     return Promise.reject(new Error("自定义校验"));
            //   },
            // }),
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "密码不能为空!" }]}
        >
          <Input.Password
            prefix={<UnlockOutlined />}
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 4, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit" block>
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
