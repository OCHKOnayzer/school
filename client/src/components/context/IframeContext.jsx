import React, { createContext, useState, useContext } from 'react';

const IFrameContentContext = createContext();

export const IFrameContentProvider = ({ children }) => {
  const [iframeContent, setIFrameContent] = useState({ head: '', body: '' });

  return (
    <IFrameContentContext.Provider value={{ iframeContent, setIFrameContent }}>
      {children}
    </IFrameContentContext.Provider>
  );
};

export const useIFrameContent = () => useContext(IFrameContentContext);