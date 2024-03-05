import {useState,useContext, createContext,useEffect} from "react"

export const PedidosContext = createContext([])

export default function PedidosProvider({children}){
    const [pedidos, setPedidos] = useState(  [])
    //JSON.parse(localStorage.getItem("cart")) ||

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //   }, [cart]);
    return(

    <PedidosContext.Provider value={{pedidos, setPedidos}}>
        {children}
    </PedidosContext.Provider>

    )
}