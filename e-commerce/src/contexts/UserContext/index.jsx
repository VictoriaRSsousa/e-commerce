import {useState, createContext} from "react"

export const UsersContext = createContext([])

export default function UsersProvider({children}){
    const [user, setUser] = useState({name:"",email:"",password:""})
    return(

    <UsersContext.Provider value={{user, setUser}}>
        {children}
    </UsersContext.Provider>

    )
}