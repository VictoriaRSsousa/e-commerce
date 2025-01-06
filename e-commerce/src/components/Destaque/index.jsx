
import { Link } from "react-router-dom";


export default function Destaque(props){

    return(
        <>
        <div key={props.sapato.product_id} className="shadow-md min-w-[150px] rounded w-[45vw] md:w-[12vw]">

        <section>
            <img src={props.sapato.image} alt="" className="w-full h-32 object-cover" />
        </section>
        <section className="p-2 h-44 w-auto flex flex-col justify-between text-wrap " >
            <div className="h-[72px">
                <p className="text-[#1E3A8A] text-Inter font-bold text-wrap 	">{props.sapato.model}</p>
                <p className="text-[#DDDDDD] font-medium	w-fit ">{props.sapato.categorie}</p>
                <p className="text-[#EA580C] font-semibold">{props.sapato.price}</p>     
            </div>
            <div className="flex "> 
                <Link to={`/produto/${props.sapato.product_id}`} className="bg-[#1E3A8A] text-white px-3 rounded-md	font-medium flex cursor-pointer " >
                    Detalhes
                </Link>
            </div>
            
        </section>
        </div>
        </>
    )
}