import { useContext } from "react";
import CardPedido from "../../components/CardPedido";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";

export default function Cart(){
    const {cart} = useContext(CartContext)

    return(

        <main>
            <Header/>
             <div className="min-h-80	 p-8 bg-zinc-50  font-semibold rounded-r-lg -top-">
                    <h2 className="text-black">Meu Carrinho</h2>
                    <div className="text-black flex flex-col ">
                        <div className="border border-black"></div>
                            <CardPedido/>
                            <CardPedido/>
                            <article>
                                <h2>Total:</h2>
                                <p>R$ 400,00</p>
                            </article>


                    </div>
                    <footer className="flex flex-col mt-20">
                        <div className="border border-black w-full"></div>
                        <div className="my-3 flex flex-colum  items-center">
              
                    

                        </div>
                        
                    </footer>
                    </div>
                    <Footer/>
        </main>
    )
}