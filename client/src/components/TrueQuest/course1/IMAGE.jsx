import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css'
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';

const IMAGE = (frameContent) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                const document = frameContent.frameContent.body;
                const image = document.querySelector('.image1'); 
                const image2 = document.querySelector('.image2');
                if (image) {
                    if(image2 && image2.hasAttribute('alt')){ 
                        setCompleted(true);
                        console.log('hello doctype')
                        console.log(completedquest)  
                        localStorage.setItem('next', 'true'); 
                        setTimeout(()=>{
                            localStorage.setItem('next', 'false'); 
                        },100)
                    }
                }
            } catch (error) {
                setCompleted(false);
                localStorage.setItem('next', 'false'); 
            }
        };
        
        check();
    }, [frameContent,completedquest]);
    
};

export default IMAGE;