import { Card, Col, Row } from 'antd';


const Experience = () => {
    const experience = [
        {key: 1,
            'job': 'Network Engineer',
            'company' : 'Intracom',
            'start' : '11-04-2019',
            'end' : '11-11-2019'
        },
        {key: 2,
            'job': 'Junior Front-end Developer',
            'company' : 'Hurricane',
            'start' : '24-03-2019',
            'end' : '16-10-2020'
        },
        {key: 3,
            'job': 'Software Engineer',
            'company' : 'VideoBet',
            'start' : '19-04-2022',
            'end' : 'present'
        }
    ]
  return (
    <div className='p-4'>
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {experience.map((exp)=>{
                return (
                <Col span={8} key={exp.job}>
                        <Card title={exp.job} bordered={true} bodyStyle={{ width: '100%'}} style={{ textAlign: 'center', borderRadius: '20px', boxSizing: 'border-box', padding: '10px', boxShadow: '-1px 1px 23px -8px rgba(0,0,0,0.75)' }} >
                            <h2 className='w-full'>Company: {exp.company}</h2>
                            <p>Worked from {exp.start} to {exp.end}</p>
                        </Card>
                    </Col>
                )
                })}
            </Row>
        </div>
    </div>
  )
}

export default Experience