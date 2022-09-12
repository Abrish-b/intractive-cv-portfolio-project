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
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Abrham Bunaro',
      role: 'Front-end Developer',
      github: <a href='https://github.com/Abrish-b' target='blank'>Click here!</a>,
      email : 'abrishbunaro@gmail.com'
    },
    {
      key: '2',
      name: 'kaleb Abiy',
      role: 'Back-end Developer',
      github: <a href='https://github.com/KALEB-ABIY' target='blank'>Click here!</a>,
      email : 'Kalebabiy2012@gmail.com'
    },
    {
      key: '3',
      name: 'Melat',
      role: 'Back-end Developer',
      github: <a href='https://github.com/melatsam' target='blank'>Click here!</a>,
      email : 'melatsam555@gmail.com'
    },
    {
      key: '4',
      name: 'Abinet',
      role: 'Back-end Developer',
      github: <a href='https://github.com/abinet508' target='blank' >Click here!</a>,
      email : 'abinatmail@gmail.com'
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