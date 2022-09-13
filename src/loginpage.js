import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd'
import {NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react';
function Loginpage() {
    const [error, setError] = useState(undefined);
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      //   const requestOptions = {
      //     method: 'POST',
      //     headers: { 
      //       "access-control-allow-origin" : "*",
      //       'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       username : "TestAcc",
      //       password : "halo1234"
      //   })
      // };
      // fetch('https://kaleb.pythonanywhere.com/api/login', requestOptions)
      // .then(response => response.json())
      // .then(data =>{
      //   if (data.message === "user logged in"){
      //     navigate(`/dashboard:${data.username}`)
      //   }
      //   else if (data.message === "Incorrect Login credentials"){
      //     setError("Incorrect Login credentials");
      //   }
        
      // });

        navigate("/dashboard")
      };
      
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError("Oops error! please try again!")
    };  

  return (
    <div>
        {error && <div className='text-center text-red-500 py-3'>{ error }</div>}
        <Form
      name="normal_login"
      className="max-w-xs login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            type: 'username',
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
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
