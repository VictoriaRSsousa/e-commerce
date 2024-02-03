import {useState, createContext} from "react"

export const CartTotalContext = createContext([])

export default function CartTotalProvider({children}){
    const [cartTotal, setCartTotal] = useState(parseInt(localStorage.getItem("totalCart"))||0)
    return(

    <CartTotalContext.Provider value={{cartTotal, setCartTotal}}>
        {children}
    </CartTotalContext.Provider>

    )
}