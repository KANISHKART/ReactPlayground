import React from 'react';
import App from './App';
import { useThemeCSS } from './ThemeContext';



function Root() {
  const darkThemes=useThemeCSS();
    return (
      <div style={darkThemes}>
          <App />
      </div>
    )
  }
  
  export default Root;
  