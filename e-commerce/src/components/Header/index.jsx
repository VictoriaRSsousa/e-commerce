import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, json, useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { PedidosContext } from "../../contexts/PedidosContext";
import { UsersContext } from "../../contexts/UserContext";
import CartCard from "../CartCard";
import api from "../../api";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const loc = useLocation()

  const navigate = useNavigate()
  const { pedidos, setPedidos } = useContext(PedidosContext);
  const {user,setUser} = useContext(UsersContext)
  const {setToken} = useContext(UsersContext)
  const name = user?.name 



  const somar = pedidos
    .filter((sapato) => sapato.qtd > 0)
    .map((sapato) => sapato.qtd * sapato.price)
    .reduce((acc, atual) => acc + atual, 0);
  

  const totalCart =
    pedidos
      .filter((sapato) => sapato.qtd > 0)
      .map((sapato) => sapato.qtd)
      .reduce((acc, atual) => acc + atual, 0) 

      const [search,setSearch] = useState("")
      const [showCart, setShowCart] = useState(false)
      const [showMenu,setShowMenu] = useState(false)
      
      const [cartTotal, setCartTotal] = useState( parseInt(localStorage.getItem("cartTotal")) || 0)

  useEffect(() => {  
    setCartTotal(totalCart)
    localStorage.setItem("cartTotal", totalCart);
  }, [totalCart]);

  function handleCart() {    
    setPedidos([]);
    setCartTotal(0);
  }
  

  function handleSearch(event){
    setSearch(event.target.value)
    
  }

  function handleShowCart(action){
    if(action==="show"){
      setShowCart(true)

    }else{
      setShowCart(false)
    }
  }
  function handleShowMenu(action){
    if(action==="show"){
      setShowMenu(true)
    }else{
      setShowMenu(false)
    }
  }

  function handleSair(){
    setUser([])
    setToken([])
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  const pedidosCompra = pedidos.map((pedido)=>{
    return {sale_product_id:pedido.product_id,price:pedido.price,qtd_sale:pedido.qtd}
  })

  async function handleCompra(){
    const response = await api.compra(user.idUser,pedidosCompra)
    const result = await response.json()
    alert(result.message)


    setPedidos([])

 
  }

  function handleSubmit(e){
    navigate(`/produtos?search=${search}`)
  }

  useEffect(()=>{
    
  },[search])
  

  return (
    <>
      {/* ---------------------------------HEADER DESKTOP------------------------------------------------- */}

      <section className="hidden md:flex mt-0 ">
        <div className="bg-[#1E3A8A] w-full ">
          <main className="flex justify-around items-center h-36">
            <img
              src="../src/assets/images/logo.png"
              alt="logo e-rede"
              className="h-8 w-20"
            />
            
              <form   onSubmit={handleSubmit} className="flex items-center  ">
                  {/* <IoMdSearch className=" h-6 w-6 m-2 absolute text-cinza-medio" /> */}
                <input
                  type="text"
                  name="search"
                  placeholder= "  Buscar"
                  onChange={handleSearch}
                  value={search}
                  className="flex h-10 text-Inter font-normal text-stone-500 w-[36vw] rounded"
                />
              </form>
          
            <article className="flex text-[white] fonr-semibold gap-5 items-center">
              {
                name?
                <div className="flex ml-4 gap-5 items-center">
                  <p>Olá, {name}</p>
                  <button onClick={handleSair} className="text-white bg-laranja w-20 h-10 rounded-lg "> Sair </button>
                </div>:

              <div className="flex gap-10 items-center">
              <Link to="/cadastro">
                <p className="">Cadastre-se</p>
              </Link>

              <Link to="/login">
                <button className="bg-laranja rounded-lg w-28 h-10">
                  Entrar
                </button>
              </Link>

              </div>
              }

              {/* ------------------------CART DESKTOP----------------------- */}

              <button className="peer">
                <MdOutlineShoppingCart className="  h-6 w-6" onClick={()=>handleShowCart("show")} />
                {cartTotal > 0 ? (
                  <p className="absolute top-10 bg-red-600  text-[16px] rounded-full h-6 w-6 justify-center items-center flex">
                    {cartTotal}
                  </p>
                ) : null}
              </button>
              {/* <Cart/> */}{
                showCart?
                <div className="flex-col justify-between h-96 w-64 p-8 bg-zinc-50 fixed right-5 flex top-5 z-10	 font-semibold rounded-l-lg  duration-1000 out-in-ease  overflow-auto ">
                <header>
                  <div className="flex justify-between items-center"> 
                    <h2 className="text-black">Meu Carrinho</h2>
                    <MdClose className="h-7 w-7 text-black cursor-pointer" onClick={()=>handleShowCart("close")}/>

                  </div>
                  <div className="border border-black"></div>
                </header>
                <div className="text-black flex flex-col gap-6	justify-around ">
                  {pedidos
                    .filter((sapato) => sapato.qtd > 0)
                    .map((pedido) =>
                    
                    {
                      return(
                      <div key={pedido.product_id}>
                        <CartCard  p={pedido} />
                      </div>
                    )})}
                </div>
                <footer className="flex flex-col">
                  <div className="border border-black "></div>
                  <article className="flex justify-between text-base	font-semibold	font-Inter">
                    <h2 className="text-black">Valor Total:</h2>
                    {<p className="text-azul-escuro">{somar.toFixed(2)}</p> ||
                      0}
                  </article>
                  <div className=" flex font-Inter  justify-around items-center ">
                    <button
                      onClick={handleCart}
                      className="cursor-pointer  text-stone-500  text-[10px]"
                    >
                      Esvaziar
                    </button>
                    <button
                      onClick={handleCompra}
                      className="bg-azul-escuro  text-white rounded-xl h-6 w-32 text-[10px] font-medium"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </footer>
              </div>:null
              }
 
              {/* ---------------------------------------------------------------------------------- */}
            </article>
          </main>
          <footer>
            <nav className="text-[white] flex justify-center gap-10 font-semibold text-base">
              <Link
                className={`${
                  loc.pathname === "/" ? "text-laranja" : "text-white"
                } `}
                to="/"
              >
                {" "}
                Home
              </Link>
              <Link
                className={`${
                  loc.pathname === "/produtos" ? "text-laranja" : "text-white"
                } `}
                to="/produtos"
              >
                Produtos
              </Link>
              <Link
                className={`${
                  loc.pathname === "/categorias" ? "text-laranja" : "text-white"
                } `}
                to="/categorias"
              >
                Categorias
              </Link>
              <Link
                className={`${
                  loc.pathname === "/pedidos" ? "text-laranja" : "text-white"
                } `}
                to="/pedidos"
              >
                Meus Pedidos
              </Link>
            </nav>
          </footer>
        </div>
      </section>

      {/* ---------------------------------------HEADER MD -------------------------------------------*/}
      <section className="bg-[#1E3A8A] flex flex-col h-36 p-8 gap-3 md:hidden">
        <header className="flex text-[white] justify-around ">
          {/* ----------------------MENU HAMBURGUER----------------------------------------------*/}

          <button className="">
            <GiHamburgerMenu className="h-6 w-7" onClick={()=>handleShowMenu("show")} />
          </button>

          {
             showMenu?
            <div className="h-96 w-64 p-8 bg-zinc-50 fixed  top-0 z-50	 left-0 font-semibold rounded-r-lg  duration-1000	 out-in-ease">
            <div className="flex justify-between items-center">
              <h2 className="text-black">Páginas</h2>
              <MdClose className="h-7 w-7 text-black cursor-pointer" onClick={()=>handleShowMenu("close")} />

            </div>
            <nav className="text-black flex flex-col ">
              <div className="border border-black"></div>
              <Link
                className={`${
                  loc.pathname === "/"
                    ? "bg-slate-100 text-laranja"
                    : "text-stone-500"
                } h-10 items-center rounded-lg p-3 hover:bg-slate-400 hover:text-laranja`}
                to="/"
              >
                {" "}
                Home
              </Link>
              <Link
                className={`${
                  loc.pathname === "/produtos"
                    ? "bg-slate-100 text-laranja"
                    : "text-stone-500"
                } h-10 items-center p-3 hover:bg-sky-700`}
                to="/produtos"
              >
                Produtos
              </Link>
              <Link
                className={`${
                  loc.pathname === "/categorias"
                    ? "bg-slate-100 text-laranja"
                    : "text-stone-500"
                } h-10 items-center p-3`}
                to="/categorias"
              >
                Categorias
              </Link>
              <Link
                className={`${
                  loc.pathname === "/pedidos"
                    ? "bg-slate-100 text-laranja"
                    : "text-stone-500"
                } h-10 items-center p-3`}
                to="/pedidos"
              >
                Meus Pedidos
              </Link>
            </nav>
            <footer className="flex flex-col mt-20">
              <div className="border border-black w-full"></div>
              <div className="my-3 flex justify-around items-center">
                <Link to="/cadastro/" className="text-stone-500 text-xs">
                  Cadastre-se
                </Link>
                <button className="text-white bg-azul-escuro w-24 h-7 rounded-lg font-medium">
                  <Link to="/login">Login</Link>
                </button>
              </div>
            </footer>
          </div>:null
          }

           <img
            src="../src/assets/images/logo.png"
            alt="logo e-rede"
            className="h-7 w-[72px]"
          /> 

          {/*-----------------------------------CART------------------------------------------- */}

          <div className="">
            <button className="peer">
              <MdOutlineShoppingCart className="  h-6 w-6" onClick={()=>handleShowCart("show")} />
              {cartTotal > 0 ? (
                <p className="absolute top-3 bg-red-600  text-[16px] rounded-full h-6 w-6 justify-center items-center flex">
                  {cartTotal}
                </p>
              ) : null}
         
            </button>
            {
                showCart?
                <div className="flex flex-col justify-between h-96 w-64 p-8 bg-zinc-50 fixed right-0 top-0 z-50	 font-semibold rounded-l-lg  duration-1000	 out-in-ease  overflow-auto ">
                <header>
                  <div className="flex justify-between items-center">
                  <h2 className="text-black">Meu Carrinho</h2>
                  <MdClose className="h-7 w-7 text-black cursor-pointer" onClick={()=>handleShowCart("close")}/>
                  </div>
                  <div className="border border-black"></div>
                </header>
                <div className="text-black flex flex-col gap-6	justify-around ">
                {pedidos
                    .filter((sapato) => sapato.qtd > 0)
                    .map((pedido) =>
                    
                    {
                      return(
                      <div key={pedido.product_id}>
                        <CartCard  p={pedido} />
                      </div>
                    )})}
                </div>
                <footer className="flex flex-col gap-3">
                  <div className="border border-black "></div>
                  <article className="flex justify-between">
                    <h2 className="text-black">Valor Total:</h2>
                    {<p className="text-azul-escuro">{somar.toFixed(2)}</p> || 0}
                  </article>
                  <div className=" flex font-Inter justify-around items-center ">
                    <a
                      onClick={handleCart}
                      className="cursor-pointer text-stone-500 text-[10px]"
                    >
                      Esvaziar
                    </a>
                    <button
                      onClick={handleCompra}
                      className="bg-azul-escuro text-white rounded-xl h-6 w-32 text-[10px] font-medium"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </footer>
              </div>:null
              }

          </div>

          {/* ------------------------------------------PLACEHOLDER------------------------------------------- */}
        </header>
        <main className="flex justify-center  gap-2">
          <label htmlFor="" className="flex relative items-center">
           
            <input
              type="text"
              placeholder= "  Buscar"
              onChange={handleSearch}
              value={search}
              className="w-[80vw] rounded h-8"
            />
          </label>
        </main>
      </section>
    </>
  );
}
