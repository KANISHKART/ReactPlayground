import React from 'react';
import { ThemeProvider,useTheme,useToggleTheme } from './ThemeContext';


function App() {

  const darkTheme= useTheme()
  const toggleTheme= useToggleTheme()
  const themeStyle={
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black'
  }

  return (
    <>
      <button onClick={toggleTheme}>toggle Theme</button>

      <div style={themeStyle}>

        <p>Goal : puruse a masters in mix of data science, Software in SETU Carlow <br/>
Strength : cost , good modules on datascience<br/>
Weakness :  location, familiarity, <br/>
Opportunity: jobs
Threats:  </p>

      </div>
    </>
  );
}


function Root() {
  
  return (
    <>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    </>
  )
}

export default Root;
