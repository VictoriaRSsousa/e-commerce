export default function Destaque(props){
    return(
        <>
        <main className="shadow-md rounded">
        <section>
            <img src="../src/assets/images/shoes.png" alt="" className="w-full" />
        </section>
        <section className="p-2">
            <p className="text-[#1E3A8A] text-Inter font-bold">{props.sapato.modelo}</p>
            <p className="text-[#DDDDDD] font-medium	 ">{props.sapato.tipo}</p>
            <p className="text-[#EA580C] font-semibold">{props.sapato.valor}</p>
            <button className="bg-[#1E3A8A] text-white px-3 rounded-md	font-medium	 ">Comprar</button>
        </section>
        </main>
        </>
    )
}