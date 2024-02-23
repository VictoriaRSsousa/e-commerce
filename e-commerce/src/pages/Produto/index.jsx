import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Produto() {
  return (
    <>
      <Header />

      <main className=" flex justify-center items-center shadow-md">
        <body className="w-4/6 h-2/5 flex items-center m-40  bg-slate-100 p-7">
          <section className="">
            <img
              src="https://m.media-amazon.com/images/I/71JtGDJmz7L._AC_SY741_.jpg"
              className="w-[309px]	 h-[342px]"
              alt=""
            />
            <span>
              <p>Quantidades Disponíveis</p>
              <p>100 itens Disponíveis</p>
            </span>
          </section>
          <section className=" ">
            <div>
              <h3>Smart Watt</h3>
              <p>Relógio</p>
              <p className=" 	">
                O smartwatch é o seu companheiro ideal para uma vida mais
                saudável, conectada e cheia de estilo. Com ele, você recebe
                notificações do seu smartphone, monitora sua saúde (batimentos
                cardíacos, pressão arterial, oxigênio no sangue e qualidade do
                sono), acompanha seus treinos com diversos recursos e ainda
                desfruta de um design elegante e moderno com diversas pulseiras
                intercambiáveis.{" "}
              </p>
            </div>
            <div>
              <span>
                <p>quantidade</p>
                <p>01</p>
              </span>
              <button>Comprar</button>
            </div>
          </section>
        </body>
      </main>
      <Footer />
    </>
  );
}
