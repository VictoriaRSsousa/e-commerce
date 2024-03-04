import {useState, createContext} from "react"

export const UsersContext = createContext([])

export default function UsersProvider({children}){
    const [user, setUser] = useState(localStorage.getItem("user") || {name:"",email:"",idUser:""})

    if(user.idUser){
        localStorage.setItem("user",JSON.stringify(user))
    }

    return(

    <UsersContext.Provider value={{user, setUser}}>
        {children}
    </UsersContext.Provider>

    )
}