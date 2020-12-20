import React, { createContext, useState } from 'react';

export const LevelContext = createContext();

function LevelContextProvider({children}) {
    const [level,setLevel] = useState(500);
    const [format,setFormat] = useState('hex');
    const value = {level,setLevel,format,setFormat}
    return (
        <LevelContext.Provider value={value}>
            {children}
        </LevelContext.Provider>
    );
}

export default LevelContextProvider;