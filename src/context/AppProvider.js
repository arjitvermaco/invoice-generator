import React from 'react'
import AppContext from './AppContext';
export default function AppProvider({children}) {
 
    let appName = "Invoice Generator";
    let createdBy = "Arjit Verma";
    let currentYear = "2023";

    const consoleSomething = ()=>{
        console.log("Hello this is from context")
    }

  return (
   <AppContext.Provider value={{appName,createdBy,currentYear,consoleSomething}}>
    {children}
   </AppContext.Provider>
  )
}
