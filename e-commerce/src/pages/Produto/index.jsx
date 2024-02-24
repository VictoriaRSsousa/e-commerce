import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BiSolidUpArrow,BiSolidDownArrow  } from "react-icons/bi";


export default function Produto() {
  return (
    <>
      <Header />

      <main className=" flex justify-center items-center  ">
        <body className="	 flex flex-col md:flex-row  md:items-center mt-14 md:m-40 shadow-lg bg-slate-100 p-6 md:p-7 gap-2 md:gap-16 font-Inter">
          <section className="">
            <img
              src="https://m.media-amazon.com/images/I/71JtGDJmz7L._AC_SY741_.jpg"
              className=" w-[223px] md:w-[309px]	 h-[172px] md:h-[342px]"
              alt=""
            />
            <span className="text-2xl	hidden md:flex flex-col gap-6	mt-10">
              <p className="text-azul-escuro font-semibold ">Quantidades Disponíveis</p>
              <p className="font-medium	text-stone-500 ">100 itens Disponíveis</p>
            </span>
          </section>
          <section className=" ">
            <article className="font-medium	text-sm	md:text-2xl text-stone-500	flex flex-col gap-2">
              <h3 className="font-semibold text-azul-escuro text-4xl	">Smart Watt</h3>
              <p>Relógio</p>
              <p className="w-[224px] md:w-[514px] ">
                O smartwatch é o seu companheiro ideal para uma vida mais
                saudável, conectada e cheia de estilo. Com ele, você recebe
                notificações do seu smartphone, monitora sua saúde (batimentos
                cardíacos, pressão arterial, oxigênio no sangue e qualidade do
                sono), acompanha seus treinos com diversos recursos e ainda
                desfruta de um design elegante e moderno com diversas pulseiras
                intercambiáveis.{" "}
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
      </main>
      <Footer />
    </>
  );
}
