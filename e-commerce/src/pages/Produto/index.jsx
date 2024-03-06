import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BiSolidUpArrow,BiSolidDownArrow  } from "react-icons/bi";
import { arrayDeSapatos } from "../../api/index";
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect} from "react"
import { PedidosContext } from "../../contexts/PedidosContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";


//FALTA APAGAR A QUANTIDADE DE ITENS DO LOCALSTORAGE


export default function Produto() {
  
  const navigate = useNavigate()
  const { id } = useParams();
  const {produtos} = useContext(ProdutosContext)
  const produto = produtos.filter((produto)=>produto.product_id ==parseInt(id))
  const {setPedidos} = useContext(PedidosContext)
  const [qtdItens, setqtdItens] = useState(0)


  useEffect(() => {

  }, [id]);


  function handleQtdItens(action){
    if(action === "+"){
      setqtdItens((preview)=> preview+1)
    }
    if(action==="-" && qtdItens>0){
      setqtdItens((preview)=> preview-1)
    }

  }
  function verifyItens(){
    if(produto[0].qtd_d<qtdItens){
      alert('Quantidade Indisponível!')
    }else
      setPedidos((preview)=>{
        const differentItems =  preview.filter((item)=>{
          return item.product_id!== produto[0].product_id})
        return [...differentItems , {...produto[0], qtd: qtdItens}]
        
        })

  }




  return (
    <>
      <Header/>
      {produto.length>0?      <main className=" flex justify-center items-center  ">
        <div className="	 flex flex-col md:flex-row items-center md:items-center mt-14 md:m-40 shadow-lg bg-slate-100 p-6 md:p-7 gap-2 md:gap-16 font-Inter">
          <section className="">
            <img
              src={produto[0].image}
              className=" w-[223px] md:w-[309px]	 h-[172px] md:h-[342px]"
              alt=""
            />
            <span className="text-2xl	hidden md:flex flex-col gap-6	mt-10">
              <p className="text-azul-escuro font-semibold ">Quantidades Disponíveis</p>
              <p className="font-medium	text-stone-500 ">{produto[0].qtd_d == 0?`Produto esgotado`:produto[0].qtd_d ==1?`1 Item Restante `:`${produto[0].qtd_d} Itens Disponíveis`}</p>
            </span>
          </section>
          <section className=" flex flex-col ">
            <article className="font-medium	text-sm	md:text-2xl text-stone-500	flex flex-col gap-2">
              <h3 className="font-semibold text-azul-escuro text-4xl	">{produto[0].model}</h3>
              <p>{produto[0].categorie}</p>
              <p className="w-[224px] md:w-[514px] text-wrap ">
                {produto[0].description}
              </p>
            </article>
            <article className="flex flex-col md:flex-row items-center gap-7 my-10">
              <span className="flex flex-col items-center">
                <p className="font-semibold text-2xl text-black">Quantidade:</p>
                <div className="flex bg-white border border-black rounded-md h-10 w-24	justify-center items-center gap-3  ">
                  <p className="text-2xl font-semibold">{qtdItens}</p>
                  <div>
                    <BiSolidUpArrow onClick={()=>{handleQtdItens("+")}}/>
                    <BiSolidDownArrow onClick={()=>{handleQtdItens("-")}}/>
                  </div>

                </div>
              </span>
              <button className="bg-azul-escuro text-white w-[222px] md:w-[352px] h-14	 md:h-20 rounded-lg font-semibold text-2xl" onClick={verifyItens}>Comprar</button>
            </article>
          </section>
        </div>
      </main>: <h1 className="m-48 flex justify-center items-center font-bold font-Inter text-4xl">PRODUTO NÃO ENCONTRADO</h1>}

      <Footer />
    </>
  );
}
