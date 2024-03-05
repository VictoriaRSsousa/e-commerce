import {useState, createContext,useEffect} from "react"

export const UsersContext = createContext([])

export default function UsersProvider({children}){
    const [user, setUser] = useState({name:"",email:"",idUser:""})
    
    useEffect(()=>{
        if(user.idUser){
            console.log("tem");
            localStorage.setItem("user",JSON.stringify(user))
        } else {
            console.log("nao tem");
            localStorage.removeItem("user");
        }
        
    },[user])

    

    return(

    <UsersContext.Provider value={{user, setUser}}>
        {children}
    </UsersContext.Provider>

    )
}