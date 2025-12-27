import {motion} from "framer-motion"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
import {users} from "../users/users"


const Login = () => {
  const navigate = useNavigate()

  const [show,setShow] = useState<boolean>(true);
  const [mail,setMail] = useState("");
  const [pass,setPass] = useState("")

  const handleLogin =(mail:string,pass:string)=>{
    const user = users.find(user=>mail==user.email && user.password==pass)
    if(user){
      navigate("/dashboard")
    }else{
      alert("Cannot Find User")
    }
      
  }

  return (
    <div className="flex justify-center mt-30">
      <motion.div className="border flex flex-col w-110 h-120 rounded-xl shadow-xl bg-gray-50" whileHover={{scale:1.1}} initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
            <h1 className="text-3xl font-bold font-serif ml-40 mt-5">Login</h1>
                <div className="mt-5 flex flex-col gap-10">
                    <input value={mail} type="email"  className="border w-90 ml-10 rounded h-10 shadow pl-2 bg-white" placeholder="Enter your email" required onChange={(e)=>{setMail(e.target.value)}} />
                    <div className="relative w-90 ml-10">
                    <input value={pass} type={show? "password" : "text"} className="border w-full rounded h-10 shadow pl-2 bg-white" placeholder="Enter your password" required onChange={e=>{setPass(e.target.value)}}/>
                    <button  onClick={()=>{setShow(!show)}} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer">{show?<FaEye/>:<FaEyeSlash/>}</button>
                    </div>
                    <button type="submit" onClick={()=>{handleLogin(mail,pass)}}  className="border w-70 ml-20 rounded-2xl h-10 shadow bg-white font-mono cursor-pointer hover:bg-blue-300">Submit</button>
                </div>
                <div className="ml-20 mt-10">
                  <p>Dont have an account? <Link className="underline text-black font-bold" to="/">Signup</Link> instead</p>
                </div>
        </motion.div>
    </div>
  )
}

export default Login
