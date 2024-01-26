export default function CardPedido(){
    return(
        <main className="md:flex justify-between border-t border-stone-500 ">
            
        <div className=" flex ">
            <img src="../src/assets/images/shoes.png" alt="" className="w-20 h-18" />
            <section>
                <h3 className="font-semibold text-sm">Nique Air Force</h3>
                <p className="text-stone-500 text-[10px]">Tênis</p>
                <p className="font-semibold text-sm text-black md:text-laranja">R$ 200,00</p>
            </section>
        </div>
        <div>
            <footer className="flex md:flex justify-around ">
                <p className="md:hidden">Status</p>
                <p className="flex text-green-700 font-bold">Finalizado</p>
            </footer>
            <div className=""></div>
        </div>

    </main>
    )
}