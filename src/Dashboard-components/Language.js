import { CheckCircleFilled} from '@ant-design/icons'
const Language = () => {
    const lang = ['Amharic', 'English', 'French']
  return (
    <div className='flex flex-col justify-center items-center p-4 gap-y-2'>
        <ul className='w-full flex flex-row justify-around'>
            {lang.map((value, key)=>{return <li key={key} className='flex items-center gap-2'><CheckCircleFilled /><span>{value}</span></li>})}
        </ul>
    </div>
  )
}

export default Language