import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Login from "./features/auth/Login"
import Signup from "./features/auth/Signup"


const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
