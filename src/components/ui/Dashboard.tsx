// import Sidebar from "./Sidebar"
import UsersPage from "../../features/users/UsersPage"
import DashView from "./DashView"
import Navbar from "./Navbar"


const Dashboard = () => {

    
  return (
    <div>
        <Navbar/>
        <DashView/>
        <UsersPage/>
        {/* <Sidebar/> */}
    </div>
  )
}

export default Dashboard
