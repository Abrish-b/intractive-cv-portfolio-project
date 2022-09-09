import React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from "./Assets/logo-removebg-preview.png"
import profile from './Assets/prof.jpg'
import { DesktopOutlined, FormatPainterOutlined , DownloadOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu , Button } from 'antd';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const { Header, Content, Footer, Sider } = Layout;

const navItems = [{
    key: '1',
    icon: <HomeOutlined />,
    label: 'Home'
    }, 
    {
        key: '2',
        icon: <FormatPainterOutlined />,
        label: 'Themes'
    },
    {
        key: '3',
        icon: <InfoCircleOutlined />,
        label: 'About'
    
    }]


const Dashboard = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const [collap, setcollap] = useState(false);
    const [onPage , setOnPage] = useState('Home');
    const changeCont = (key) =>{
        switch (key) {
            case '1':
                setOnPage('Home')
                navigate('')
                break;
            case '2':
                setOnPage('Themes')
                navigate('themes')
                break;
            case '3':
                setOnPage('About')
                navigate('about')
                break;  
            default:
                break;
        }
    }
    const download = useReactToPrint({
        content: () => ref.current,
      });
    const preview =  () => {
        // console.log('Preview pdf');
        navigate('/preview');
    }
  return (
    <div>
        <Layout hasSider>
            <Sider
            style={{
                overflow: 'auto',
                height: '100%',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            collapsible= {true}
            collapsed={collap}
            onCollapse={(value) => setcollap(value)}
            breakpoint = 'md'
            onBreakpoint={(broken)=>{
                setcollap(broken)
            }}
            >
            <div className="logo"><img src={logo} alt='logo'/></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={navItems} onClick={({ key, keyPath, domEvent }) => changeCont(key)}/>
            </Sider>
            <Layout
            className="site-layout"
            style={collap ? {
                marginLeft: 80,
            }:
            {
                marginLeft: 200,
            }}
            >
            <Header
                className="site-layout-background"
                style={{
                padding: 0,
                }}
            >   <div className='flex flex-row-reverse items-center ml-4 mr-4'>
                    <img className='m-2 w-12 h-12 rounded-full object-cover' src={profile} alt='profile pic'/>
                    <h2 className='pr-2'>UserName</h2>
                    {onPage === 'Home' ? <div className='mr-auto flex flex-row-reverse gap-x-2'> <Button type="default" shape="round" icon={<DesktopOutlined />} onClick={preview}>
                        Preview
                    </Button>
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={download}>
                        Download PDF
                    </Button> </div>: <h1 className='mr-auto'>Interactive CV</h1>}
                    
                </div>
            </Header>
                <Content
                    style={{
                    margin: '24px 16px 0',
                    overflow: 'initial',
                    }} ref={ref}>

                    <Outlet />

                    {/* <Routes element={<Dashboard />}>
                        <Route path="/" element={<Dashboardwrapper />} />
                        <Route path="/themes" element={<Theme />} />
                        <Route path="/about" element={<About />} />
                    </Routes>  */}
                       
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