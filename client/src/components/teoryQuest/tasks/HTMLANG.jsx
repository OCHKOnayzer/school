import React, { useState } from 'react'

  

    
    
    const Task = ()=>{ 
        const [taskCompleted,setTaskCompleted] = useState()
        if(localStorage.getItem('doctype') === true){ 
        

        }
    
        const completedTask ={ 
            color:"green",
        }
        return(
            <div>
                Напишите деклорацию &lt;!DOCTYPE html&gt; для документа
            </div>
        )
    }

const HTMLANGTASK = () => {

    <Task/>
}

export default HTMLANGTASK