import {useState,useContext, createContext} from "react"

export const PedidosContext = createContext([])

export default function PedidosProvider({children}){
    const [pedidos, setPedidos] = useState([])
    return(

    <PedidosContext.Provider value={{pedidos, setPedidos}}>
        {children}
    </PedidosContext.Provider>

    )
}