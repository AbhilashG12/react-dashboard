import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { useAuth } from "../../features/auth/AuthContext"

const Dashboard = () => {

  const {user} = useAuth();
    
  return (
    <div>
        <Navbar/>
        <div>
          <h1>Hello there {user?.fullname}</h1>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Dashboard
