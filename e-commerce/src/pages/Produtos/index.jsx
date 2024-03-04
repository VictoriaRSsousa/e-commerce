import Footer from "../../components/Footer";
import Header from "../../components/Header";
import api  from "../../api";
import Destaque from "../../components/Destaque";
import { useState,useEffect,useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProdutosContext } from "../../contexts/ProdutosContext";

export default function Produtos() {

  const {produtos , setProdutos} = useContext(ProdutosContext)
  console.log(produtos);
  
  const search = useLocation().search.slice(11)
  

  const [opcaoSelecionada, setOpcaoSelecionada] = useState(search);
  const [categories,setCategories] = useState([])
  console.log(opcaoSelecionada);

  async function handleApi(){
      const response = await api.getCategories()
      const result = await response.json()
      setCategories(result)
      console.log(result);
      console.log(categories);
      
  }

  useEffect(()=>{
      handleApi()
  },[])
  

  function handleOpcaoChange(event) {
    setOpcaoSelecionada(event.target.value);
  }
//   console.log(opcaoSelecionada);

  // const allCategorias = arrayDeSapatos.map((sapato) => sapato.tipo);
  // const categorias = [...new Set(allCategorias)];
  // console.log(categorias);
   const categoriasSelecionada = produtos.filter((product)=> product.categorie===opcaoSelecionada)

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row mt-5 md:m-20 gap-10   md:gap-20  justify-nromal md:justify-center items-center md:items-stretch	">
        <section className=" hidden md:flex flex-col bg-zinc-50 rounded-lg shadow-lg h-fit w-[251px] text-base	text-stone-500 font-semibold">
            <form action="" className="">
                {categories.map((categoria) => (
                    <div className={`${opcaoSelecionada === categoria.categorie?"bg-slate-100 text-laranja" : ""} h-10 flex gap-4 items-center px-2 mx-2`} key={categoria.categorie_id}>
                    <input
                        type="radio"
                        value={categoria.categorie}
                        id={`categoria${categoria.categorie_id}`}
                        checked={opcaoSelecionada === categoria.categorie}
                        onChange={handleOpcaoChange}
                    />
                    <label htmlFor="">{categoria.categorie}</label>
                    </div>

                )
                ) }
            </form>


        </section>

        <section className="md:hidden">
        <form action="" className="h-10 flex gap-4 items-center px-2 mx-2" >
          <select name="" id=""className="bg-laranja text-white h-12 w-60 font-Inter font-semibold text-base rounded-lg" value={opcaoSelecionada} onChange={handleOpcaoChange}>
            {categories.map((categoria) => (
              <option           
                type="radio"
                value={categoria.categorie}
                onChange={handleOpcaoChange}>{categoria.categorie}

              </option>)) }

          </select>
        </form>
        </section>
        <section className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 p-5 md:p-2">
          {opcaoSelecionada?
            categoriasSelecionada.map((sapato) => (
            <Destaque sapato={sapato} key={sapato.id} />)):produtos.map((product) => (
                <Destaque sapato={product} key={product.product_id} />))
          }
       
        </section>
      </main>

      <Footer />
    </>
  );
}
