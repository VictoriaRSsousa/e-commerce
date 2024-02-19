import { RiDeleteBin5Line } from "react-icons/ri";
// import { useContext} from "react"
// import { PedidosContext } from "../../contexts/PedidosContext";
export default function CardPedido(props){
    function handleItens(action){
        if(action==="remover"){
            // console.log(pedidos.qtd);
        }

    }
    return(
        <main className="md:flex justify-between font-Inter">
            
            <div className=" flex  gap-4">        
                <img src="../src/assets/images/shoe.png" alt="" className="w-20 h-[70px] object-cover	" />
                <section className="">
                    <h3 className="font-semibold text-sm text-black">{props.p.modelo}</h3>
                    <p className="font-semibold text-stone-500 text-[10px]">{props.p.tipo}</p>
                    <span className="flex gap-2 items-center">
                        <p className="font-semibold text-sm text-black">{props.p.valor} x{props.p.qtd}</p>
                        <button className="bg-red-600 text-white  rounded-md	flex justify-center items-center w-5 h-5 "><RiDeleteBin5Line/></button>
                    </span>
                </section>
            </div> 
        </main>
    )
}