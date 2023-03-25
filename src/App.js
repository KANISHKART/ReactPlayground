import React, { useState } from 'react';
import { useThemeCSS } from './ThemeContext';
import Goal from './Goal';
import Api from './Api';
import Hooks from './HooksFun';

function App() {

  const themeStyle = useThemeCSS();

  const [myGoals, setMyGoals] = useState([])

  function addGoal(value) {

    setMyGoals([...myGoals, value])
  }

  return (
    <div style={themeStyle}>
      <Goal add={addGoal} />
      <h1>My Goals:</h1>
      {
        myGoals.map((g) =>
          <label>My Goal is to {g.goal}, by {g.by}  <br/></label>
        )
      }

      <Api />

      <Hooks />
      
    </div>
  );
}
export default App;


