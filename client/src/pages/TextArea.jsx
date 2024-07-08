import React, { useCallback, useEffect, useState, useContext, createContext, useRef } from 'react';
import { Context } from '../index.js';
import TeaxAreaHtml from '../components/UI/CodeEditors/HtmlArea.jsx';
import TextAreaCss from '../components/UI/CodeEditors/CssArea.jsx';
import TextAreaJs from '../components/UI/CodeEditors/JavaScriptArea.jsx';
import classes from './styleEditors.module.css';
import classesStyle from './style.module.css'
import {githubDark} from '@ddietr/codemirror-themes/github-dark'
import MyHeader from '../components/UI/header/MyHeader.jsx';
import MyButton from '../components/UI/button/MyButton.jsx';
import './style.css';
import Iframe from '../components/UI/Iframe.jsx';
import SvgSupport from '../components/UI/svgSupport.jsx';
import Footer from '../components/UI/Footer/Footer.jsx';
import { Link, useLocation } from 'react-router-dom';
import TeoryConteiner from '../components/TeoryBlock/TeoryConteiner.jsx';
import notFoundPage from '../components/NotFound/notFound.jsx';

const TextArea = () => {
  const {store} = useContext(Context);
  const [htmlAraeValue, setHtmlAraeValueValue] = useState();
  const [cssAreaValue, setCssAreaValue] = useState();
  const [jsCode,setJsCode] = useState()
  const [jsAreaValue, setJsAreaValue] = useState('')
  const [ZoomValue, SetZoomValue] = useState(100)
  const [openModal,setOpenModal] = useState(false)
  const [quests,setQuest] = useState(null);
  const [task,setTask] = useState(null)
  const [title,setTitle] = useState(null)
  const [allQuest,setAllQuest] = useState(null);
  const [IsActive,setIsActive] = useState(true);
  const [bodyZoom, setBodyZoom] = useState(1);
  const [nextQuest,setNextQuest] = useState('');
  const [prevQuest, setPrevQuest] = useState('');
  const [count,setCount] = useState(null);
  const [last,setLast] = useState();
  const [first, setFirst] = useState();
  const [nextDis, setNextDis] = useState(true);
  const [prevDis, setPrevDis] = useState(true);
  const [completed,setCompleted] = useState(false);
  const [questCompleted,setQuestCompleted] = useState(false)

  const [cssTrue,SetCssTrue] = useState(false);

  const iframe = useRef('');

  const countQuest = count&&count[0].data;
  const QuestTitle = quests&&quests[0].data.title;
  const user_id = store.user.id;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseId = searchParams.get('course');
  const questIndex = searchParams.get('quest');
  const questId = searchParams.get('questInditificator');
  const stageId = searchParams.get('stage');
  const afterQuestid = parseInt(questIndex)+1;
  const beforeQuest = parseInt(questIndex)-1;

  const deleteStorage = ()=>{ 
    if(localStorage.getItem('next')){ 
      localStorage.setItem('next', 'false');
      setQuestCompleted(false)
    };
  };

  // quest completed

  const colorQuestCompleted = { 
    color:"#4eb543"
  }
  const colorIvalid = { 
    color:"white"
  }
  const complteToDB = async() =>{ 
    try{ 
      await store.Completed(user_id,questId,parseInt(stageId),parseInt(courseId))
    }catch(e){ 
      console.log(e)
    }
  }

  const goNext =()=>{ 
    if(localStorage.getItem('next') === 'true'){ 
      setQuestCompleted(true)
      complteToDB()
    }else{ 
      setQuestCompleted(false)
    }
  }
  
  const NextSGV = () =>{ 
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="transparent">
      <rect width="24" height="24" fill="none"/>
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }

  const nextStyle = { 
    display:"block"
  }
  const storageFlase = { 
    display:"none"
  }
  const NextArrow = () =>{
    const close = ()=>{ 
      setQuestCompleted(false);
    }
    return(
      <div className={`${classes.goNext_wrapper} ${classes.false}`}>
        <div style={questCompleted?nextStyle:storageFlase} className={classes.true}><a onClick={close} href={`/pages/textArea.jsx?course=${courseId}&quest=${afterQuestid}&questInditificator=${nextQuest}&stage=${stageId}`}><NextSGV/></a></div>
      </div>
    )
  }

  useEffect(()=>{ 
    goNext()
    console.log(cssAreaValue)
  },[htmlAraeValue,cssAreaValue,jsAreaValue])

  // get / post / store / function
  // get/post function type count or find 
  
  const findComplete = async()=>{ 
    try{ 
      const result = await store.findCompleted(questId,user_id);
      console.log(result)
      if(result){
        const bool = result&&result[0].data
        setCompleted(bool)
      }
    }catch(e){ 
      console.log(e);
    }
  }
  const getCount = async() =>{ 
    try{ 
      const response = await store.countQuestForCourse(parseInt(courseId),parseInt(stageId)) 
      if(response){ 
        setCount(response);
      }
    }catch(e){ 
      console.log(e)
    }
  }
  const questInfo = async()=>{ 
    try{ 
      const response = await store.getQuestInfo(questId);
      setTask(response&&response[0].data.task)
      setTitle(response&&response[0].data.name)
      setQuest(response);
      const Title = response&&response[0].data.title
      const titleToString = Title.toString('')
      const result = await store.questCode(titleToString,parseInt(courseId));

     console.log(result);

     const html = result&&result[0].data.html;
     if(html){ 
       setHtmlAraeValueValue(html)
     }
     const css = result&&result[0].data.css;
     if(css){ 
      setCssAreaValue(css)
     }
     const js = result&&result[0].data.js;
     if(js){ 
      setJsAreaValue(js)
     }
    }catch(e){ 
      console.log(e);
    }
  }
  const getAllQuest = async() =>{ 
    try{ 
      const response = await store.getQuetsByStageId(parseInt(stageId),parseInt(courseId));
      if(response){ 
        setAllQuest(response);
      };
    }catch(e){ 
      console.log(e);
      throw e;
    };
  };

    // arrow Function
  const nextQuestFC = async()=>{ 
    try {
      const response = await store.nextQuest(questId,parseInt(courseId));
      const next = response.data;
      const nextId = next._id;
      setNextQuest(nextId);
  }catch (e) {
      console.log(e);
    }
  }
  const prevQuestFC = async()=> { 
    try{ 
      const response = await store.prevQuest(questId,parseInt(courseId));
      if(response){ 
        const prevId = response&&response[0].data._id; 
        setPrevQuest(prevId);
      }else{ 
        setPrevQuest(false)
      }
    }catch(e){ 
      console.log(e);
    }
  } 
  const firstQuest = async()=>{ 
    try{ 
      const response = await store.firstQuest(parseInt(courseId));
      const url = response&&response[0].data._id
      setFirst(url)
    }catch(e){ 
      console.log(e)
    }
  }
  const lastQuest = async()=>{ 
    try{ 
      const response = await store.lastQuest(parseInt(courseId));
      const url = response&&response[0].data._id;
      setLast(url)
    }catch(e){ 
      console.log(e)
    }
  }
  const checkDisableArrow =()=>{ 
    if(last === questId){ 
      setNextDis(false)
    }else{ 
      setNextDis(true)
    };
    if(first === questId){ 
      setPrevDis(false);
    }else{ 
      setPrevDis(true);
    };
  };

  

// style components

  const TeoryComponent = ()=>{ 
    };
    const closeFC = () =>{ 
      setIsActive(false)
    };
    const openFc = () =>{ 
      setIsActive(true)
    };
    const open = {
      display:"block"
    };
    const close = { 
      display:"none"
    }
    const OpenSelected = (event) =>{ 
      openModal?setOpenModal(false):setOpenModal(true);
    }
    const closeSlectedFromNxtorBck = ()=>{ 
      setOpenModal(false)
    }
  const ntfFunction = () =>{
    if(!questId){
      return(
        <notFoundPage/>
      )
    }
  }
  const disableStyle = { 
    pointerEvents:"none"
  }

  // useEffect area
  useEffect(()=>{ 
    deleteStorage()
    const eventClick = (event)=>{ 
      let reportForm = document.querySelector('.formReport');
      let reported = document.querySelector('.reported');
      if(event.target === reported || reported.contains(event.target)){ 
        if(reportForm.style.display === "block"){
          reported.style.background = ''
          reportForm.style.display = "none"
        }else {
          reported.style.background = '#f1f1879d'
          reportForm.style.display = "block"
        }
      }
    }
    document.addEventListener('click', eventClick)
    return ()=>{ 
      document.removeEventListener('click', eventClick)
    }
  },[])
  useEffect(()=>{ 
    localStorage.setItem('next', 'false');
    console.log(localStorage)
    let decBtn = document.getElementById('decBtn')
    let incBtn = document.getElementById('incBtn')
    let cursorBtn = ZoomValue>50?'pointer':'default';
    let CrsincBtn = ZoomValue<=99?'pointer':'default';
    decBtn.style.cursor = cursorBtn;
    incBtn.style.cursor = CrsincBtn;
    storageUpdate()
  },[ZoomValue])
  const increment = ()=>{
    if(ZoomValue<=99){
      SetZoomValue(ZoomValue +25)
      setBodyZoom(bodyZoom +0.1)
    }
  }
  const decriment = ()=>{ 
    if(ZoomValue>50){
      SetZoomValue(ZoomValue -25)
      setBodyZoom(bodyZoom -0.1)
    }
  } 
  const storageUpdate = ()=> {
    localStorage.setItem('uiSize',ZoomValue)
    localStorage.setItem('frameZoom', bodyZoom)
  }
  const jsChange = useCallback(value=>{ 
    setJsAreaValue(value)
  },[])
  const CssChange = useCallback((val)=>{
    setCssAreaValue(val);
  },[])
  
  const htmlChange = useCallback(val=>{ 
    setHtmlAraeValueValue(val)
  },[])
  
  const BASEURL = 'CODECRAFT.RU' 
  const [ActiveTab, setActiveTab] = useState('tab-1')
  useEffect(()=>{
    if(cssTrue){ 
      setActiveTab('tab-2')
    }else{ 
      setActiveTab('tab-1')
    }
    const tabsFunction = ()=>{
      let tabs = document.querySelectorAll('.tb')
      tabs.forEach((item)=>{ 
        item.addEventListener('click',(e)=>{ 
          const id = e.target.id
          setActiveTab(id)
        })
      })
    } 
    tabsFunction();
    getCount();
    getAllQuest();
    ntfFunction();
    nextQuestFC();
    prevQuestFC();
    firstQuest();
    lastQuest();
    checkDisableArrow();
    findComplete();
    questInfo();
    console.log(cssAreaValue)
  },[])

  useEffect(()=>{
    localStorage.setItem('next', 'false');
    deleteStorage() 
    questInfo();
    openFc();
    nextQuestFC();
    prevQuestFC();
    checkDisableArrow();
    findComplete();
    console.log(completed);
    if(questId&&questIndex&&questId){
     
    }
    goNext();
  },[questId,questIndex,questId])
  return (
    <main>
      
      <TeoryComponent/>
    <MyHeader>
      
      <div className={classes.backSelect}>
        <a className={classes.arrowBack} href={`/pages/stages.jsx?course=${courseId}&stage=${0}`}>
        <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" fill="white"></path> </svg>
        </a>
      </div>
      <div className={classes.back}>
            <a style={!prevQuest||!prevDis?disableStyle:null} onClick={closeSlectedFromNxtorBck} href={`/pages/textArea.jsx?course=${courseId}&quest=${beforeQuest}&questInditificator=${prevQuest}&stage=${stageId}`} className={classes.arrowBack}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="11" viewBox="0 0 46 11"><path d="M40.376 10.383l5.012-5.015L40.374.353m5.014 5.016H.708" fill="none" stroke={!prevQuest||!prevDis?"#ffffff5a":"#FFF"}></path></svg></a>
      </div>
      <div className={classes.selecte} onClick={OpenSelected}>
            <div className={classes.selectedQuest}>
              <div className={classes.questName}>{quests&&quests[0].data.name}</div>
              <div className={classes.questNumb}><span>{questIndex}</span> / <span date-id="1">{countQuest}</span></div>
            </div>
           <div style={openModal?open:close} className={classes.modalWindow_select}> 
            <div className={classes.wrapper_modal_selected}>
              <div className={classes.leaveLevelSelect}><a className={classes.qstDef} href={`/pages/stages.jsx?course=${courseId}&stage=${0}`}>Вернуться к выбору заданий</a></div>
              {allQuest&&allQuest[0].data.map((item,index)=>(
                 <div className={classes.questSlct}><a className={classes.qstDef} href={`/pages/textArea.jsx?course=${courseId}&quest=${index+1}&questInditificator=${item._id}&stage=${stageId}`}>{item.name}</a></div>
              ))}
             
            </div>  
          </div> 
      </div>
      <div className={classes.forward}>
            <Link style={!nextDis?disableStyle:null} onClick={closeSlectedFromNxtorBck} to={`/pages/textArea.jsx?course=${courseId}&quest=${afterQuestid}&questInditificator=${nextQuest}&stage=${stageId}`}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="11" viewBox="0 0 46 11"><path d="M40.376 10.383l5.012-5.015L40.374.353m5.014 5.016H.708" fill="none" stroke={nextDis?"#FFF":"#ffffff5a"}></path></svg></Link>
      </div>
    </MyHeader>
    <div className={classesStyle.wrapper}>
    <TeoryConteiner IsActive={IsActive} closeFC={closeFC} questId={QuestTitle} quest_id={questId} title={quests&&quests[0].data.name}/>
      <div className={classesStyle.conteiner_inner}>
        <div className={classes.conteiner__codeRedactor}>
            <div className={classes.inner__}>
              <div className={classes.teoryWrapper}>
                <div className={classes.teoryBlock}><div className={classes.conteiner}onClick={openFc}><span>Теория</span></div></div>
                <div className={`${classes.edtrFoot} reported`}>
                  <SvgSupport/>
                </div>
              </div>
              <div className={classes.redactorConteiner}>
                <div id='tabs' className={classes.tabs}>
                  <div id='tab-1' className={`tb ${ActiveTab === "tab-1"?'tabActive':''}`}>Index.html</div>
                  <div id='tab-2' className={`tb ${ActiveTab === "tab-2"?'tabActive':''}`}>style.css</div>
                  <div id='tab-3' className={`tb ${ActiveTab === "tab-3"?'tabActive':''}`}>script.js</div>
                </div>
                <div className={classes.conteiner__redactor}>
                  <TeaxAreaHtml value={htmlAraeValue} id="tab-1-content" theme={githubDark} onChange={htmlChange}  height='100%' className={`htmlArea itemContent ${ActiveTab === "tab-1"?'':'itemDisable'} ${classes.redactor}`}/>
                  <TextAreaCss value={cssAreaValue} id="tab-2-content" theme={githubDark} onChange={CssChange} height='100%' className={`itemContent cssArea  ${ActiveTab === "tab-2"?'':'itemDisable'} ${classes.redactor}`}/>
                  <TextAreaJs value={jsAreaValue} id="tab-3-content" theme={githubDark} onChange={jsChange} height='100%' className={`itemContent jsArea ${ActiveTab === "tab-3"?'':'itemDisable'} ${classes.redactor}`}/>
                  <div className={classes.EditorFooter}>
                    <div className={classes.EditorFooter__controller}>
                      <div onClick={``} className={`${classes.controlled} ${classes.selected}`}>Обнулить код</div>
                      <div onClick={``} className={`${classes.controlled} ${classes.selected}`}>Показать ответ</div>
                      <div className={classes.controlled}></div>
                    </div>
                  </div>
                  <div style={{display:'none'}} className={`${classes.reportForm} formReport`}>
                    <div className={classes.ReportContent}>
                      <p>Что вам не понравилось в задании</p>
                      <form action="" method="post">
                        <div className={classes.formWrapper}>
                          <div className={classes.checkBoxArea}>
                            <div className={classes.inputCheck}>
                              <div className={classes.inputWrapper}>
                                <input type="checkbox" name="" id=""/> 
                                <span>Не понятная теория</span>
                              </div>
                            </div>
                            <div className={classes.inputCheck}>
                              <div className={classes.inputWrapper}>
                                <input type="checkbox" name="" id=""/> 
                                <span>Не работает задание</span>
                              </div>
                            </div>
                            <div className={classes.inputCheck}>
                              <div className={classes.inputWrapper}>
                                <input type="checkbox" name="" id=""/> 
                                <span>Редактор не работает</span>
                              </div>
                            </div>
                          </div>
                          <div className={classes.ButtonWrapper}>
                            <MyButton></MyButton>
                          </div>
                        </div>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            <div className={classes.codeViwe___conteiner}>
              <div className={classes.iframeBlock}><span className={classes.iframeTitle}>{BASEURL}</span></div>
              
              <Iframe course_id={parseInt(courseId)} quest_title={quests&&quests[0].data.title} ref={iframe} bodyZoom={localStorage.getItem('frameZoom')} htmlAraeValue={htmlAraeValue} cssAreaValue={cssAreaValue} jsAreaValue={jsAreaValue}/>
                <div className={`${classes.EditorFooter} ${classes.framePosition}`}>
                    <div className={`${classes.EditorFooter__controller}`}>
                      <div>
                        <div className={classes.task_title}><span style={questCompleted?colorQuestCompleted:colorIvalid} className={classes.task_named}>{task}.</span></div>
                      </div>
                      <div className={classes.all_task}><span className={classes.task}></span></div>
                    </div>
                </div>
            </div>
            <div className={classes.controlledPanel}>
              <div className={classes.controlledContent}>
                <div className={classes.buttonZoom}>
                  <MyButton id="incBtn" onClick={increment}>+</MyButton>
                  <div className={classes.zoomValue}>
                    {localStorage.getItem('uiSize')}%
                  </div>
                      <MyButton id="decBtn" onClick={decriment}>-</MyButton>
                    </div>
                    <div className={classes.nextQuest}>
                </div>
              </div>
              <div className={classes.jj}><NextArrow/></div>
            </div>
              
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </main>
    
  )
}

export default TextArea