import {  useState, useEffect } from 'react'
import { useThemeCSS } from './ThemeContext';

function Api() {

    const themeStyle = useThemeCSS();

    const [data, setData] = useState({});

    const fetchData = () => {

        console.log("Before API call")

        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData.bpi.USD.code))
            .catch((err) => console.log(err))

        console.log("After API call")
    }

    let a= 20;

    const recordVideo = new Promise( (resolve, reject) =>{
        if(a === 10){
            setTimeout(()=>{
                resolve("var a ==10");
            },1000)
        }
        else
        setTimeout(()=>{
            resolve("var a ==10");
        },5000)
    })

    async function chkFun(){
        try{
            const msg= await recordVideo;
            console.log(msg)
            console.log("Test Async")
        }
        catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return data.length > 0 ? (
        <div className="Api-data" style={themeStyle}>
            <p>{data}</p>
            <button onClick={chkFun}>Trigger Async</button>
        </div>
    ) : (

    <div className="Api-data" style={themeStyle}>
        <p>Unable to fetch Data</p>
    </div>
    
    );
}

export default Api;