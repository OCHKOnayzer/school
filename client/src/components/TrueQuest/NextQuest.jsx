import React, { use, useEffect, useState } from 'react'

const NextQuest = ({completedRequest}) => {

    const [cmplt,setCmplt] = useState(false);
    const [test,setTest] = useState('')

  const NextDiv = ({sex})=>{ 
    return(
        <div>{test}</div>
    )
  }
  useEffect(()=>{ 
    try{ 
        if(completedRequest){ 
            setCmplt(completedRequest)
        }
    }catch(e){ 
        console.log('error');
    }
  })
  useEffect(()=>{
    const str = 'hello world'
    if(cmplt === true){ 
        console.log('hello world')
        setTest(str)
    }else{ 

    }
  },[cmplt,completedRequest])
    const active = { 
        display:"flex"
    }
    const notActive ={ 
        display:"none"
    }
    return( 
        <NextDiv></NextDiv>
    )
}

export default NextQuest