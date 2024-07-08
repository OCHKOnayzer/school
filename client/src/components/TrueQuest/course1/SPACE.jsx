import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css';
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';

const HTMLBreaksSpacesCheck = (frameContent) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                const document = frameContent.frameContent.html;
                const hr = document.querySelector('hr');
                const nbspCount = (document.body.innerHTML.match(/&nbsp;/g) || []).length;

                if (hr && nbspCount >= 3) {
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

export default HTMLBreaksSpacesCheck;