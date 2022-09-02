import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Reset = () => {
    let navigate = useNavigate();
    const [form] = Form.useForm();
     const [message, setMessage] = useState(undefined)
  
    const onFinish = (values) => {
      console.log('Finish:', values);
      setMessage('Check your Email!')
      navigate('/passwordUUID')
    };

  return (
    <div>
        <div className='text-center text-green-500 py-2'>{message}</div>
    <Form
      name="Reset-pass"
      className="login-form"
      form={form}
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
         <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <div className='text-center'>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Send Confirmation
        </Button>
      </Form.Item>
      </div>
      
    </Form>
    </div>
  )
}

export default Reset