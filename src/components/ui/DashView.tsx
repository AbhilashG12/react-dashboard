import { useAuth } from "../../features/auth/AuthContext"
import {motion} from "framer-motion";
import { useDash } from "../../hooks/DashFetch";
import Modal from "../../Modal/Modal";

const DashView = () => {
    const {total,active,theme,toggle} = useDash()
    const {user} = useAuth()
  return (
    <motion.div className={theme==="light"?"border w-150 h-100 ml-100 mt-20 rounded shadow-2xl cursor-pointer":"border w-150 h-100 ml-100 mt-20 rounded shadow-2xl cursor-pointer bg-gray-500"} whileHover={{scale:1.1}} >
        <div className="flex">
        <h1 className="text-2xl font-bold font-serif ml-5 mt-5">Hey There {user?.fullname}</h1>
        <div>
         <Modal>
            <Modal.Trigger>
              <button className="cursor-pointer ml-35 mt-5 border p-2 rounded-2xl bg-green-300 hover:bg-green-400">
                View Account
              </button>
            </Modal.Trigger>

            <Modal.Content>
              <Modal.Header>Account Info</Modal.Header>
              <Modal.Body>
                <p>
                  <strong>Name:</strong> {user?.fullname}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p className="mt-2">
                  <strong>Theme:</strong> {theme}
                </p>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </div>
        <button className="ml-5 border mt-5 p-2 rounded-2xl bg-blue-300 hover:bg-blue-400 cursor-pointer" onClick={()=>{toggle()}}>{theme}</button>
        </div>
        <hr className="w-140 ml-5 mt-5" />
        <div>
            <h1 className="text-2xl font-bold font-serif ml-10 mt-5">Stats : </h1>
        </div>
        <div className="text-xl font-bold font-serif mt-5 ml-5 flex flex-col gap-5">
            <h1>The Number of Users in your dummydb is : {total}</h1>
            <h1>The Active number of Users are : {active} </h1>
            <h1>The Theme of this Card is : {theme} </h1>
        </div>
    </motion.div>
  )
}

export default DashView
