import {useState, createContext,useEffect} from "react"
import api from "../../api"

export const ProdutosContext = createContext([])

export default function ProdutosProvider({children}){
    const [produtos, setProdutos] = useState([])

    async function getAllProducts(){
        const response = await api.getProducts()
        const result = await response.json()
        setProdutos(result)
 
    }

    useEffect(()=>{
        getAllProducts()
    },[])
    return(

    <ProdutosContext.Provider value={{produtos, setProdutos}}>
        {children}
    </ProdutosContext.Provider>

    )
}