export default function CardPedido(props){

    return(
        <main className="md:flex justify-between font-Inter">
            
            <div className=" flex  gap-4">        
                <img src="../src/assets/images/shoe.png" alt="" className="w-20 h-[70px] object-cover	" />
                <section className="">
                    <h3 className="font-semibold text-sm text-black">{props.p.modelo}</h3>
                    <p className="font-semibold text-stone-500 text-[10px]">{props.p.tipo}</p>
                    <p className="font-semibold text-sm text-black">{props.p.valor} x{props.p.qtd}</p>
                </section>
            </div> 
        </main>
    )
}