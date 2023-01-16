import React, {createContext, useState} from 'react';

export const ContextGlobal = createContext();


export const ContextTokenFunction = ({children}) => {
  const [GlobalData, setGlobalData] = useState([]);
  
 
  return (
    <ContextGlobal.Provider value={{GlobalData,setGlobalData}}>
      {children}
    </ContextGlobal.Provider>
  );
};