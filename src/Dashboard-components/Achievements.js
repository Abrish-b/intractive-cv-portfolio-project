import { Card, Col, Row } from 'antd';

const Achievements = () => {
    const achievements = [
        {
            title : "Video and Text Chat APP",
            company : "ALX",
            location : "Addis Ababa, Ethiopia",
            discription: "A video call and texting App demonstration and implementation made as a portfolio website for ALX SE programme",
            link : 'https://videomessengerapp.heroku.app',
            start : 'May 2022',
            end : 'Jun 2022'
        },
        {
            title : "Movies and Series Streaming Site",
            company : "Videobet",
            location : "Addis Ababa, Ethiopia",
            discription: "A streaming platform for English and Amharic Movies and Series for free. the concept here is to address the community that cannot pay for Netflix, Hulu, Disney+ ...etc",
            link : 'https://videobet.et',
            start : 'Feb 2020',
            end : 'Apr 2020'
        },
        {
            title : "Agricultural UAV(Drone) monitoring system",
            company : "Hawassa Univeristy",
            location : "Hawassa, Ethiopia",
            discription: "A monitoring system with an API and A website to access a field data and Image take by our drone specifically equipped with our payload and sensors.",
            link : '',
            start : 'Apr 2020',
            end : 'jun 2022'
        },
        {
            title : "Automatic handsfree hand wash",
            company : "Entreprenuership",
            location : "Addis Ababa, Ethiopia",
            discription: "it was a corona time and coronavirus primary transmission is contact. so, in order to mitigate that for any public or personal use, I designed and built a handsfree hand wash using Arduino.",
            link : '',
            start : 'Feb 2020',
            end : 'Apr 2020'
        },
        {
            title : "Automatic Water Dispenser with coin detector",
            company : "Hawassa Univeristy",
            location : "Hawassa, Ethiopia",
            discription: "It is a replica of Vending machine but instead of Good it will provide clean water for a few cents for those areas that are scared of water.",
            link : '',
            start : 'Jul 2018',
            end : 'Sep 2018'
        },
        {
            title : "Humudity and Temprature Control (AC system) with Arduino",
            company : "Hawassa Univeristy",
            location : "Hawassa, Ethiopia",
            discription: "it is an AC system that controls Air conditions in a home by automatically detecting and adjusting temperature",
            link : '',
            start : 'Feb 2017',
            end : 'Apr 2017'
        },
    ]
  return (
    <div className='p-4'>
        <div className="site-card-wrapper">
            <Row gutter={[16, 24]}>
                {achievements.map((ach)=>{
                return (
                <Col span={12} key={ach.title} >
                        <Card title={ach.title} bordered={true} bodyStyle={{ width: '100%'}} style={{ textAlign: 'center', borderRadius: '20px', boxSizing: 'border-box', padding: '10px', boxShadow: '-1px 1px 23px -8px rgba(0,0,0,0.75)' }} extra={ach.link !== '' ? <a href={ach.link} target='blank' >details here!</a> : false} >
                            <h2 className='w-full'>Company: {ach.company}</h2>
                            <p>{ach.discription}</p>
                            <p>Worked from {ach.start} to {ach.end}</p>
                        </Card>
                    </Col>
                )
                })}
            </Row>
        </div>
    </div>
  )
}

export default Achievements