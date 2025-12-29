import { useAuth } from "../../features/auth/AuthContext"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const handleLogout=()=>{
    logout();
    navigate("/login")
  }

  return (
    <nav className=" border-gray-500 rounded-4xl shadow-xl mt-5 bg-gray-200 flex flex-row h-20">
        <ul className=" p-4 ml-5 flex flex-row gap-110 mt-2">
            <h1 className="text-2xl font-bold font-serif ">Welcome to Dashboard</h1>
            <input className="border rounded-xl h-9 bg-white shadow pl-2 ml-10 " type="search" placeholder="Search here . . . ." />
            <button onClick={()=>{handleLogout()}} className="border h-10 w-20 rounded bg-blue-100 cursor-pointer hover:bg-white">Logout</button>
        </ul>
    </nav>
  )
}

export default Navbar
