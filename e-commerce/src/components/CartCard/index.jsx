

export default function CardPedido(props){

    return(
        <main className="md:flex justify-between font-Inter" key={props.p.product_id}>
            
            <div className=" flex  gap-4">        
                <img src={props.p.image} alt="" className="w-20 h-[70px] object-cover	" />
                <section className="">
                    <h3 className="font-semibold text-sm text-black">{props.p.model}</h3>
                    <p className="font-semibold text-stone-500 text-[10px]">{props.p.categorie}</p>
                    <span className="flex gap-2 items-center">
                        <p className="font-semibold text-sm text-black">{props.p.price} x{props.p.qtd}</p>
                    </span>
                </section>
            </div> 
        </main>
    )
}