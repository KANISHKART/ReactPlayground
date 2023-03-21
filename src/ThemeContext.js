import {useContext,createContext, useState } from "react";

const ThemeContext= createContext();
const ThemeContextUpdate= createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function useToggleTheme(){
    return useContext(ThemeContextUpdate)
}

export function ThemeProvider({children}){

    const [darkTheme, setDarkTheme]=useState(true);

    function toggleTheme(){
        setDarkTheme(x=>!x)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}