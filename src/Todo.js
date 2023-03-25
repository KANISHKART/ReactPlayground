import React from 'react'
import { useThemeCSS } from './ThemeContext'
import { NOTES } from './HooksFun';
export default function Todo({ task, listhandler }) {

    const darkTheme = useThemeCSS();
    return (
        <div className='todo-list' style={darkTheme}>
            <label style={{ textDecoration: task.complete ? "line-through" : "" }}>{task.name}</label> &nbsp;
            <button onClick={() => {
                
                listhandler({ type: NOTES.COMPLETE_NOTES, payload: {id : task.id} })
        
            }
            
            }>&#9989;</button> &nbsp;


            <button onClick={() => {
                
                listhandler({ type: NOTES.DELETE_NOTES, payload: {id : task.id} })
    
            }}>&#9940;</button>
        </div>
    )
}
