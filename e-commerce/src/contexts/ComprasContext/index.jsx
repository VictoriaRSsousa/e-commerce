import {useState,useContext, createContext} from "react"

export const ComprasContext = createContext([])

export default function ComprasProvider({children}){
    const [compras, setCompras] = useState([])
    return(

    <ComprasContext.Provider value={{compras, setCompras}}>
        {children}
    </ComprasContext.Provider>

    )
}