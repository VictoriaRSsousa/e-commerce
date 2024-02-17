export default function CardPedido() {
  return (
    <main className=" font-Inter font-semibold  md:flex-col ">
      <div className="border-t border-stone-500   "></div>
      <div className="flex flex-col md:flex-row justify-between items-around">
        <section className="flex flex-col gap-4">
          <div className="flex">
            <img
              src="../src/assets/images/shoe.png"
              alt=""
              className="w-20 h-[70px] object-cover rounded-lg	"
            />
            <div>
              <p className="text-sm">Nique Air Surf</p>
              <p className="text-[10px] text-stone-500 mb-[6px]">Tênis</p>
              <p className="text-xs text-black md:text-laranja"> R$ 220,00 </p>
            </div>
          </div>
        </section>

        <section className="flex justify-between">
          <p className="text-stone-500 md:hidden ">Status</p>
          <p className="text-base	text-green-700">Finalizado</p>
        </section>
      </div>
    </main>
  );
}
