import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
export default function Destaque(props){
    // const {setCart} = useContext(CartContext)
    const [cart,setCart] = useState("")

    function handleTotal(){
        props.setTotal((preview)=>preview+1)
    }

    function handleData(){
        setCart()

        
    }
    return(
        <>
        <main className="shadow-md rounded">
        <section>
            <img src="../src/assets/images/shoes.png" alt="" className="w-full" />
        </section>
        <section className="p-2 h-40 w-40 flex flex-col " onSubmit={handleData}>
            <p className="text-[#1E3A8A] text-Inter font-bold">{props.sapato.modelo}</p>
            <p className="text-[#DDDDDD] font-medium	 ">{props.sapato.tipo}</p>
            <p className="text-[#EA580C] font-semibold">{props.sapato.valor}</p>
            <button className="bg-[#1E3A8A] text-white px-3 rounded-md	font-medium flex  w-4/5" onClick={handleTotal} type="submit">Comprar</button>
            
        </section>
        </main>
        </>
    )
}