export default function CardPedido(){
    return(
        <main className="">
        <div className="md:flex">
            <img src="../src/assets/images/shoes.png" alt="" className="w-20 h-18" />
            <section>
                <h3 className="font-semibold text-sm">Nique Air Force</h3>
                <p className="text-stone-500 text-[10px]">Tênis</p>
                <p className="font-semibold text-sm text-black md:text-laranja">R$ 200,00</p>
            </section>
        </div>
        <footer className="flex flex-col md:flex-row ">
            <p>Status</p>
            <p className="flex ">Finalizado</p>

        </footer>

    </main>
    )
}