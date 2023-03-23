import {useContext,createContext, useState } from "react";

const ThemeContext= createContext();
const ThemeContextUpdate= createContext();
const ThemeCSSUpdate= createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function useToggleTheme(){
    return useContext(ThemeContextUpdate)
}

export function useThemeCSS(){
    return useContext(ThemeCSSUpdate)
}

export function ThemeProvider({children}){

    const [darkTheme, setDarkTheme]=useState(false);

    const themeStyle={
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black'
    }


    function toggleTheme(){
        setDarkTheme(x=>!x);
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                <ThemeCSSUpdate.Provider value={themeStyle}>
                {children}
                </ThemeCSSUpdate.Provider>
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}