import React,{useEffect, useRef, useState} from 'react';
import DynamicCompletedComponent from '../TrueQuest/DynamicCompletedComponent';

const Iframe = ({htmlAraeValue,cssAreaValue,jsAreaValue, bodyZoom, course_id, quest_title}) => {

  const [frameContent,setFrameContent] = useState({})

  const iframe = useRef();
  const postContentQuest = () =>{ 
    if(iframe.current){ 
      const frame = iframe.current; 
      const iframeContentHtml = frame.contentDocument
      const iframeContentHead = frame.contentDocument.head
      const iframeCintentBody = frame.contentDocument.body      

      setFrameContent(prevState => ({
        ...prevState,
        html:iframeContentHtml,
        head: iframeContentHead,
        body: iframeCintentBody
      }));
    }

  }
    useEffect(()=>{ 
      postContentQuest()
    },[htmlAraeValue,cssAreaValue,jsAreaValue])
    useEffect(()=>{ 
      if(iframe.current){ 
        const frame = iframe.current
        let FrameDocument = frame.contentWindow.document;
        
        let iFrameDocumentContent = htmlAraeValue+"<style>"+cssAreaValue+"</style>"+"<scri"+"pt>"+jsAreaValue+"</scri"+"pt>"
        FrameDocument.open();
        FrameDocument.write(iFrameDocumentContent);
        FrameDocument.close()
      }
      },[htmlAraeValue, cssAreaValue, jsAreaValue]);
      useEffect(()=>{ 
        if(iframe.current){ 
          const frame = iframe.current
          let FrameDocument =frame;
          let FrameBody = FrameDocument.contentDocument.body;
          FrameBody.style.zoom = bodyZoom;
        }
      })
  return (
    <>
      <iframe ref={iframe} allow-scripts="true" src="" frameborder="0"/>
      <div>
      <DynamicCompletedComponent course_id={course_id} quest_title={quest_title} frameContent={frameContent}/> 
      </div>
     
    </>
  )
}

export default Iframe