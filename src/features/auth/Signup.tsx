import {motion} from "framer-motion"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { useState } from "react"
import {Link} from "react-router-dom"
import {users,type Users} from "../users/users"

const Signup = () => {

  const [show,setShow] = useState<boolean>(true)
  const [full,setFull] = useState("")
  const [mail,setMail] = useState("")
  const [pass,setPass] = useState("")
  const [conf,setConf] = useState("")

  const handleSignup =(name:string,mail:string,pass:string,conf:string)=>{
    if(pass!==conf){
      alert("The password is not similar")
      return;
    }
    const user = users.find(user=>user.email==mail)
    if(user){
    alert("User Already Exists")
    return;
    }
    const newUser : Users= {fullname : name,email : mail,password:pass,confirmPassword:conf}
    users.push(newUser)
    confirm("User created successfully")

  }

  return (
    <div className="flex justify-center mt-30">
      <motion.div className="border flex flex-col w-110 h-130 rounded-xl shadow-xl bg-gray-50" initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold font-serif ml-40 mt-5">Signup</h1>
                <div className="mt-5 flex flex-col gap-10">
                    <input value={full} onChange={e=>{setFull(e.target.value)}} type="text" className="border w-90 ml-10 rounded h-10 shadow pl-2 bg-white" placeholder="Enter your Full Name" required/>
                    <input value={mail} onChange={e=>{setMail(e.target.value)}} type="email"  className="border w-90 ml-10 rounded h-10 shadow pl-2 bg-white" placeholder="Enter your email" required />

                    <div className="relative w-90 ml-10">
                    <input value={pass} onChange={e=>{setPass(e.target.value)}} type={show? "password" : "text"} className="border w-full  rounded h-10 shadow pl-2 bg-white" placeholder="Enter your password" required />
                    <button onClick={()=>{setShow(!show)}} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer">{show?<FaEye/>:<FaEyeSlash/>}</button>
                    </div>

                    <div className="relative w-90 ml-10">
                    <input value={conf} onChange={e=>{setConf(e.target.value)}} type={show? "password" : "text"} className="border w-full rounded h-10 shadow pl-2 bg-white" placeholder="Enter same password again" required/>
                    <button onClick={()=>{setShow(!show)}} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer">{show?<FaEye/>:<FaEyeSlash/>}</button>
                    </div>

                    <button onClick={()=>{handleSignup(full,mail,pass,conf)}} type="submit"  className="border w-70 ml-20 rounded-2xl h-10 shadow bg-white font-mono cursor-pointer hover:bg-blue-300">Submit</button>
                </div>
                <div className="ml-15 mt-5">
                  <p>Already have an account? <Link className="text-black underline font-bold" to="/login">Login</Link> instead</p>
                </div>
        </motion.div>
    </div>
  )
}

export default Signup
