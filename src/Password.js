import { Button, Form, Input } from 'antd';

const Password = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Finish:', values);
      };
  return (
    <div>
    <Form
      name="Set-pass"
      className="login-form"
      form={form}
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
         <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <div className='text-center'>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Set Password!
        </Button>
      </Form.Item>
      </div>
      
    </Form>
    </div>
  )
}

export default Password