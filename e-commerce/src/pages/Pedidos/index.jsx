import { useContext } from "react";
import CardPedido from "../../components/CardPedido";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { PedidosContext } from "../../contexts/PedidosContext";
export default function Pedidos(){

    const {pedidos} = useContext(PedidosContext)
    return(
        <>
        <Header/>
        
        <main className="">          
            <div className=" flex flex-col md:flex-row  md:my-20 md:mx-20 items-center md:items-baseline   justify-center md:justify-normal ">          
                <section className="hidden  md:flex flex-col bg-slate-100 rounded-lg py-8 h-32 gap-3">
                    <a href="" className="focus:text-laranja"> Meus Pedidos</a>
                    <div className="border-t border-stone-500"></div>
                    <a href="" className="focus:text-laranja ">Minhas Informações</a>
                </section>
                <section className="flex flex-col  bg-slate-100 my-10  md:mx-10 py-8  w-4/5 p-4 md:p-10 rounded-lg   ">
                    <div className="flex justify-between">
                        <h2 className="text-black md:text-stone-500 text-base font-semibold ">Meus Pedidos</h2>
                        <span className="flex">
                            <p className="hidden md:flex">Status</p>
                            <p className="hidden md:flex">Meus Pedidos</p>
                        </span>
                    </div>
                    
                    <div className="">                      
                        {pedidos.filter((sapato)=>(sapato.qtd>0)).map((p)=>(<CardPedido key={pedidos.id} p={p}/>))}
                    </div>

                </section>
            </div>           
        </main>
        <Footer classname=" "/>
        </>
    )
}