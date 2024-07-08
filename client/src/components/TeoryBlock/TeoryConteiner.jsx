import React, { useRef } from 'react'
import classes from './style.module.css';
import MyButton from '../UI/button/MyButton';
import DynamicComponentLoader from '../teoryQuest/DynamicComponentLoader.jsx';

const TeoryConteiner = ({IsActive, closeFC, questId, title, quest_id}) => {
  const modal = useRef();
  const closeModal = (event) =>{ 
    if(event.target == event.currentTarget){
     IsActive = false
    } 
  }
  const CategorySVG = () =>{ 
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="50%" viewBox="0 0 24 24" fill="none">
      <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.34" d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.34" d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )
  }
  const CrossClose = () => { 
    return( 
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="white"/>
      </svg>
    )
  }
  const active = { 
    display:"flex"
  }
  const notActive ={ 
    display:"none"
  }
  return (
    <div ref={modal} style={IsActive?active:notActive} className={classes.teory_wrapper} onClick={closeModal}>
        <section className={classes.course_teory__content}>
            <div className={classes.teory__inner}>
              <div className={classes.teory_title}>
                <div> <CategorySVG/>Теория</div>
              </div>
              <div className={classes.teory__content}>
                <DynamicComponentLoader idTeory={questId} title={title} quest_id={quest_id}/>
              </div>
              <div className={classes.button_wrapper}><MyButton>Перейти к заданию</MyButton></div>
              <div className={classes.supportBlock}>hh</div>
            </div>
        </section>
        
        <MyButton onClick={closeFC} className={classes.buttonClose}><CrossClose/></MyButton>
        
    </div>
  )
}

export default TeoryConteiner