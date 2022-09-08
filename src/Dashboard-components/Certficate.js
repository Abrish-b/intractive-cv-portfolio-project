import { Card } from 'antd';

const Certficate = () => {
    const certficates = [
        {
            title : "Graphics and Web Design Program",
            institue : "Gobeze plc",
            location : "Addis Ababa, Ethiopia",
            type: "Certification of completion",
            start : 'Jul 2019',
            end : 'Sep 2022'
        },
        {
            title : "Unmanned Areal vehicle for Agriculture",
            institue : "Gobeze plc",
            location : "Addis Ababa, Ethiopia",
            type: "Certification of completion",
            start : 'Apr 2020',
            end : 'Sep 2020'
        },
        {
            title : "Robotics",
            institue : "GDG and TECH CAMP Ethiopia",
            location : "Addis Ababa, Ethiopia",
            type: "Certification of completion",
            start : 'May 2022',
            end : 'Jul 2022'
        },
        {
            title : "AI and Machine learning",
            institue : "GDG, TECH CAMP Ethiopia and NERD Center",
            location : "Addis Ababa, Ethiopia",
            type: "Certification of completion",
            start : 'Mar 2022',
            end : 'May 2022'
        } 
    ]
  return (
    <div>
            {certficates.map((cert)=>{
                return (
                    <Card
                    key={cert.title} 
                    style={{
                        marginTop: 16,
                        width : '100%',
                        boxSizing: 'border-box'
                    }}
                    type="inner" 
                    title={cert.title} 
                    extra={<div className='border-2 border-solid bg-red-50 rounded-lg p-2' >{cert.type}</div>}
                    >
                        <div>From: {cert.institue}</div>
                        <div>Located at: {cert.location}</div>
                        <div>starting from {cert.start} to {cert.end}</div>
                    </Card> 
                )
            })}
    </div>
  )
}

export default Certficate