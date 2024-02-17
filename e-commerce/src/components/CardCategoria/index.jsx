export default function CardCategoria(props){

    return(
        <main className="flex items-center shadow-xl  bg-slate-100 rounded-lg w-52 h-24       ">

            <img src={props.categoria.img} alt="" className="h-20 w-20" />
            <p className="mx-3 font-Inter font-semibold text-base">{props.categoria.nome}</p>

        </main>
    )
}