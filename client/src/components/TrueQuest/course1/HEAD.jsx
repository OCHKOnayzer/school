import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css'
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';


export const HEAD = (frameContent) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                
                const document = frameContent.frameContent.html;
                const head = document.innerText;
                console.log(head)
                if (head == '<head></head>') {
                    setCompleted(true);
                    console.log('hello doctype')
                    console.log(completedquest)  
                    localStorage.setItem('next', 'true');   
                }
            } catch (error) {
                setCompleted(false);
                localStorage.setItem('next', 'false'); 
            }
        };
        
        check();
    }, [frameContent,completedquest]);
}
export default HEAD;