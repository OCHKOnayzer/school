  import React, { useEffect, useState, useContext } from 'react';
  import { Context } from '../../index.js';
  const DynamicCompletedComponent = ({quest_title,frameContent,course_id}) => {
    console.log(quest_title)
    const load = quest_title;
    const [Completed, setCompleted] = useState(null);
    const {store} = useContext(Context)
    const userId = store.user.id

      console.log(frameContent)

    useEffect(() => {
      const loadComponent = async () => {
        try {
          const { default: loadedComponent } = await import(`./course${course_id}/${quest_title}.jsx`);
          setCompleted(() => loadedComponent);
        } catch (error) {
          console.error("Ошибка проверки:", error);
        }
      };

      loadComponent();
    }, [frameContent]);

    if (!Completed) return;

    return <Completed frameContent={frameContent} course_id={course_id} userId ={userId}/>;
  };

  export default DynamicCompletedComponent;