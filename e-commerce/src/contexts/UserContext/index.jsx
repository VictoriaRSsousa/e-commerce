import {useState,useContext, createContext} from "react"

export const UsersContext = createContext([])

export default function UsersProvider({children}){
    const [users, setUsers] = useState([])
    return(

    <UsersContext.Provider value={{users, setUsers}}>
        {children}
    </UsersContext.Provider>

    )
}