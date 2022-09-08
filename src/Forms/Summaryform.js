import { Form, Input, Upload, Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Summaryform = () => {

  const [submitted, setSubmitted] = useState(false)

  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e?.fileList;
  };
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
      };
      /* eslint-disable no-template-curly-in-string */
      
      const validateMessages = {
        required: '${label} is required!',
      };
      /* eslint-enable no-template-curly-in-string */

      
    const onFinish = (values) => {
        console.log(values);
        setSubmitted(true);
    }

     return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="p-4">
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'position']} label="Job/Position" rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="email" rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="Phone Number" rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'LinkedIn']} label="LinkedIn" rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'description']} label="Description" rules={[
          {
            required: true,
          },
        ]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="Photo"
        label="Profile Picture"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" disabled={submitted}>
          {submitted ? 'Done!' : 'Submit'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Summaryform