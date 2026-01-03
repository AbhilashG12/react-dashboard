// import Sidebar from "./Sidebar"
import UsersPage from "../../features/users/UsersPage"
import Button from "./Button"
import DashView from "./DashView"
import Navbar from "./Navbar"


const Dashboard = () => {
  const handleClick=()=>{
    console.log("Button has be clicked by the user")
  }
    
  return (
    <div>
        <Navbar/>
        <Button onClick={()=>{handleClick()}}>Click me</Button>
        <DashView/>
        <UsersPage/>
        {/* <Sidebar/> */}
    </div>
  )
}

export default Dashboard
