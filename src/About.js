import { Table } from 'antd';

const About = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Github',
      dataIndex: 'github',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Abrham Bunaro',
      role: 'Front-end Developer',
      github: 'https://github.com/Abrish-b',
    },
    {
      key: '2',
      name: 'kaleb Abiy',
      role: 'Back-end Developer',
      github: 'https://github.com/Abrish-b',
    },
    {
      key: '3',
      name: 'Melat',
      role: 'Back-end Developer',
      github: 'https://github.com/Abrish-b',
    },
    {
      key: '4',
      name: 'Abinet',
      role: 'Back-end Developer',
      github: 'https://github.com/Abrish-b',
    },
  ];

  return (
    <div style={{minHeight: '83vh'}}>
      <h1 className='text-center'>About US</h1>
      <p className='text-center' >
        free cv Generation project developed as portfolio project for ALX SE program for 2022
      </p>
      <h1>Team</h1>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}

export default About