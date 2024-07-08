import React, { useEffect, useState } from 'react';

const DynamicComponentLoader = ({ idTeory,title,quest_id}) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const { default: loadedComponent } = await import(`./${idTeory}`);
        setComponent(() => loadedComponent);
      } catch (error) {
        console.error("Ошибка загрузки теории:", error);
      }
    };

    loadComponent();
  }, [idTeory]);

  if (!Component) return <div>Loading...</div>;

  return <Component title={title} quest_id={quest_id}/>;
};

export default DynamicComponentLoader;