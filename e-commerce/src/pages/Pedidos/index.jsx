import { RiH1 } from "react-icons/ri";
import CardPedido from "../../components/CardPedido";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState,useContext } from "react"; 
import { ComprasContext } from "../../contexts/ComprasContext";


export default function Pedidos(){
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const { compras, setCompras } = useContext(ComprasContext);
    console.log(compras);

    function handleOpcao(event){
        setOpcaoSelecionada(event.target.value)
        console.log(event.target.value)
        console.log(opcaoSelecionada);
    }

    useEffect(()=>{

    },[opcaoSelecionada])

 
    function teste(){
        console.log(testeeeee);
    }

    return(
        <>
            <Header/>
        
            <main className="">          
                <div className=" flex flex-col md:flex-row  md:my-20 md:mx-20 items-center md:items-baseline   justify-center md:justify-normal ">          
                    <section className="hidden  md:flex flex-col bg-slate-100 rounded-lg py-8 h-32 gap-3 w-64 p-8	">
                        <button href="" onClick={handleOpcao} value="pedido" className="focus:text-laranja"> Meus Pedidos</button>
                        <div className="border-t border-stone-500"></div>
                        <button href="" onClick={handleOpcao} value="informacao" className="focus:text-laranja ">Minhas Informações</button>
                    </section>
                    <section className="md:hidden  mt-8">
                        <form action="">
                        <select name="" id="" className="bg-laranja text-white h-12 w-60 font-Inter font-semibold text-base rounded-lg" value={opcaoSelecionada} onChange={handleOpcao}>
                            <option  value="pedido"  selected className="h-10 w-64">Meus Pedidos</option>
                            <option   value="informacao"  className="h-12 w-64">Minhas Informações</option>
                        </select>
                        </form>
                    </section>
                    
                    <div className="flex flex-col  bg-slate-100 my-10  md:mx-10 py-8  w-4/5 p-4 md:p-10 rounded-lg   ">
                        {!opcaoSelecionada || opcaoSelecionada==="pedido"?
                            <section className=" ">
                                <div className="flex justify-between">
                                    <h2 className="text-black md:text-stone-500 text-base font-semibold ">Meus Pedidos</h2>
                                    <span className="flex">
                                        <p className="hidden md:flex">Status</p>
                                        <p className="hidden md:flex">Meus Pedidos</p>
                                    </span>
                                </div>
    {/* {pedidos
    // .filter((sapato) => sapato.qtd > 0)
    // .map((p) => (
    //   <CartCard key={pedidos.id} p={p} />
    // ))} */}
                                <div className=" my-5 flex flex-col gap-5">   
                                    {compras.map((compra)=>(
                                        <CardPedido compra ={compra} key={compras.id}/>
                                    ))}   
                                </div>              
                                                
                            </section>    
                            :
                            <section className=" ">
                                <p>INFORMAÇÕES DO USUÁRIO!</p>
                            </section>}
                    </div>                 
                    
                </div>           
            </main>
            <Footer classname=" "/>
        </>
    )
}