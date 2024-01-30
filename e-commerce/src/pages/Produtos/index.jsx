import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { arrayDeSapatos } from "../../api";
import Destaque from "../../components/Destaque";


export default function Produtos(){
    
    return(
        <>
        <Header/>
        <main className="min-h-screen grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-10">
        {arrayDeSapatos.map((sapato)=>(<Destaque sapato={sapato}/>))}    
            
        </main>
        
        <Footer/>
        </>
    )
}