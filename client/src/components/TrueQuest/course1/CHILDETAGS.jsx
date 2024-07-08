import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.css';
import CompletedChild from '../CompletedChild';
import NextQuest from '../NextQuest';

const HTMLCheck = ({ frameContent }) => {
    const [completedquest, setCompleted] = useState(null);

    useEffect(() => {
        const check = () => {
            try {
                const document = frameContent.frameContent.body
                const featuresElements = document.querySelectorAll('.features p');
                const advantagesListElements = document.querySelectorAll('.advantages-list li');

                if (featuresElements.length === 3 && advantagesListElements.length === 4) {
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

export default HTMLCheck;
