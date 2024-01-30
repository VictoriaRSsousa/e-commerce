import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
export default function Destaque(props){
    const {setCart} = useContext(CartContext)
    function handleCart(event){

    }
    return(
        <>
        <main className="shadow-md rounded">
        <section>
            <img src="../src/assets/images/shoes.png" alt="" className="w-full" />
        </section>
        <section className="p-2">
            <p className="text-[#1E3A8A] text-Inter font-bold">{props.sapato.modelo}</p>
            <p className="text-[#DDDDDD] font-medium	 ">{props.sapato.tipo}</p>
            <p className="text-[#EA580C] font-semibold">{props.sapato.valor}</p>
            <button className="bg-[#1E3A8A] text-white px-3 rounded-md	font-medium	flex items-end justify-end " onClick={handleCart}>Comprar</button>
        </section>
        </main>
        </>
    )
}