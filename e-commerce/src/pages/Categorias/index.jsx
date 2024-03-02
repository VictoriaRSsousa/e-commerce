import CardCategoria from "../../components/CardCategoria";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import api, { arrayDeSapatos } from "../../api";
import { useState,useEffect } from "react";

export default function Categorias(){
    const [categories,setCategories] = useState([])

    async function handleApi(){
        const response = await api.getCategories()
        const result = await response.json()
        setCategories(result)
        console.log(result);
        console.log(categories);
        
    }

    useEffect(()=>{
        handleApi()
    },[])

    // const allCategorias = arrayDeSapatos.map((sapato) => sapato.tipo);
    // const categorias = [...new Set(allCategorias)];
    
    return(
    
        <>
        <Header/>
        <main  className=" flex justify-center my-14 md:my-20  " >
            <div className="grid md:grid-cols-4 gap-10">
                 { categories.map((categoria)=>(<CardCategoria categoria={categoria} key={categories.categorie_id} />))} 
            </div>
        </main>
        <Footer />
        </>
        
        
    )
}