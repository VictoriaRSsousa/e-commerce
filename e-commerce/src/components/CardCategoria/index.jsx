import { Link } from "react-router-dom";

export default function CardCategoria(props){

    return(
        <Link to={`/produtos?categorie=${props.categoria.categorie}`}>
        
        <main className="flex items-center shadow-xl  bg-slate-100 rounded-lg w-[62vw] md:w-[14vw] h-24" key={props.categoria.categorie_id}>
            <img src="../src/assets/images/shoe.png" alt="" className="w-20 h-20" />
            <p className="mx-3 font-Inter font-semibold text-base w-fit">{props.categoria.categorie}</p>

        </main>
        </Link>
    )
}