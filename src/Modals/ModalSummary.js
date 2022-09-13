import { Modal, Form, Input } from 'antd';
import { useState } from 'react';

const ModalSummary = ({content, open , onSubmit, onCancel, data}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [submitForm] = Form.useForm();
  
  const handleOk = () => {
    submitForm.submit();
    setIsModalOpen(false);
    open(false)
    onSubmit("summary")
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    open(false)
    onCancel("summary")
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    data(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
        <Modal title="Summary Edit" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={true}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={submitForm}
                initialValues={content}
                autoComplete="off"
                >
                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Position"
                    name="position"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Linkedin"
                    name="linkedin"
                >
                    <Input />
                </Form.Item>
                </Form>
        </Modal>
    </>
  )
}

export default ModalSummary