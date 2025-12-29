import { useAuth } from "./AuthContext"
import { Navigate } from "react-router-dom"
const Protect = ({children}:{children:React.ReactNode}) => {
    const {user} = useAuth()
    if(!user){
        return <Navigate to="/login" replace/>
    }
  return (
    <>
      {children}
    </>
  )
}

export default Protect
