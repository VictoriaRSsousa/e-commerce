export default function CardPedido(props){

    return(
        <main className="md:flex justify-between border-t border-stone-500 ">
            
        <div className=" flex  gap-4">
            
            <img src="../src/assets/images/shoes.png" alt="" className="w-20 h-18" />
            <section className="">
                <h3 className="font-semibold text-sm">{props.p.modelo}</h3>
                <p className="text-stone-500 text-[10px]">{props.p.tipo}</p>
                <p className="font-semibold text-sm text-black md:text-laranja">{props.p.valor} x{props.p.qtd}</p>
            </section>
        </div>
        <div className="">
            <footer className="flex md:flex justify-around ">
                <p className="md:hidden">Status</p>
                <p className="flex text-green-700 font-bold">{props.p.status}</p>
            </footer>
            <div className=""></div>
        </div>

    </main>
    )
}