
// import { useState,useContext,createContext } from "react"
// import { users } from "../users/users";

// const STORAGE_KEY = 'user';

// interface Auth {
//     email : string,
//     fullname : string,

// }
// interface AuthContext {
//     user : Auth | null,
//     login : (email:string,password:string) => boolean,
//     logout : ()=> void
// }

// const AuthCntxt = createContext<AuthContext|null>(null);

// export const AuthContext = ({children}:{children:React.ReactNode}) => {

//     const [user,setUser] = useState<Auth|null>(()=>{
//         const stored = localStorage.getItem(STORAGE_KEY)
//         return stored ? JSON.parse(stored) : null
//     })

//     const login =(email:string,password:string):boolean=>{
//         const found = users.find(user=>user.email==email&&user.password==password)
//         console.log("user found")
//         if(!found) return false

//         const authUser : Auth = {
//             email : found.email,
//             fullname : found.fullname
//         }
        
//         localStorage.setItem(STORAGE_KEY,JSON.stringify(authUser))
//         setUser(authUser)
//         console.log("User logged in sucessfully!")
//         return true
//     }

//     const logout =()=>{
//         localStorage.removeItem(STORAGE_KEY)
//         setUser(null)
//     }

//     return(
//         <AuthCntxt.Provider value={{user,login,logout}}>
//             {children}
//         </AuthCntxt.Provider>
//     )

// }


// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth =()=>{
//     const ctx = useContext(AuthCntxt);

//     if(!ctx){
//         throw new Error("useAuth must be used inside AuthProvider")
//     }
//     return ctx
// }

// export default AuthContext






import { useState,useContext,createContext } from "react"
import { users } from "../users/users";

const STORAGE_KEY = 'user';

interface Auth {
    email : string,
    fullname : string,

}
interface AuthContext {
    user : Auth | null,
    login : (email:string,password:string) => boolean,
    logout : ()=> void
}

const AuthCntxt = createContext<AuthContext|null>(null);

export const AuthContext = ({children}:{children:React.ReactNode}) => {

    const [user,setUser] = useState<Auth|null>(()=>{
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : null
    })

    const login =(email:string,password:string):boolean=>{
        const found = users.find(user=>user.email==email&&user.password==password)
        console.log("user found")
        if(!found) return false

        const authUser : Auth = {
            email : found.email,
            fullname : found.fullname
        }
        
        localStorage.setItem(STORAGE_KEY,JSON.stringify(authUser))
        setUser(authUser)
        console.log("User logged in sucessfully!")
        return true
    }

    const logout =()=>{
        localStorage.removeItem(STORAGE_KEY)
        setUser(null)
    }

    return(
        <AuthCntxt.Provider value={{user,login,logout}}>
            {children}
        </AuthCntxt.Provider>
    )

}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth =()=>{
    const ctx = useContext(AuthCntxt);

    if(!ctx){
        throw new Error("useAuth must be used inside AuthProvider")
    }
    return ctx
}

export default AuthContext



