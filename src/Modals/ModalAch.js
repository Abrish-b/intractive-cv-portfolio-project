import { Modal, Form } from 'antd';
import { useState } from 'react';

const ModalAch = ({content, open , onSubmit, onCancel, data}) => {
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
  
  return (
    <>
    <Modal title="Summary Edit" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={true}>
        <h1>modal for Achievements</h1>
    </Modal>
    </>
  )
}

export default ModalAch