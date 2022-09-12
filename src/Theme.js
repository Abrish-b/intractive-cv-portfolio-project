import { useMemo } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card,  Col, Row  } from 'antd';
import theme1 from './Assets/theme1.png'
import theme2 from './Assets/theme2.png'
import theme3 from './Assets/theme3.jpg'
import theme4 from './Assets/theme4.jpg'
import theme5 from './Assets/theme5.jpg'
import theme6 from './Assets/theme6.jpeg'
import theme7 from './Assets/theme7.jpg'
import theme8 from './Assets/theme8.jpg'
import useDevice from './utility';
const { Meta } = Card;

const Theme = () => {
    const device = useDevice();
    const styleFun = useMemo(()=> device.isDesktop !== true ? device.isMobile === true ? 12 : 8 : 6 ,[device])
  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]}>
       <Col span={styleFun}>
       <Card
        cover={
          <img
            className='max-h-96'
            alt="theme1"
            src={theme1}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 1"
          description="This is the description"
        />
     </Card>
       </Col>
       <Col span={styleFun}>
      <Card
        cover={
          <img
          className='max-h-96'
          alt="theme2"
          src={theme2}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 2"
          description="This is the description"
        />
     </Card>
     </Col>

     <Col span={styleFun}>
      <Card
        cover={
          <img
          className='max-h-96'
          alt="theme3"
          src={theme3}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 3"
          description="This is the description"
        />
    </Card>
    </Col>
    <Col span={styleFun}>
    <Card
        cover={
          <img
          className='max-h-96'
          alt="theme4"
          src={theme4}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 4"
          description="This is the description"
        />
     </Card>
     </Col>
     <Col span={styleFun}>
      <Card
        cover={
          <img
          className='max-h-96'
          alt="theme5"
          src={theme5}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 5"
          description="This is the description"
        />
     </Card>
     </Col>
     <Col span={styleFun}>
      <Card
        cover={
          <img
          className='max-h-96'
          alt="theme7"
          src={theme7}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 7"
          description="This is the description"
        />
    </Card>
    </Col>
    <Col span={styleFun}>
    <Card
        cover={
          <img
          className='max-h-96'
          alt="theme8"
          src={theme8}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 8"
          description="This is the description"
        />
     </Card>
     </Col>
     <Col span={styleFun}>
      <Card
        cover={
          <img
          className='max-h-96'
          alt="theme6"
          src={theme6}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Theme 6"
          description="This is the description"
        />
     </Card>
     </Col>
     </Row>
  </div>
  )
}

export default Theme