import { useContext, useState ,useEffect} from "react"
import { RiDeleteBin5Line } from "react-icons/ri";
import { PedidosContext } from "../../contexts/PedidosContext";
import { CartTotalContext } from "../../contexts/CartTotalContext"

export default function Destaque(props){
     const {setCartTotal} = useContext(CartTotalContext)
     const [qtdItens, setqtdItens] = useState(parseInt(localStorage.getItem(`${props.sapato.id}`))|| 0)
     const {pedidos,setPedidos} = useContext(PedidosContext)



    function handleItens(action){
        if(action==="adicionar"){

            setqtdItens((preview)=>preview+1)
            setCartTotal((preview)=>preview+1)
            

            // setPedidos([(preview)=>({...preview,pedido})])                 
        }else{
            if(qtdItens>0){
                setqtdItens((preview)=>preview-1)
                setCartTotal((preview)=>preview-1)
            }
        }
    }
    useEffect(()=>{
        localStorage.setItem(`${props.sapato.id}`,qtdItens)

        setPedidos((preview)=>{
            const differentItems =  preview.filter((item)=>item.id!== props.sapato.id)
            return [...differentItems , {...props.sapato, qtd: qtdItens,status:"Aguardando Pagamento"}]
             })
    },[qtdItens])
    console.log(pedidos)

    

    return(
        <>
        <main className="shadow-md rounded">

        <section>
            <img src="../src/assets/images/shoes.png" alt="" className="w-full" />
        </section>
        <section className="p-2 h-40 w-40 flex flex-col justify-between " >
            <div>
                <p className="text-[#1E3A8A] text-Inter font-bold">{props.sapato.modelo}</p>
                <p className="text-[#DDDDDD] font-medium	 ">{props.sapato.tipo}</p>
                <p className="text-[#EA580C] font-semibold">{props.sapato.valor}</p>
                
            </div>
            <div className="flex gap-4	 w-screen"> 
            <p>{qtdItens}</p>
             <button className="bg-[#1E3A8A] text-white px-3 rounded-md	font-medium flex  " onClick={()=>handleItens("adicionar")} >Comprar</button>
             {qtdItens>0?<button className="bg-red-600 text-white  rounded-md	flex justify-center items-center w-8 " onClick={()=>handleItens("remover")}><RiDeleteBin5Line/></button>:null}
            </div>
            
        </section>
        </main>
        </>
    )
}