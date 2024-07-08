import React, { useEffect, useState } from 'react';
import NextQuest from './NextQuest';

const CompletedChild = ({ completedquest }) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        console.log("completedquest value:", completedquest); // Проверяем значение completedquest
        setResponse(completedquest);
    }, [completedquest]);

    useEffect(() => {
        console.log("response value:", response); // Проверяем значение response
    }, [response]);

    return (
      <NextQuest completedRequest={response}/>
    );
};

export default CompletedChild;