import CardPedido from "../../components/CardPedido";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function Pedidos(){
    return(
        <main className="">
            <Header/>
            <div className=" flex flex-col md:flex-row md:my-20 md:mx-20 ">          
                <section className="hidden  md:flex flex-col bg-slate-100">
                    <a href="" className="focus:text-laranja"> Meus Pedidos</a>
                    <a href="" className="focus:text-laranja">Minhas Informações</a>
                </section>
                <section className="flex flex-col  bg-slate-100  md:mx-10 py-8  w-3/5 md:p-10">
                    <div className="flex justify-between">
                        <h2 className="text-black md:text-stone-500 text-base font-semibold ">Meus Pedidos</h2>
                        <span className="flex">
                            <p className="hidden md:flex">Status</p>
                            <p className="hidden md:flex">Meus Pedidos</p>
                        </span>
                    </div>
                    
                    <div className="">
                        <CardPedido/>
                        <CardPedido/>
                    </div>

                </section>
            </div>
            <Footer classname=" "/>
        </main>
    )
}