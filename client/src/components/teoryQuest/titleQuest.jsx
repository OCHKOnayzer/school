import React ,{useContext, useEffect, useState}from 'react'
import classes from './style/style.module.css'
import { Context } from '../../index.js';
const TitleQuest = ({title,quest_id}) => {
    const {store} = useContext(Context);
    const user_id = store.user.id;
    const [completed,setCompleted] = useState(false)
    const findComplete = async()=>{ 
        try{ 
          const result = await store.findCompleted(quest_id,user_id);
          if(result){
            const bool = result&&result[0].data
            setCompleted(bool)
          }
        }catch(e){ 
          console.log(e);
        }
      }
      useEffect(()=>{ 
        findComplete()
      },[])
      useEffect(()=>{ 
        findComplete()
      },[quest_id])
  return (
    <div style={{display:"flex"}} className={classes.title__conteiner}>
        <span className={classes.title }>{title}</span>
        {completed?<div style={{width:"5%",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{background:"#35362d",width:"80%",height:"60%",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9"><path fill="none" stroke="#4eb543" stroke-width="2" d="M1 2.746l4.5 4.5 6.125-6.125"/></svg></div></div>:''}
    </div>
  )
}

export default TitleQuest