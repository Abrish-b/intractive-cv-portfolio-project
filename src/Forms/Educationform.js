import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, DatePicker } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;

const Educationform = () => {
  const [submitted, setSubmitted] = useState(false)
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        setSubmitted(true);
      };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
          <Form.List name="users">
          {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'field']}
                >
                  <Input placeholder="field" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                >
                  <Input placeholder="Degree/Diploma" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'institute']}
                >
                  <Input placeholder="Institue" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'location']}
                >
                  <Input placeholder="Location" />
                </Form.Item>
                <Space direction="vertical" size={12}>
                <RangePicker />
                </Space>
            
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item className='flex justify-center'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="w-80">
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
          </Form.List>
          <Form.Item >
        <Button type="primary" htmlType="submit" disabled={submitted}>
        {submitted ? 'Done!' : 'Submit'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Educationform