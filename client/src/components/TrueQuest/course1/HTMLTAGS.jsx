import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css'
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';

const HTMLTAGS = (frameContent) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                const document = frameContent.frameContent.body;
                console.log(document)
                const span = document.querySelector('span'); // поиск по классу
                if (span) {
                    console.log(span.innerText)
                    const text = span.innerText;
                    const trimText = text.trim(' ')
                    
                    if (trimText === 'Текст о существовании которого никто не знает') {
                        console.log('hello world')
                        console.log(localStorage)
                        // проверка на наличие нужного текста
                        setCompleted(true); // устанавливаем состояние completedquest в true
                        localStorage.setItem('next', 'true'); 
                        console.log('span')
                        console.log(trimText)
                    } else {
                        setCompleted(false);
                    }
                } else {
                    setCompleted(false);
                }
            } catch (error) {
                setCompleted(false);
            }
        };
        
        check();
    }, [frameContent,completedquest]);
    
};

export default HTMLTAGS;