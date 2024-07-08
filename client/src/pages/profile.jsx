import React, { useContext, useEffect, useRef, useState} from 'react';
import classes from './style.module.css';
import { Context } from '../index.js';
import MyHeader from '../components/UI/header/MyHeader.jsx';
import SetingsPanel from '../components/UI/setingPanel/setingsPanel.jsx';
import Footer from '../components/UI/Footer/Footer.jsx';
import { Link } from 'react-router-dom';
import NotFoundPage from '../components/NotFound/notFound.jsx'

const Profile = () => {
    const check = 1;
    const {store} = useContext(Context);
    const userId = store.user.id
    const [userCompleted,setCompleted] = useState(null);
    const [quest,setQuest] = useState(null);
    const [stages,setStages] = useState(false);
    const [courseTitle, setCourseTitle] = useState('');
    const [circleStyle, setCircleStyle] = useState({});
    const [CourseID, setCourseID] = useState(0);
    const [cntstg,setCntstg] = useState(0);

    const progress = useRef();
    const course = useRef();
    const [countQuests,setCountQuests] = useState(null);
    const result = (userCompleted/countQuests)*100;
    const proccent = parseInt(result);
    const isActive = 0


    const getAll = async()=>{ 
        try{ 
            const result = await store.getAll()
            if(result){ 
                const count = result&&result[0].data;
                setCountQuests(parseInt(count))
            }
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }

    const userCompl = async()=>{
        try{
            const countCompleted = await store.countCompleted(userId);
            const count = countCompleted&&countCompleted[0].data;
            setCompleted(parseInt(count))
        }catch(e){ 
            console.log(e);
        }
    }
    const getQuest = async()=>{
        try{
           const Quests = await store.getQuests();
           setQuest(Quests)
           console.log(Quests)
        }catch(e){
            console.log(e)
        }
    } 
    const getStages = async (name, course_id) => { 
        try {
            const stages = await store.getStages(parseInt(course_id));
            setStages(stages);
            setCourseTitle(name);
            setCourseID(course_id)
        } catch (e) {
            console.log(e.response.data);
        }
    }
    const countStage = async () =>{ 
        try{ 
            const count = await store.userStage(userId)
            const resultCount = count&&count[0].data
            setCntstg(resultCount)
        }catch(e){
            console.log(e);
        };
    };
    const progressMath = () => {
        if(progress.current){
            const circle = progress.current;
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            const progressStyle = {
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: circumference
            };

            setCircleStyle(progressStyle);
            const setProgress = (percent) => {
                const offset = circumference - (percent / 100) * circumference;
                const updatedStyle = { ...progressStyle, strokeDashoffset: offset };
                setCircleStyle(updatedStyle);
            };

            setProgress(proccent);
        }
    };
    useEffect(()=>{
        userCompl();
        getQuest();
        getAll();
        progressMath();
        countStage();
    },[])
    useEffect(()=>{
        progressMath();
    },[userCompleted])
    const ShowCompleted = ()=>{ 
        return( 
        <div className={classes.gameCmplWrapper}>
            <div className={classes.cicle__conteiner}>
                <div className={classes.progress_count}><span className={classes.user__proccent}>{proccent}%</span></div>
                <svg width={'100%'} height={320}>
                    <circle className={classes.Progress_bar}  fill='transparent' stroke='#b6b6b64a' stroke-width={8} cx={160} cy={160} r={130}/>
                    <circle className={`${classes.Progress_bar} ${classes.user_progress}`} ref={progress} fill='transparent' stroke='#4eb543' stroke-width={8} cx={160} cy={160} r={130} style={circleStyle}/>
                </svg>
                <div className={classes.completed__conteiner}><span>{userCompleted}</span><span>из</span><span>{countQuests}</span><p>заданий пройдено</p></div>
            </div>
            <div style={{display:"flex"}}>
                <div className={classes.card_completed_container}>
                    {quest && quest[0].data.map((item,index)=>(
                    <div className={classes.card_quest} id={index} ref={course} key={index} onClick={()=>{getStages(item.name,item.course_id)}}><img src={item.image} alt="" /></div>  
                    ))}
                </div>
                <div className={classes.all_quest_course}><div className={classes.course_viwe}>{stages?<div className={classes.stages__container}><div className={classes.stages__title}>Тренажёр«<Link to={`/pages/stages.jsx?course=${CourseID}&stage=${0}`} style={{color:"white"}}>{courseTitle} »</Link></div>{stages&&stages[0].data.map((item,index)=>(<div className={classes.stage}><Link to={`/pages/stages.jsx?course=${CourseID}&stage=${index}`} className={classes.stage_name}> <span>Часть {index+1}.</span>{item.name}</Link><div><progress className={classes.progress_line} value={proccent} max="100"></progress><span className={classes.user__stats}>23/23</span></div></div>))}</div>:'Нажмите на иконку тренажера чтоб увидеть информацию'}</div></div>
            
            </div>
        </div> 
          
        )
    }
    if(check === 1){ 
        if(store.isAuth){
            return (
              <main>
                <MyHeader></MyHeader>
                <SetingsPanel isActive={isActive}/>
                <div className={classes.wrapper}>
                    <div className={classes.blockConetnt}>
                        <div className={classes.profileBlock}>
                            <div className={classes.profileInner}>
                                <div className={classes.userContent}>
                                    <div className={classes.userAvatar}>
                                        <a className={classes.imageWrp} to="">
                                        <img className={`${classes.imageProfileAccount} ${classes.cropImg}`} src={store.user.image} alt="" srcset="" />
                                        </a>
                                        <div className={classes.textInnerWrapper}>
                                            <a className={classes.nameTxt}>{store.user.username}</a>
                                            
                                           
                                        </div>
                                    </div>                 
                                </div>
                                <div className={classes.progressBar}>
                                    <div className={classes.questComplt}><span>{userCompleted}</span>Заданий</div>
                                    <div className={classes.questComplt}><span>{cntstg}</span>Этапов</div>
                                </div>
                                <div className={classes.progress__title}><p>Статистика пройденых заданий</p></div>
                                    <div className={`${classes.progressBar} ${classes.noColor} ${classes.achv}`}>
                                        <ShowCompleted />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
              </main>
            )
          }
    }else{ 
        return( 
            <NotFoundPage/>
        )
    }
    
  
}

export default Profile