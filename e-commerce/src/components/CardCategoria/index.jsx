import { Link } from "react-router-dom";

export default function CardCategoria(props){

    return(
        <Link to={`/produtos?categoria=${props.categoria.categorie_id}`}>
        
        <main className="flex items-center shadow-xl  bg-slate-100 rounded-lg w-52 h-24       ">
            <img src="../src/assets/images/shoe.png" alt="" className="h-20 w-20" />
            <p className="mx-3 font-Inter font-semibold text-base">{props.categoria.categorie}</p>

        </main>
        </Link>
    )
}