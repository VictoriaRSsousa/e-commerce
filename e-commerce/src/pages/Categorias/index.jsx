import CardCategoria from "../../components/CardCategoria";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Categorias(){
    const categorias = [
    {id:1,nome:'Calçacos',img:'../src/assets/images/shoe.png'},
    {id:2,nome:'Acessorios',img:'../src/assets/images/shoe.png'},
    {id:3,nome:'Roupas',img:'../src/assets/images/shoe.png'},
    {id:4,nome:"Roupas",img:'../src/assets/images/shoe.png'},
    {id:5,nome:'Marcas', img:'../src/assets/images/shoe.png'},
    {id:6,nome:'Equipamentos Esportivos',img:'../src/assets/images/shoe.png'},
    {id:7,nome:'Suplementos', img:'../src/assets/images/shoe.png'},
    {id:8,nome:'Calçacos',img:'../src/assets/images/shoe.png'},
    {id:9,nome:'Acessorios',img:'../src/assets/images/shoe.png'},
    {id:10,nome:'Roupas',img:'../src/assets/images/shoe.png'},
    {id:11,nome:"Roupas",img:'../src/assets/images/shoe.png'},
    {id:12,nome:'Marcas', img:'../src/assets/images/shoe.png'}]
    return(
    
        <>
        <Header/>
        <main  className=" flex justify-center my-14 md:my-20  " >
            <div className="grid md:grid-cols-4 gap-10">
                { categorias.map((categoria)=>(<CardCategoria categoria={categoria} key={categorias.id} />))}

            </div>
        </main>
        <Footer />
        </>
        
        
    )
}