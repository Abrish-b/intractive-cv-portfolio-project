import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Achievements from './Achievements';
import Certficate from './Certficate';
import { useReducer } from 'react';

const ACTIONS = {
    EDITSUM : 'editSum',
    EDITSKILL : 'editSkill',
    EDITEXP : 'editExp',
    EDITEDU : 'editEdi',
    EDITLANG : 'editLang',
    EDITACH : 'editAch',
    EDITCERT : 'editCert'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.EDITSUM:
            return  {...state, IsSummaryEditable : true}
        case ACTIONS.EDITSKILL:
            return   {...state, IsSkillsEditable : true}
        case ACTIONS.EDITEXP:
            return   {...state, IsExperienceEditable : true}
        case ACTIONS.EDITEDU:
            return   {...state, IsEducationEditable : true}
        case ACTIONS.EDITLANG:
            return   {...state, IsLanguageEditable : true}
        case ACTIONS.EDITACH:
            return   {...state, IsAchievementsEditable : true}
        case ACTIONS.EDITCERT:
            return   {...state, IsCertficateEditable : true}
        default:
            break;
    }
}

const Dashboardwrapper = (props, ref) => {
    const gridStyle = {
        width: '100%',
        textAlign: 'left',
      };
      const editState = {
        IsSummaryEditable : false,
        IsSkillsEditable : false,
        IsExperienceEditable : false,
        IsEducationEditable : false,
        IsLanguageEditable : false,
        IsAchievementsEditable : false,
        IsCertficateEditable : false
    }

    const [state, dispatch] = useReducer(reducer, editState)
  return (
    <div
    className="site-layout-background"
    style={{
        padding: 24,
        textAlign: 'center',
    }}
    >
    <Card title="Curriculum Vitate">
        <Card title="Summary" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6' }} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITSUM})}/>}>
            <Summary edit={state.IsSummaryEditable}/>
        </Card>
        <Card title="Skills" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITSKILL})} />}>
            <Skills />
        </Card>
        <Card title="Experience" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITEXP})}/>}>
            <Experience />
        </Card>
        <Card title="Education" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITEDU})}/>}>
            <Education />
        </Card>
        <Card title="Language" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITLANG})}/>}>
            <Language />
        </Card>
        <Card title="Achievements/Projects" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITACH})}/>}>
            <Achievements />
        </Card>
        <Card title="Certifications" headStyle={{textAlign: 'center' , backgroundColor: '#d5b0b6'}} hoverable={true} style={gridStyle} extra={<EditOutlined onClick={() => dispatch({type : ACTIONS.EDITCERT})}/>}>
            <Certficate />
        </Card>
    </Card>
    
    </div>
  )
}

export default Dashboardwrapper;