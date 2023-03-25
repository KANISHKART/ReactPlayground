import { useEffect} from "react"
export default function useCustomLog(name) {
    
    useEffect(() => {
        console.log("custom logger :: "+JSON.stringify(name))
    },[name])
};
