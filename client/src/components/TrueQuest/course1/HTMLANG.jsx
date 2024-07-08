import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css'
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';

const HTMLANG = (frameContent) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                const document = frameContent.frameContent.html;
                const doctype = document.doctype;
                if (doctype) {
                    setCompleted(true);
                    console.log('hello doctype')
                    console.log(completedquest)  
                    localStorage.setItem('next', 'true'); 
                    setTimeout(()=>{
                        localStorage.setItem('next', 'false'); 
                    },100)
                   
                }
            } catch (error) {
                setCompleted(false);
                localStorage.setItem('next', 'false'); 
            }
        };
        
        check();
    }, [frameContent,completedquest]);
    
};

export default HTMLANG;