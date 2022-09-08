import { Button, message, Steps ,Card } from 'antd';
import { RightCircleOutlined , LeftCircleOutlined , CheckCircleOutlined} from '@ant-design/icons'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Summaryform from './Forms/Summaryform';
import Skillsform from './Forms/Skillsform';
import Experienceform from './Forms/Experienceform';
import Educationform from './Forms/Educationform';
import Languageform from './Forms/Languageform';
import Achevementform from './Forms/Achevementform';
import Certificatefrom from './Forms/Certificatefrom';
const { Step } = Steps;

const steps = [
    {
      title: 'Summary',
      content: <Summaryform />,
    },
    {
      title: 'Skills',
      content: <Skillsform />,
    },
    {
      title: 'Experience',
      content: <Experienceform />,
    },
    {
      title: 'Education',
      content: <Educationform />,
    }
    ,
    {
      title: 'Language',
      content: <Languageform />,
    }
    ,
    {
      title: 'Achievements',
      content: <Achevementform />,
    },
    {
      title: 'Certifications',
      content: <Certificatefrom />,
    }
  ];

const Cvdetail = () => {
    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
  return (
    <Card style={{minWidth :'80vw' , minHeight: '60vh'}}>
    <div className='p-4'>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-action flex justify-between ">
      {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            icon={<LeftCircleOutlined />}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" icon={<RightCircleOutlined />} onClick={() => next()}>
            Next
          </Button>
        )}  
        {current === steps.length - 1 && (
          <Button type="primary" icon={<CheckCircleOutlined />} onClick={() => {
            message.success('Processing complete!')
            navigate('/dashboard')
          }}>
            Done
          </Button>
        )}
      </div>
      <div className="steps-content">{steps[current].content}</div>
      
    </div>
    </Card>
  )
}

export default Cvdetail