import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space , Modal} from 'antd';
import { useState } from 'react';

const ModalSkills = ({content, open , onSubmit, onCancel, data}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [submitForm] = Form.useForm();

  const initial = content.map(element => {
    return { Skill : element}
  });
  
  const handleOk = () => {
    submitForm.submit();
    setIsModalOpen(false);
    open(false)
    onSubmit("skill")
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    open(false)
    onCancel("skill")
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    const {skills} = values;
    data(skills.map(item => item.Skill));
  };

  return (
    <>
    <Modal title="Summary Edit" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={true}>
    <Form form={submitForm} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" >
          <Form.List name="skills" initialValue={initial}>
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
                  name={[name, 'Skill']}
                >
                  <Input placeholder="Skill" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item className='flex justify-center'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="w-80">
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
          </Form.List>
    </Form>
    </Modal>
</>
  )
}

export default ModalSkills