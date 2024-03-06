import {useState,useContext, createContext,useEffect} from "react"

export const PedidosContext = createContext([])

export default function PedidosProvider({children}){
    const [pedidos, setPedidos] = useState(JSON.parse(localStorage.getItem("pedidos")) || [])


    useEffect(()=>{
        if(pedidos){
            console.log("tem pedido");
            localStorage.setItem("pedidos",JSON.stringify(pedidos))
        }else{
            localStorage.removeItem("pedidos")
            console.log("nao tem pedido");
        }
    },[pedidos])


    return(

    <PedidosContext.Provider value={{pedidos, setPedidos}}>
        {children}
    </PedidosContext.Provider>

    )
}