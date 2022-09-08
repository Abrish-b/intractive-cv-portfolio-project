import { CheckCircleFilled} from '@ant-design/icons'
const Skills = () => {
    const skills = ['HTML5','CSS','Js','Python','C','Arduino','React']
  return (
    <div className='flex flex-col justify-center items-center p-4 gap-y-2'>
        <ul className='w-full flex flex-row justify-around'>
            {skills.map((value, key)=>{return <li key={key} className='flex items-center gap-2'><CheckCircleFilled /><span>{value}</span></li>})}
        </ul>
    </div>
  )
}

export default Skills