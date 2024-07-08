import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css';
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';

const HTMLListsCheck = (frameContent) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                const document = frameContent.frameContent.html;
                const ol = document.querySelector('ol');
                const ul = document.querySelector('ul');
                const olItems = ol.querySelectorAll('li');
                const ulItems = ul.querySelectorAll('li');
                
                const olExpectedTexts = ["Первый пункт", "Второй пункт", "Третий пункт"];
                const ulExpectedTexts = ["Первый элемент", "Второй элемент", "Третий элемент"];
                
                const olCorrect = Array.from(olItems).every((item, index) => item.textContent.trim() === olExpectedTexts[index]);
                const ulCorrect = Array.from(ulItems).every((item, index) => item.textContent.trim() === ulExpectedTexts[index]);

                if (ol && ul && olItems.length === 3 && ulItems.length === 3 && olCorrect && ulCorrect) {
                    setCompleted(true);
                    localStorage.setItem('next', 'true');
                } else {
                    setCompleted(false);
                    localStorage.setItem('next', 'false');
                }
            } catch (error) {
                setCompleted(false);
                localStorage.setItem('next', 'false');
            }
        };

        check();
    }, [frameContent, completedquest]);
};

export default HTMLListsCheck;