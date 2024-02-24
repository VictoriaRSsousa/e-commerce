import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BiSolidUpArrow,BiSolidDownArrow  } from "react-icons/bi";
import { arrayDeSapatos } from "../../api/index";
import { useParams, Navigate } from 'react-router-dom';




export default function Produto() {
  const { id } = useParams();
  const sapato = arrayDeSapatos.filter((sapato)=>sapato.id ==parseInt(id))
  
  return (
    <>
      <Header />
      {sapato.length>0?      <main className=" flex justify-center items-center  ">
        <body className="	 flex flex-col md:flex-row  md:items-center mt-14 md:m-40 shadow-lg bg-slate-100 p-6 md:p-7 gap-2 md:gap-16 font-Inter">
          <section className="">
            <img
              src="https://m.media-amazon.com/images/I/71JtGDJmz7L._AC_SY741_.jpg"
              className=" w-[223px] md:w-[309px]	 h-[172px] md:h-[342px]"
              alt=""
            />
            <span className="text-2xl	hidden md:flex flex-col gap-6	mt-10">
              <p className="text-azul-escuro font-semibold ">Quantidades Disponíveis</p>
              <p className="font-medium	text-stone-500 ">{sapato[0].quantidade == 0?`Produto esgotado`:sapato[0].quantidade ==1?`1 Item Restante `:`${sapato[0].quantidade} Itens Disponíveis`}</p>
            </span>
          </section>
          <section className=" flex flex-col ">
            <article className="font-medium	text-sm	md:text-2xl text-stone-500	flex flex-col gap-2">
              <h3 className="font-semibold text-azul-escuro text-4xl	">{sapato[0].modelo}</h3>
              <p>{sapato[0].tipo}</p>
              <p className="w-[224px] md:w-[514px] text-wrap ">
                {sapato[0].descricao}
              </p>
            </article>
            <article className="flex flex-col md:flex-row items-center gap-7 my-10">
              <span className="flex flex-col items-center">
                <p className="font-semibold text-2xl text-black">Quantidade:</p>
                <div className="flex bg-white border border-black rounded-md h-10 w-24	justify-center items-center gap-3  ">
                  <p className="text-2xl font-semibold">01</p>
                  <div>
                    <BiSolidUpArrow/>
                    <BiSolidDownArrow/>
                  </div>

                </div>
              </span>
              <button className="bg-azul-escuro text-white w-[222px] md:w-[352px] h-14	 md:h-20 rounded-lg font-semibold text-2xl">Comprar</button>
            </article>
          </section>
        </body>
      </main>:
        <Navigate to="*"/>
      }

      <Footer />
    </>
  );
}
