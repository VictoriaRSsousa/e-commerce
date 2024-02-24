import { useContext, useState ,useEffect} from "react"
import { PedidosContext } from "../../contexts/PedidosContext";
import { Link } from "react-router-dom";
import Produto from "../../pages/Produto";


export default function Destaque(props){
    //  const [qtdItens, setqtdItens] = useState(parseInt(localStorage.getItem(`${props.sapato.id}`))|| 0)
    //  const {pedidos,setPedidos} = useContext(PedidosContext)
    

    // useEffect(()=>{
    //     if(qtdItens>0){
    //         localStorage.setItem(`${props.sapato.id}`,qtdItens)
    //     }

    //     setPedidos((preview)=>{
    //         const differentItems =  preview.filter((item)=>item.id!== props.sapato.id)
    //         return [...differentItems , {...props.sapato, qtd: qtdItens}]
    //          })
    // },[qtdItens])


    // useEffect(()=>{
    //     if(pedidos.length===0){
    //         setqtdItens(0)
    //     }
    // },[pedidos])

    return(
        <>
        <main className="shadow-md rounded">

        <section>
            <img src="../src/assets/images/shoes.png" alt="" className="w-full" />
        </section>
        <section className="p-2 h-40 w-40 flex flex-col justify-between " >
            <div>
                <p className="text-[#1E3A8A] text-Inter font-bold text-wrap	">{props.sapato.modelo}</p>
                <p className="text-[#DDDDDD] font-medium	 ">{props.sapato.tipo}</p>
                <p className="text-[#EA580C] font-semibold">{props.sapato.valor}</p>
                
            </div>
            <div className="flex "> 
            {/* {qtdItens>0?<p className="text-xs flex items-center">{qtdItens}</p>:null} */}
                <Link to={`/produto/${props.sapato.id}`}>
                    <button className="bg-[#1E3A8A] text-white px-3 rounded-md	font-medium flex cursor-pointer " >Detalhes</button>
                </Link>
            </div>
            
        </section>
        </main>
        </>
    )
}