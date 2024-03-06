import {useState,useContext, createContext,useEffect} from "react"

export const PedidosContext = createContext([])

export default function PedidosProvider({children}){
    const [pedidos, setPedidos] = useState(JSON.parse(localStorage.getItem("pedidos")) || [])


    useEffect(()=>{
        if(pedidos){
            localStorage.setItem("pedidos",JSON.stringify(pedidos))
        }else{
            localStorage.removeItem("pedidos")
        }
    },[pedidos])


    return(

    <PedidosContext.Provider value={{pedidos, setPedidos}}>
        {children}
    </PedidosContext.Provider>

    )
}