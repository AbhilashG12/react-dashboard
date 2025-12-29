import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Login from "./features/auth/Login"
import Signup from "./features/auth/Signup"
import Dashboard from "./components/ui/Dashboard"
import Protect from "./features/auth/Protect"

const App = () => {

  return (
    <BrowserRouter>
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Protect><Dashboard/></Protect>}/>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
