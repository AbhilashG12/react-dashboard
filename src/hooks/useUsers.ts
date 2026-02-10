// import { useMemo,useState } from "react"
// import { users , type Users } from "../features/users/users"

// type Order = "asc" | "desc";
// type SortKey = "name" | "role"
// export const useUsers = () => {
//     const [search,setSearch] = useState("")
//     const [sortKey,setSort] = useState("name")
//     const [order,setOrder] = useState<Order>("asc")

//     const filtred = useMemo(()=>{
//         const result = users.filter((user)=>`${user.fullname} ${user.email}`.toLowerCase().includes(search.toLowerCase()))
//         result.sort((a,b)=>{
//             const valA = a[sortKey as keyof Users]
//             const valB = b[sortKey as keyof Users]

//              if (valA < valB) return order === "asc" ? -1 : 1
//              if (valA > valB) return order === "asc" ? 1 : -1
//              return 0
//         })
//     },[search,sortKey,order])


//     const toggleSort=(key:SortKey)=>{
//         if(sortKey == key){
//             setOrder((prev)=>(prev === "asc" ? "desc" : "asc"))
//         }else{
//             setSort(key)
//             setOrder("asc")
//         }
//     }


//     return {
//         users , filtred,
//         search,
//         setSearch,
//         sortKey,
//         order,
//         toggleSort ,
        
//     }
    
// }


import { useMemo,useState } from "react"
import { users , type Users } from "../features/users/users"

type Order = "asc" | "desc";
type SortKey = "name" | "role"
export const useUsers = () => {
    const [search,setSearch] = useState("")
    const [sortKey,setSort] = useState("name")
    const [order,setOrder] = useState<Order>("asc")

    const filtred = useMemo(()=>{
        const result = users.filter((user)=>`${user.fullname} ${user.email}`.toLowerCase().includes(search.toLowerCase()))
        result.sort((a,b)=>{
            const valA = a[sortKey as keyof Users]
            const valB = b[sortKey as keyof Users]

             if (valA < valB) return order === "asc" ? -1 : 1
             if (valA > valB) return order === "asc" ? 1 : -1
             return 0
        })
    },[search,sortKey,order])


    const toggleSort=(key:SortKey)=>{
        if(sortKey == key){
            setOrder((prev)=>(prev === "asc" ? "desc" : "asc"))
        }else{
            setSort(key)
            setOrder("asc")
        }
    }


    return {
        users , filtred,
        search,
        setSearch,
        sortKey,
        order,
        toggleSort ,
        
    }
    
}


