import { ProdutosContext } from "../../contexts/ProdutosContext";
import { useContext } from "react";

export default function CardPedido(props) {
  const {produtos} = useContext(ProdutosContext)
  const produto = produtos.filter((prod)=>prod.product_id === props.p.sale_product_id) 
  console.log(produto[0]);

  console.log(props.p.sale_product_id);
  return (
    <main className=" font-Inter font-semibold  md:flex-col ">
      <div className="border-t border-stone-500   "></div>
      <div className="flex flex-col md:flex-row justify-between items-around">
        <section className="flex flex-col gap-4">
          <div className="flex">
            <img
              src={produto[0].image}
              alt=""
              className="w-20 h-[70px] object-cover rounded-lg	"
            />
            <div>
              <p className="text-sm">{produto[0].model}</p>
              <p className="text-[10px] text-stone-500 mb-[6px]">{produto[0].categorie}</p>
              <p className="text-xs text-black md:text-laranja"> {props.p.price} x {props.p.qtd_sale}</p>
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
