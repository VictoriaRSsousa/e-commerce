import CardPedido from "../../components/CardPedido";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function Pedidos(){
    return(
        <main>
            <Header/>
            <div className=" flex flex-col md:flex-row">          
                <section className="hidden md:flex-col flex">
                    <a href="" className="focus:text-laranja"> Meus Pedidos</a>
                    <a href="" className="focus:text-laranja">Minhas Informações</a>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-100  px-10 py-8">
                    <span className="flex">
                        <h2 className="text-black md:text-stone-500 text-base font-semibold ">Meus Pedidos</h2>
                        <p className="hidden md:flex">Meus Pedidos</p>
                    </span>
                    
                    <div className="">
                        <CardPedido/>
                        <CardPedido/>
                    </div>

                </section>
            </div>
            <Footer classname=""/>
        </main>
    )
}