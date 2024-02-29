import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BiSolidUpArrow,BiSolidDownArrow  } from "react-icons/bi";
import { arrayDeSapatos } from "../../api/index";
import { useParams, Navigate } from 'react-router-dom';
import { useContext, useState, useEffect} from "react"
import { PedidosContext } from "../../contexts/PedidosContext";


//FALTA APAGAR A QUANTIDADE DE ITENS DO LOCALSTORAGE


export default function Produto() {
  const { id } = useParams();
  const sapato = arrayDeSapatos.filter((sapato)=>sapato.id ==parseInt(id))

  const {pedidos,setPedidos} = useContext(PedidosContext)
  const [qtdItens, setqtdItens] = useState(parseInt(localStorage.getItem(`${sapato[0].id}`))|| 0)


  function handleQtdItens(action){
    if(action === "+"){
      setqtdItens((preview)=> preview+1)
    }
    if(action==="-" && qtdItens>0){
      setqtdItens((preview)=> preview-1)
    }

  }
  function verifyItens(){
    if(sapato[0].quantidade<qtdItens){
      alert('Quantidade Indisponível!')
    }else
      setPedidos((preview)=>{
        const differentItems =  preview.filter((item)=>item.id!== sapato[0].id)
        return [...differentItems , {...sapato[0], qtd: qtdItens}]
        
        })

  }

    
  useEffect(()=>{
      
    if(qtdItens>0){
        localStorage.setItem(`${sapato[0].id}`,qtdItens)
    }
},[qtdItens])

  useEffect(()=>{
    if(pedidos.length===0){
      setqtdItens(0)
    }
  },[pedidos.length])


  return (
    <>
      <Header/>
      {sapato.length>0?      <main className=" flex justify-center items-center  ">
        <div className="	 flex flex-col md:flex-row  md:items-center mt-14 md:m-40 shadow-lg bg-slate-100 p-6 md:p-7 gap-2 md:gap-16 font-Inter">
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
      </main>:
        <Navigate to="*"/>
      }

      <Footer />
    </>
  );
}
