
import CardPedido from "../../components/CardPedido";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useContext } from "react";
import { PedidosContext } from "../../contexts/PedidosContext";
import { CartTotalContext } from "../../contexts/CartTotalContext";


export default function Cart(){

    const {pedidos,setPedidos} = useContext(PedidosContext)
    const {setCartTotal} = useContext(CartTotalContext)
    const filtar =pedidos.filter((sapato)=>(sapato.qtd>0))
    const somar =filtar.reduce((acc, atual)=>acc+atual.valor,0)

    function handleCart(){
        setPedidos([])
        setCartTotal(0)
    }

    return(

        <main>
            <Header/>
             <div className="min-h-80	 p-8 bg-zinc-50  font-semibold rounded-r-lg -top-">
                    <h2 className="text-black">Meu Carrinho</h2>
                    <div className="text-black flex flex-col ">
                        <div className="border border-black"></div>
                        <div className="flex flex-col gap-5">
                        {pedidos.filter((sapato)=>(sapato.qtd>0)).map((p)=>(<CardPedido key={pedidos.id} p={p}/>))}
                        </div>
                    </div>
                    <footer className="flex flex-col mt-20">
                        <div className="border border-black w-full"></div>
                        <article className="flex gap-6">
                                <h2>Valor Total:</h2>
                                {<p>{somar}</p>||0}
                            </article>
                        <div className="my-3  flex justify-between items-center">
                            <a onClick={handleCart}> Esvaziar Carrinho</a>
                            <button className="bg-azul-escuro text-white w-48 h-10 rounded-xl  font-medium">Finalizar Compra</button>
                        </div>
                        
                    </footer>
                    </div>
                    <Footer/>
        </main>
    )
}