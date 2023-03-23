import React from 'react';
import App from './App';
import {ThemeProvider } from './ThemeContext';


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
  