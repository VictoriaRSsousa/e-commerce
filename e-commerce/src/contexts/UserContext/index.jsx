import {useState, createContext,useEffect} from "react"

export const UsersContext = createContext([])

export default function UsersProvider({children}){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [token, setToken] = useState(localStorage.getItem("token")|| null)
    
    useEffect(()=>{
        if(user){
         //   console.log("tem");
            localStorage.setItem("user",JSON.stringify(user))
        } else {
          //  console.log("nao tem");
            localStorage.removeItem("user");
        }
        
    },[user])

    useEffect(()=>{
        if(token){
            //   console.log("tem");
              
               localStorage.setItem("token",token)
           } else {
             //  console.log("nao tem");
               localStorage.removeItem("token");

           }
    },[token])

    

    return(

    <UsersContext.Provider value={{user, setUser,token,setToken}}>
        {children}
    </UsersContext.Provider>

    )
}