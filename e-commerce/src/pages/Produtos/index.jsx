import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { arrayDeSapatos } from "../../api";
import Destaque from "../../components/Destaque";


export default function Produtos(){
    
    return(
        <>
        <Header/>
        <main className="flex md:m-20 md:gap-20  justify-center" >
            <section className="flex flex-col bg-zinc-50 rounded-lg shadow-lg h-[263px] w-[251px] text-base	text-stone-500 font-semibold">
                <div className="h-10 flex gap-4 items-center " >
                    <input type="radio" className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500" name="radioGroup" checked/> 
                    <label htmlFor="">Categoria</label>               
                </div>
                <div className="h-10 flex gap-4 items-center " >
                    <input type="radio" /> 
                    <label htmlFor="">Categoria</label>               
                </div>
                <div className="h-10 flex gap-4 items-center " >
                    <input type="radio" /> 
                    <label htmlFor="">Categoria</label>               
                </div>
                <div className="h-10 flex gap-4 items-center " >
                    <input type="radio" /> 
                    <label htmlFor="">Categoria</label>               
                </div>
                <div className="h-10 flex gap-4 items-center " >
                    <input type="radio" /> 
                    <label htmlFor="">Categoria</label>               
                </div>
                <div className="h-10 flex gap-4 items-center " >
                    <input type="radio" /> 
                    <label htmlFor="">Categoria</label>               
                </div>


            </section>
            <section className=" grid grid-cols-2 md:grid-cols-4 md:gap-10">
                {arrayDeSapatos.map((sapato)=>(<Destaque sapato={sapato} key={sapato.id}/>))}    

            </section>
            
        </main>
        
        <Footer/>
        </>
    )
}