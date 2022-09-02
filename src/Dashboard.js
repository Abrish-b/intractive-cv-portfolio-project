import React from 'react';
import logo from "./Assets/logo-removebg-preview.png"
import profile from './Assets/prof.jpg'
import {
    FormatPainterOutlined,EditOutlined, DownloadOutlined, HomeOutlined, FilePdfOutlined, InfoCircleOutlined,
  } from '@ant-design/icons';

import { Layout, Menu , Button, Card} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const navItems = [{
    key: '1',
    icon: React.createElement(HomeOutlined),
    label: 'Home'
},{
    key: '2',
    icon: React.createElement(FilePdfOutlined),
    label: 'CV'
}, {
    key: '3',
    icon: React.createElement(FormatPainterOutlined),
    label: 'Themes'
},
{
    key: '4',
    icon: React.createElement(InfoCircleOutlined),
    label: 'About'
   
}]

const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

const Dashboard = () => {
 const download=  () => {
      console.log('download pdf');
 }
  return (
    <div>
        <Layout hasSider>
            <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            >
            <div className="logo"><img src={logo} alt='logo'/></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={navItems} />
            </Sider>
            <Layout
            className="site-layout"
            style={{
                marginLeft: 200,
            }}
            >
            <Header
                className="site-layout-background"
                style={{
                padding: 0,
                }}
            >   <div className='flex flex-row-reverse items-center ml-4 mr-4'>
                    <img className='m-2 w-12 h-12 rounded-full' src={profile} alt='profile pic'/>
                    <h2>UserName</h2>
                    <Button className='mr-auto' type="default" shape="round" icon={<EditOutlined />} onClick={download()}>
                        Edit CV
                    </Button>
                    <Button className='mr-2' type="primary" shape="round" icon={<DownloadOutlined />} onClick={download}>
                        Download PDF
                    </Button>
                    
                </div>
            </Header>
            <Content
                style={{
                margin: '24px 16px 0',
                overflow: 'initial',
                }}
            >
                <div
                className="site-layout-background"
                style={{
                    padding: 24,
                    textAlign: 'center',
                }}
                >
                <Card title="Curriculum Vitate">
                    <Card.Grid style={gridStyle}>Summary</Card.Grid>
                    <Card.Grid style={gridStyle}>Skills</Card.Grid>
                    <Card.Grid style={gridStyle}>Work Experience</Card.Grid>
                    <Card.Grid style={gridStyle}>Education</Card.Grid>
                    <Card.Grid style={gridStyle}>Language</Card.Grid>
                    <Card.Grid style={gridStyle}>Achievements</Card.Grid>
                    <Card.Grid style={gridStyle}>Certifications</Card.Grid>
                </Card>
                
                </div>
            </Content>
            <Footer
                style={{
                textAlign: 'center',
                }}
            >
                Interactive cv ©2022 
            </Footer>
            </Layout>
        </Layout>
    </div>
  )
}

export default Dashboard