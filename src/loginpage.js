import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd'
import {NavLink, useNavigate} from 'react-router-dom'
// import { useState } from 'react';
function Loginpage() {
    // const [error, setError] = useState(undefined);
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate("/dashboard")
      };
      
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //     setError("Oops error! please try again!")
    // };  

  return (
    <div>
        {/* <div className='text-center text-red-500 py-3'>{ error }</div> */}
        <Form
      name="normal_login"
      className="max-w-xs login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <NavLink className="login-form-forgot" to="/reset-pass">
          Forgot password
        </NavLink>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <NavLink to="/register">register now!</NavLink>
      </Form.Item>
    </Form>
   </div>
  )
}

export default Loginpage
