// import { useEffect, useContext,useState } from "react";
// import { PedidosContext } from "../../contexts/PedidosContext";
// import { ComprasContext } from "../../contexts/ComprasContext";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { MdClose } from "react-icons/md";
// import { UsersContext } from "../../contexts/UserContext";
// export default function Cart(){
//     const { pedidos, setPedidos } = useContext(PedidosContext);
//     const [showCart, setShowCart] = useState(false)
//     const somar = pedidos
//     .filter((sapato) => sapato.qtd > 0)
//     .map((sapato) => sapato.qtd * sapato.valor)
//     .reduce((acc, atual) => acc + atual, 0);

//     function handleCart() {    
//         setPedidos([]);
//         setCartTotal(0);
//       }
      
//       function handleCompra() {
//         setCompras((preview)=>{
//           //const differentItems =  preview.filter((item)=>item.id!==pedidos.id)
//           return [{pedido:pedidos,total:somar}]
//                    });
//         setPedidos([])
    
//       }
//       function handleShowCart(action){
//         if(action==="show"){
//           setShowCart(true)
    
//         }else{
//           setShowCart(false)
//         }
//       }
//       console.log(showCart);

//     return(
//         <>
//         {
//             showCart?
//             <div className="flex-col justify-between h-96 w-64 p-8 bg-zinc-50 fixed right-0 flex top-0 	 font-semibold rounded-l-lg  duration-1000 out-in-ease  overflow-auto ">
//                 <header>
//                   <div className="flex justify-between items-center"> 
//                     <h2 className="text-black">Meu Carrinho</h2>
//                     <MdClose className="h-7 w-7 text-black cursor-pointer" onClick={()=>handleShowCart("close")}/>

//                   </div>
//                   <div className="border border-black"></div>
//                 </header>
//                 <div className="text-black flex flex-col gap-6	justify-around ">
//                   {pedidos
//                     .filter((sapato) => sapato.qtd > 0)
//                     .map((pedido) =>
                    
//                     {console.log(pedido)
//                       return(
//                       <div key={pedido.id}>
//                         <CartCard  p={pedido} />
//                       </div>
//                     )})}
//                 </div>
//                 <footer className="flex flex-col">
//                   <div className="border border-black "></div>
//                   <article className="flex justify-between text-base	font-semibold	font-Inter">
//                     <h2 className="text-black">Valor Total:</h2>
//                     {<p className="text-azul-escuro">{somar.toFixed(2)}</p> ||
//                       0}
//                   </article>
//                   <div className=" flex font-Inter  justify-around items-center ">
//                     <button
//                       onClick={handleCart}
//                       className="cursor-pointer  text-stone-500  text-[10px]"
//                     >
//                       Esvaziar
//                     </button>
//                     <button
//                       onClick={handleCompra}
//                       className="bg-azul-escuro  text-white rounded-xl h-6 w-32 text-[10px] font-medium"
//                     >
//                       Finalizar Compra
//                     </button>
//                   </div>
//                 </footer>
//               </div>:null
//         }
        
//         </>

//     )
// }