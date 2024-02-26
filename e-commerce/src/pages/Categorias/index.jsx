import CardCategoria from "../../components/CardCategoria";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { arrayDeSapatos } from "../../api";

export default function Categorias(){
    const allCategorias = arrayDeSapatos.map((sapato) => sapato.tipo);
    const categorias = [...new Set(allCategorias)];
    return(
    
        <>
        <Header/>
        <main  className=" flex justify-center my-14 md:my-20  " >
            <div className="grid md:grid-cols-4 gap-10">
                { categorias.map((categoria,index)=>(<CardCategoria categoria={categoria} key={index} />))}

            </div>
        </main>
        <Footer />
        </>
        
        
    )
}