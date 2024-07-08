import React, { useContext, useEffect, useState } from 'react'
import classes from './style.module.css'
import MyHeader from '../components/UI/header/MyHeader';
import Footer from '../components/UI/Footer/Footer';
import { Context } from '..';
import { Link } from 'react-router-dom';

const SelectionQuets = () => {
  const [category,setCategory] = useState(null);
  const [quest, setQuest] = useState(null);
  const { store } = useContext(Context);

  const courseCategory = async()=>{ 
    const getCategory = await store.getCourseCategory();
    setCategory(getCategory);
  }

  const quests = async() => { 
    const getAllQuests = await store.getQuests();
    setQuest(getAllQuests)
  }

  useEffect(()=>{ 
    courseCategory()
    quests()
  },[])

  return (
    <main>
      <MyHeader/>
       <div className={classes.wrapper}>
           <div className={classes.courses_container}>
            <div className={classes.category_title}>
              <h1>Курсы для новичков</h1>
            </div>
           {category && category[0].data.map((item,index)=>(
              <div id={item} className={classes.course__conteiner}>
                <div>
                  <h2>Курс «{item.name}»</h2>
                  <span className={classes.course__discription}>
                    {item.discription}
                  </span>
                </div>
                <div className={classes.cardCategory_wrapper}>
                  {quest && quest[0].data.filter(questItem => questItem.category_id === item.category_id).map((itemQuest, index) =>(
                    <div className={classes.card}>
                        <div className={classes.cardContent}>
                            <img style={{borderRadius:"50%",height:"20%",margin:"20px"}} src={itemQuest.image} alt="" />
                            <div className={classes.title} style={{textAlign:"none"}}>
                                <Link style={{fontSize:"20px", color:"white", textDecoration:"none",margin:"0"}}>{itemQuest.name}</Link>
                            </div>
                            <div className={classes.card__content} style={{display:"flex", justifyContent:"center",paddingTop:"20px",paddingLeft:"40px"}}>
                              {itemQuest.discription}
                            </div>
                        </div>
                        <div className={classes.cardbutons}>
                          <a href={`/pages/stages.jsx?course=${itemQuest.course_id}&stage=0`} style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",margin:"0 auto"}} className={classes.buttonSubscribe}>Начать</a>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            ))} 
           </div>
       </div>
       <Footer/>
    </main>
  )
}

export default SelectionQuets