import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { arrayDeSapatos } from "../../api";
import Destaque from "../../components/Destaque";
import { useState } from "react";

export default function Produtos() {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  function handleOpcaoChange(event) {
    setOpcaoSelecionada(event.target.value);
  }
//   console.log(opcaoSelecionada);

  const allCategorias = arrayDeSapatos.map((sapato) => sapato.tipo);
  const categorias = [...new Set(allCategorias)];
  const categoriasSelecionada = arrayDeSapatos.filter((sapato)=> sapato.tipo===opcaoSelecionada)

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row mt-5 md:m-20 gap-10   md:gap-20  justify-nromal md:justify-center items-center md:items-stretch	">
        <section className=" hidden md:flex flex-col bg-zinc-50 rounded-lg shadow-lg h-fit w-[251px] text-base	text-stone-500 font-semibold">
            <form action="" className="">
                {categorias.map((categoria, i) => (
                    console.log(categoria===opcaoSelecionada),
                    <div className={`${opcaoSelecionada === categoria?"bg-slate-100 text-laranja" : ""} h-10 flex gap-4 items-center px-2 mx-2`} key={i}>
                    <input
                        type="radio"
                        value={categoria}
                        id={`categoria${i}`}
                        checked={opcaoSelecionada === categoria}
                        onChange={handleOpcaoChange}
                    />
                    <label htmlFor="">{categoria}</label>
                    </div>

                )
                ) }
            </form>


        </section>

        <section className="md:hidden">
        <form action="" className="h-10 flex gap-4 items-center px-2 mx-2" >
          <select name="" id=""className="bg-laranja text-white h-12 w-60 font-Inter font-semibold text-base rounded-lg" value={opcaoSelecionada} onChange={handleOpcaoChange}>
            {categorias.map((categoria, i) => (
              <option           
                type="radio"
                value={categoria}
                onChange={handleOpcaoChange}>{categoria}

              </option>)) }

          </select>
        </form>
        </section>
        <section className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 p-5 md:p-2">
          {opcaoSelecionada?
            categoriasSelecionada.map((sapato) => (
            <Destaque sapato={sapato} key={sapato.id} />)):arrayDeSapatos.map((sapato) => (
                <Destaque sapato={sapato} key={sapato.id} />))
          }
       
        </section>
      </main>

      <Footer />
    </>
  );
}
