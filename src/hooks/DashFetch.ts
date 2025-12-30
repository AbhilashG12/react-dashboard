import { users } from "../features/users/users"
type Theme = "light" | "dark"
import { useState,useEffect } from "react";

export const useDash = () => {

    const [theme,setTheme] = useState<Theme>("light");  
    const [active,setActive] = useState(0)
    const total = users.length;
    useEffect(()=> {
      const intervalId = setInterval(()=>{
        setActive(Math.floor(Math.random() * total + 1))
      },1000)
      return ()=> clearInterval(intervalId)
    },[total])
    
    const toggle=()=>{
      setTheme((prev)=>(prev=="light"?"dark" :"light"))
    }

  return { total,active,theme,toggle }
}


