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
    }

    useEffect(()=>{
        handleApi()
    },[])

    return(
    
        <>
        <Header/>
        <main  className="min-h-[630px] md:min-h-[700px]	 flex justify-center my-14 md:my-20  " >
            <div className="grid md:grid-cols-3  gap-10">
                 { categories.map((categoria)=>(<CardCategoria categoria={categoria} key={categoria.categorie_id} />))} 
            </div>
        </main>
        <Footer />
        </>
        
        
    )
}