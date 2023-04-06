import { useState, useEffect } from "react"
import React from 'react'
import SampleForm from "./Form"

const withMousePosition =(WrappedComponent)=>{

    return (props) =>{

        const [mousePointer, setPointer] = useState({
            x: 0,
            y: 0
        })

        const [count, setCount]=useState(0)

        const handleCount =()=>{
            setCount(prev => prev+1)
        }

        // useEffect(()=>{

        //     const handleMousePosistionChange= (e) =>{
        //         setPointer({
        //             x: e.clientX,
        //             y: e.clientY
        //         })
        //     }

           
        //     window.addEventListener("mousemove", handleMousePosistionChange);

        //     // window.addEventListener("click", handleClick)

        //     return () =>{
        //         window.removeEventListener("mousemove", handleMousePosistionChange);
        //     }
        // }, [] )

        return (
        <div onClick={handleCount}>
        
             <WrappedComponent {...props} mousePointer={mousePointer} clickCount={count}/>
        
        </div>)
    }

}


const MousePointer=({mousePointer})=>{
    if(!mousePointer){
        return null;
    }
    return (
        <div style={{border: "1px black solid"}} className="mouse pointer">
            <p>({mousePointer.x} , {mousePointer.y})</p>
        </div>
    )
}
const MouseClicks=({clickCount})=>{
    if(!clickCount)
        return null;
    return(
        <div style={{border: "1px black solid"}} className="mouse pointer">
            
            <p>You clicked mouse {clickCount} times!!</p>
        </div>
    )
}

const RenderFun=(props)=>{
    const [counters, setCounters]= useState(0);

    const handleCount =()=>{
        setCounters(prev => prev+1)
    }

    return (<>
        <button onClick={handleCount}>Click Me</button>
        <p>Hi {props.name}. you cliked on the button {counters} times!!!!</p>
    </>);
}

const ClicksTracker= withMousePosition(MouseClicks)

const MouseTracker= withMousePosition(MousePointer)

export default function HOC() {

    const [clickCount, setCount] = useState(0)

    const handleClick= () =>{
    setCount(prevCount => prevCount+1)
}
  return (
    <div>
       <h1>Mouse Pointer Location:</h1>
       <button onClick={handleClick}>clickMe</button>
       <p>I have been clicked {clickCount} times</p>
       {/* <MouseTracker /> */}
       <ClicksTracker />

       <RenderFun name="Kanishkar"/>

       <SampleForm />
    </div>

   
  )
}
