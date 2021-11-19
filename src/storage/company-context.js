import React, { useState, useEffect } from 'react';

const CompanyContext = React.createContext();
export const CompanyContextProvider = (props) => {
  
  

  return <CompanyContext.Provider
    value={{
     
    }}
  >{props.children}</CompanyContext.Provider>
};

export default CompanyContext;