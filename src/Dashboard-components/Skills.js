import { CheckCircleFilled} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import ModalSkills from '../Modals/ModalSkills';
const Skills = ({edit=false, onSubmit , onCancel}) => {
  const [skills, setSkills] = useState(['HTML5','CSS','Js','Python','C','Arduino','React'])
  const [open, setOpen] = useState(edit);
  
  useEffect(() => {
    setOpen(edit)
}, [edit])
  return (
    <>
    <div className='flex flex-col justify-center items-center p-4 gap-y-2'>
        <ul className='w-full flex flex-row justify-around'>
            {skills.map((value, key)=>{return <li key={key} className='flex items-center gap-2'><CheckCircleFilled /><span>{value}</span></li>})}
        </ul>
    </div>
    {open ? <ModalSkills content={skills} open={setOpen} onSubmit={onSubmit} onCancel={onCancel} data={setSkills}/> : ''}
    </>
  )
}

export default Skills