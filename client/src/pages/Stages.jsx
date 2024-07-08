import React, { useState,useContext, useEffect } from 'react'
import classes from './style.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MyHeader from '../components/UI/header/MyHeader';
import Footer from '../components/UI/Footer/Footer';
import { Context } from '..';

const Stages = () => {
    const { store } = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const courseId = searchParams.get('course');
    const stageId = searchParams.get('stage');
    const id = parseInt(courseId)

    const [stages,setStages] = useState(null)
    const [stageName,setStageName] = useState('');
    const [maxPart,setMaxPart] = useState(null)
    const [quests, setQuests] = useState(null)
    const [QuestId,setQuestId] = useState(id)

    const getStages = async() =>{ 
        try{
            const response = await store.getStages(QuestId)
            setStages(response)
            console.log(response) 
            
        }catch(e){
         console.log(e)
        }
     }
    const stageInfo = async() =>{ 
        try{ 
            const response = await store
        }catch(e){ 
            console.log(e)
        }
    }
    const getQuests = async()=>{ 
        try{ 
            const response = await store.getQuetsByStageId(parseInt(stageId)+1,id);
            console.log(response)
            setQuests(response);
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }
    const relocate = ()=>{ 
        const value = stages&&stages[0].data.length
        setMaxPart(value)
        if(value===3){
            console.log('hello world')
        }
        if(!courseId||!stageId){ 
            window.location.replace('/')
        }else if(stageId>maxPart){ 
            window.location.replace('/')
        }
        // if(){ 
            
        // }
    }
    useEffect(() => {
        getStages();
        getQuests()
        relocate();
    },[]);
    useEffect(()=> {
        getQuests();
    },[stageId])
    const StageController = ()=>{ 
        return( 
            <div className={classes.select_wrapper}>
                {stages&&stages[0].data.map((item,index)=>( 
                    <div stage={index} className={`${classes.select__stages} ${stageId==index?classes.activeSatge:''} `}>
                        <div><span className={classes.stageNumber}>{index+1}.</span><Link to={`/pages/stages.jsx?course=${courseId}&stage=${index}`} style={{color:"white",textDecoration:"none"}}>{item.name}</Link></div>
                    </div>
                ))}
            </div>
        )
    }
    const StageQuetsController = ()=> {
        return(
            <div className={classes.stage_quests_wrapper}>
                {quests&&quests[0].data.map((item,index)=>(
                <div className={classes.stage__quest}>
                    <div className={classes.quest_inner}><Link style={{height:"100%",display:"flex",alignItems:"center",width:"100%"}} to={`/pages/textArea.jsx?course=${courseId}&quest=${index+1}&questInditificator=${item._id}&stage=${parseInt(stageId)+1}`}><span>{index+1}.</span>{item.name}</Link></div>
                </div>
                 ))}    
            </div>
        )        
    }
  return (
    <main>
        <MyHeader></MyHeader>
        <div className={classes.wrapper}>
            <div className={classes.stages_container}>
                <div className={classes.stage_content__left}>
                    <StageController/>
                </div>
                <div className={classes.stage_content__right}>
                    <div className={classes.stage_title}>
                        <span>Часть {parseInt(stageId)+1}:</span>
                        <h1>Изучение HTML И CSS</h1>
                            
                        <Link to={`/pages/textArea.jsx?course`} style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",background:"#302683"}} className={classes.buttonSubscribe}>Начать</Link>
                    </div>
                    <StageQuetsController/>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default Stages