import {  useContext,useState,useEffect } from "react";
import { PedidosContext } from "../../contexts/PedidosContext";
import { MdClose } from "react-icons/md";
import CartCard from "../CartCard/index"
import api from "../../api";
import { UsersContext } from "../../contexts/UserContext";
export default function Cart({onClose}){

    const { pedidos, setPedidos } = useContext(PedidosContext);
    const {user,setUser} = useContext(UsersContext)
    const [cartTotal, setCartTotal] = useState( parseInt(localStorage.getItem("cartTotal")) || 0)
    const somar = pedidos
    .filter((sapato) => sapato.qtd > 0)
    .map((sapato) => sapato.qtd * sapato.price)
    .reduce((acc, atual) => acc + atual, 0);

    function emptyCart() {    
        setPedidos([]);
        setCartTotal(0);
      }
      
    const pedidosCompra = pedidos.map((pedido)=>{
        return {sale_product_id:pedido.product_id,price:pedido.price,qtd_sale:pedido.qtd}
      })
      async function buy(){
        const response = await api.compra(user.idUser,pedidosCompra)
        const result = await response.json()
        alert(result.message)
    
    
        setPedidos([])
    
     
      }

    return(
        <>
            <section className="flex-col justify-between h-96 w-64 p-8 bg-zinc-50 fixed right-0 flex top-0 	z-50 font-semibold rounded-l-lg  duration-1000 out-in-ease  overflow-auto ">
                <header>
                  <div className="flex justify-between items-center"> 
                    <h2 className="text-black">Meu Carrinho</h2>
                    <MdClose className="h-7 w-7 text-black cursor-pointer" onClick={onClose}/>

                  </div>
                  <div className="border border-black"></div>
                </header>
                <div className="text-black flex flex-col gap-6	justify-around ">
                  {pedidos
                    .filter((sapato) => sapato.qtd > 0)
                    .map((pedido) =>
                    
                    {
                      return(
                      <div  key={pedido.product_id}>
        
                        <CartCard  p={pedido}/>
                      </div>
                    )})}
                </div>
                <footer className="flex flex-col">
                  <div className="border border-black "></div>
                  <article className="flex justify-between text-base	font-semibold	font-Inter">
                    <h2 className="text-black">Valor Total:</h2>
                    {<p className="text-azul-escuro">{somar.toFixed(2)}</p> ||
                      0}
                  </article>
                  <div className=" flex font-Inter  justify-around items-center ">
                    <button
                      onClick={emptyCart}
                      className="cursor-pointer  text-stone-500  text-[10px]"
                    >
                      Esvaziar
                    </button>
                    <button
                      onClick={buy}
                      className="bg-azul-escuro  text-white rounded-xl h-6 w-32 text-[10px] font-medium"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </footer>
              </section>
        
        </>

    )
}