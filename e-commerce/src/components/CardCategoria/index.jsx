import { Link } from "react-router-dom";

export default function CardCategoria(props){
    function formateCategorieName(categorie){
        if(categorie==='calcados'){
            return 'Calçados'
        }else{
            return categorie[0].toUpperCase() + categorie.slice(1).toLowerCase();
        }
    }
    return(
        <Link to={`/produtos?categorie=${props.categoria.categorie}`}>
        
        <main className="flex items-center shadow-xl  bg-slate-100 rounded-lg w-[62vw] md:w-[25vw] lg:w-[18vw] h-24 min-w-[210px]" key={props.categoria.categorie_id}>
            <img src="../src/assets/images/shoe.png" alt="" className="md:w-[8vw] h-20 object-contain" />
            <p className="mx-3 font-Inter font-semibold text-base">{formateCategorieName(props.categoria.categorie)}</p>

        </main>
        </Link>
    )
}