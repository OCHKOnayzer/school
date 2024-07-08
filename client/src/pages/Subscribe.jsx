import React,{useState ,useEffect, useRef, useContext} from 'react';
import classes from './style.module.css';
import MyHeader from '../components/UI/header/MyHeader.jsx';
import Footer from '../components/UI/Footer/Footer.jsx';
import MyButton from '../components/UI/button/MyButton.jsx';
import { Context } from '../index.js';
import { get } from 'mobx';
const CategoryPage = () => {
  const {store} = useContext(Context);
  const [iSopen,SetISopen] = useState(false)
  const subscribeButton = useRef();
  const cardConteiner = useRef();
  const rightBtn = useRef();
  const leftBtn = useRef();
  const visibaleZone = useRef();
  const modalContent = useRef();
  const modalShell = useRef();
  const [subscribe,SetSubscribe] = useState(null);
  
  const getAllSubscribe = async()=>{ 
   try{
    const subscribeContent = await store.getAllSubscribs()
    SetSubscribe(subscribeContent)
    console.log(subscribeContent)
   }catch(e){
    console.log(e)
   }
  }
  useEffect(()=>{ 
    getAllSubscribe()
  },[])
  const closeForShell = (event)=>{ 
    if(event.target == event.currentTarget){
      if(modalShell.current){
        SetISopen(false)
        document.querySelector('body').style.overflowY="auto"
      }
    } 
  }
  const showModal = (_id) => {
    console.log(_id);
    SetISopen(true);
    requestAnimationFrame(() => {
      if (modalShell.current) {
        const modalId = _id;
        const modalElement = document.getElementById(modalId)
        if (modalElement) {
          modalElement.style.display = "block";
          document.querySelector('body').style.overflowY = "hidden";
        }
      }
    });
  };
  const closeModal =()=>{ 
    SetISopen(false)
    document.querySelector('body').style.overflowY="auto"
  };
  useEffect(()=>{ 
    const handleRightClick =()=>{ 
      visibaleZone.current.style.transform = `translate(${-30}%)`;
      togglDisplay(true)
    }
    const handleLeftClick =()=>{ 
      visibaleZone.current.style.transform = `translate(${0}px)`;
      togglDisplay(false)
    }
    const togglDisplay =(rightVisible)=>{ 
      rightBtn.current.style.display = rightVisible ? "none":"block";
      leftBtn.current.style.display = rightVisible ?"block":"none";
    }
    const conteollers = ()=>{ 
      if(rightBtn.current){ 
        rightBtn.current.addEventListener('click',handleRightClick)
      }
      if(leftBtn.current){ 
        leftBtn.current.addEventListener('click',handleLeftClick)
        
      }
      return () => { 
        if(rightBtn.current){ 
          rightBtn.current.removeEventListener('click',handleRightClick)
        }
        if(leftBtn.current){ 
          leftBtn.current.removeEventListener('click',handleLeftClick)
        }
      }
    }
    conteollers()
  },[rightBtn.current, leftBtn.current])

  useEffect(()=>{ 
    const scroll = ()=>{ 
      if(cardConteiner.current){ 
        cardConteiner.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    const controller = ()=>{ 
      if(subscribeButton.current){ 
        subscribeButton.current.addEventListener('click',scroll)
      }
      return() =>{ 
        subscribeButton.current.removeEventListener('click',scroll)
      }
    }
    controller()
  },[subscribeButton.current])

  return (
    <main>
      {iSopen && subscribe && subscribe[0].data.map((item, index) => (
        <div id={item._id} key={index} ref={modalShell} onClick={closeForShell} className={classes.modalWndowShell}>
          <div className={classes.modalContent}>
            <div className={classes.modal_wrapper}>
              <div className={classes.subscribe_controller}><span>Информация о подписке</span><div><button className={classes.buttonModal} onClick={closeModal}><svg width="20px" height="20px" fill="white" viewBox="0 0 18 18"><path d="m10.1 9 4.7-4.7c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0L9 7.9 4.3 3.2c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1L7.9 9l-4.7 4.7c-.3.3-.3.8 0 1.1.2.1.4.2.6.2s.4-.1.5-.2L9 10.1l4.7 4.7c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1L10.1 9z" stroke="white" stroke-width="1.2"></path></svg></button></div></div>
              <div className={classes.subscribe_image_wrapper}></div>
              <div className={classes.subscribe_controller}><span>Что входит в подписку</span></div>
              <div className={classes.discription}>
                <div className={classes.discription_content}><span>{item.discription}</span><span>{item.discription2}</span></div>
              </div>
              <div className={`${classes.buttonWrapper} ${classes.modal_button__wrapper}`}><button>Приобрести за <span>{item.price}₽</span></button></div>
            </div>
          </div>
        </div>
      ))}
       
        <MyHeader></MyHeader>
        <div className={classes.wrapper}>
            <div className={classes.conteiner_inner}>
              <div className={classes.contentConteiner}>
                <div className={classes.infoWrapper}>
                  <div className={classes.ContentWrapper}>
                      <div className={classes.titleSub}>
                        <p className={classes.slogun}>Уникальные курсы</p>
                        <p className={classes.name_title}>По ВЕБ-разработке</p>
                        <span className={classes.name_context}>Доступ к курсам, которые помогут вырасти в профессии и быть востребованным специалистом</span>
                      </div>
                      <div className={classes.image}><img src="http://localhost:8080/image/test.png" alt="123" srcset="" /></div>
                  </div>
                  <div className={classes.buttonWrapper}>
                    <button ref={subscribeButton} className={`${classes.buyButton} ${classes.buttonSubscribe}`}>Купить подписку</button>
                    <MyButton className={`${classes.promoButton}  ${classes.buttonSubscribe}`}>Что-то</MyButton>
                  </div>
                </div>
              </div>
              
              <div className={classes.sliderConteiner}>
                <div className={classes.sliderWrapper}>
                  <div ref={rightBtn} className={classes.arrowForwrd}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.057 7.061c-.52.521-.52 1.365 0 1.886l6.302 6.301c.355.356.533.534.533.755 0 .22-.178.398-.533.754l-6.302 6.3a1.333 1.333 0 101.886 1.886l7.999-7.998a1.333 1.333 0 000-1.885L12.943 7.06a1.333 1.333 0 00-1.886 0z" fill="white"></path></svg></div>
                    <div className={classes.subscribe}><p>Что входит в подписку</p></div>
                    <div className={classes.subscribe_discription}>

                    </div>
                    <div className={classes.sliderInner}>
                      <div ref={visibaleZone} className={classes.visibaleZone}>
                        <div className={`${classes.slide} ${classes.free}`}></div>
                        <div className={`${classes.slide} ${classes}`}></div>
                        <div className={`${classes.slide}`}></div>
                        <div className={`${classes.slide}`}></div>
                      </div>
                    </div>
                    <div style={{display:'none'}} ref={leftBtn} className={classes.arrowBack}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_shevronPrev__BH0Cs"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.057 7.061c-.52.521-.52 1.365 0 1.886l6.302 6.301c.355.356.533.534.533.755 0 .22-.178.398-.533.754l-6.302 6.3a1.333 1.333 0 101.886 1.886l7.999-7.998a1.333 1.333 0 000-1.885L12.943 7.06a1.333 1.333 0 00-1.886 0z" fill="white"></path></svg></div>
                </div>
              </div>
              <div ref={cardConteiner} className={classes.cardWrapper}>
                <div className={classes.cardInner}>
                {subscribe&&subscribe[0].data.map((item,index)=>(
                    <div id={index+=1} key={index} className={classes.card}>
                      <div className={classes.cardContent}>
                          <div className={classes.title}>
                            <p>{item.name}</p>
                          </div>
                          <div className={classes.card__content}>
                            {item.discription}
                          </div>
                      </div>
                        <div className={classes.cardbutons}>
                          <MyButton onClick={()=>showModal(item._id)} className={classes.buttonSubscribe}>Подробнее</MyButton>
                        </div>
                    </div>
                    ))}
                </div>
              </div>
            </div>
        </div>
    <Footer></Footer>
    </main>
  )
}

export default CategoryPage




