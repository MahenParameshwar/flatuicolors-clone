import React, { createContext, useState } from 'react';

export const LevelContext = createContext();

function LevelContextProvider({children}) {
    const [level,setLevel] = useState(500);
    const value = {level,setLevel}
    return (
        <LevelContext.Provider value={value}>
            {children}
        </LevelContext.Provider>
    );
}

export default LevelContextProvider;