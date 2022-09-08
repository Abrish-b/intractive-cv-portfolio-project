import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Achievements from './Achievements';
import Certficate from './Certficate';

const Dashboardwrapper = () => {
    const gridStyle = {
        width: '100%',
        textAlign: 'left',
      };
  return (
    <div
    className="site-layout-background"
    style={{
        padding: 24,
        textAlign: 'center',
    }}
    >
    <Card title="Curriculum Vitate">
        <Card title="Summary" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6' }} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Summary />
        </Card>
        <Card title="Skills" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Skills />
        </Card>
        <Card title="Experience" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Experience />
        </Card>
        <Card title="Education" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Education />
        </Card>
        <Card title="Language" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Language />
        </Card>
        <Card title="Achievements/Projects" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Achievements />
        </Card>
        <Card title="Certifications" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined />}>
            <Certficate />
        </Card>
    </Card>
    
    </div>
  )
}

export default Dashboardwrapper