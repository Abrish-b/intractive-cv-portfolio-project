import profile from '../Assets/prof.jpg'
import { MailOutlined,PhoneOutlined, LinkedinOutlined } from '@ant-design/icons'
const Summary = () => {
  const basicInfo = {
      name : "Name of User",
      position : "Job/Position",
      description : "Discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore laboriosam velit, libero voluptates facilis autem! Pariatur placeat, eligendi dolore iure officiis quos, exercitationem accusantium aspernatur reprehenderit possimus, sed culpa?",
      email : 'example@email.com',
      phone : 'Phone Number',
      linkedin : 'LinkedIn'
  }
  return (
    <div className='flex items-center p-4'>
        <div className='flex-none w-44'>
        <img className='w-40 h-40 rounded-full object-cover border-8 border-gray-200 border-solid' src={profile} alt='profile pic'/>
        </div>
        
        <div className='flex-auto flex flex-col p-2'>
            <h1>{basicInfo.name}</h1>
            <h2>{basicInfo.position}</h2>
            <p>{basicInfo.description}</p>
            <div className='flex justify-between items-center'>
            <div className='flex flex-row items-center gap-x-2'><MailOutlined /><div>{basicInfo.email}</div></div>
            <div className='flex flex-row items-center gap-x-2'><PhoneOutlined /><div>{basicInfo.phone}</div></div>
            <div className='flex flex-row items-center gap-x-2'><LinkedinOutlined /> <div>{basicInfo.linkedin}</div></div>
            </div>
        </div>
    </div>
  )
}

export default Summary