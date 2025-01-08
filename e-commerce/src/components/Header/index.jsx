import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, json, useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { PedidosContext } from "../../contexts/PedidosContext";
import { UsersContext } from "../../contexts/UserContext";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart";
import MenuHamburguer from "../MenuHamburguer";

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
              {
                showCart?
               <Cart onClose={()=> handleShowCart("close")}/>:null
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
          <MenuHamburguer/>:null
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
                <Cart onClose={()=> handleShowCart("close")}/>:null
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
