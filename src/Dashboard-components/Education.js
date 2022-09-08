import { Card } from 'antd';


const Education = () => {
    const education = [
        {key: 1,
            'field': 'Electrical and Computer Engineering',
            'type': 'Degree',
            'institue' : 'Hawassa University',
            'location' : 'Hawassa - Ethiopia',
            'start' : '11-04-2015',
            'end' : '11-05-2021'
        },
        {key: 2,
            'field': 'Software Engineering',
            'type': 'Macro Degree',
            'institue' : 'ALX SE Program',
            'location' : 'Addis Ababa - Ethiopia',
            'start' : '24-03-2021',
            'end' : '16-10-2022'
        },
        {key: 3,
            'field': 'Machine Learning',
            'type': 'Certificate',
            'institue' : 'Nerd And GDG',
            'location' : 'Addis Ababa - Ethiopia',
            'start' : '19-9-2021',
            'end' : '19-10-2021'
        }
    ]
  return (
    <div>
            {education.map((edu)=>{
                return (
                    <Card 
                    key={edu.field}
                    style={{
                        marginTop: 16,
                        width : '100%',
                        boxSizing: 'border-box'
                    }}
                    type="inner" 
                    title={edu.field} 
                    extra={<div className='border-2 border-solid bg-red-50 rounded-lg p-2' >{edu.type}</div>}
                    >
                        <div>From: {edu.institue}</div>
                        <div>Located at: {edu.location}</div>
                        <div>starting from {edu.start} to {edu.end}</div>
                    </Card> 
                )
            })}
    </div>
  )
}

export default Education