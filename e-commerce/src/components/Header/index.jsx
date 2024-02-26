import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { PedidosContext } from "../../contexts/PedidosContext";
import { ComprasContext } from "../../contexts/ComprasContext";
import CartCard from "../CartCard";

export default function Header() {
  const loc = useLocation();

  const { compras, setCompras } = useContext(ComprasContext);
  const { pedidos, setPedidos } = useContext(PedidosContext);
  const somar = pedidos
    .filter((sapato) => sapato.qtd > 0)
    .map((sapato) => sapato.qtd * sapato.valor)
    .reduce((acc, atual) => acc + atual, 0);

  const totalCart =
    pedidos
      .filter((sapato) => sapato.qtd > 0)
      .map((sapato) => sapato.qtd)
      .reduce((acc, atual) => acc + atual, 0) ||
    parseInt(localStorage.getItem("totalCart"));

  const [cartTotal, setCartTotal] = useState(totalCart);
  const [search,setSearch] = useState("")

  useEffect(() => {
    localStorage.setItem("totalCart", totalCart);
  }, [cartTotal]);

  function handleCart() {
    setPedidos([]);
    setCartTotal(0);
  }

  function handleCompra() {
    setCompras();
  }

//   function handleSearch(event){
//     setSearch(...search,event.target.value)
//   }
//   console.log(search);
  return (
    <>
      {/* ---------------------------------HEADER DESKTOP------------------------------------------------- */}

      <section className="hidden md:flex mt-0">
        <div className="bg-[#1E3A8A] w-full ">
          <main className="flex justify-around items-center h-36">
            <img
              src="../src/assets/images/logo.png"
              alt="logo e-rede"
              className="h-8 w-20"
            />
            <label htmlFor="" className="flex items-center  ">
              <IoMdSearch className=" h-6 w-6 m-2 absolute text-cinza-medio" />
              <input
                type="search "
                placeholder="         Buscar"
                className="flex h-10 text-Inter font-normal text-stone-500 w-[520px]"
              />
            </label>
            <article className="flex text-[white] fonr-semibold gap-5 items-center">
              <Link to="/cadastro">
                <a className="">Cadastre-se</a>
              </Link>

              <Link to="/login">
                <button className="bg-laranja rounded-lg w-28 h-10">
                  Entrar
                </button>
              </Link>

              {/* ------------------------CART DESKTOP----------------------- */}

              <button className="peer">
                <MdOutlineShoppingCart className="  h-6 w-6" />
                {totalCart > 0 ? (
                  <p className="absolute top-10 bg-red-600  text-[16px] rounded-full h-6 w-6 justify-center items-center flex">
                    {totalCart}
                  </p>
                ) : null}
              </button>
              {/* <Cart/> */}
              <div className="flex flex-col justify-between h-96 w-64 p-8 bg-zinc-50 fixed peer-focus:right-0 top-0 z-50	right-[-100vw] font-semibold rounded-l-lg  duration-1000 out-in-ease  overflow-auto ">
                <header>
                  <h2 className="text-black">Meu Carrinho</h2>
                  <div className="border border-black"></div>
                </header>
                <div className="text-black flex flex-col gap-6	justify-around ">
                  {pedidos
                    .filter((sapato) => sapato.qtd > 0)
                    .map((p) => (
                      <CartCard key={pedidos.id} p={p} />
                    ))}
                </div>
                <footer className="flex flex-col">
                  <div className="border border-black "></div>
                  <article className="flex justify-between text-base	font-semibold	font-Inter">
                    <h2 className="text-black">Valor Total:</h2>
                    {<p className="text-azul-escuro">{somar.toFixed(2)}</p> ||
                      0}
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
              </div>
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

          <button className="peer">
            <GiHamburgerMenu className="h-6 w-7" />
          </button>
          <div className="h-96 w-64 p-8 bg-zinc-50 fixed peer-focus:left-0 top-0 z-50	 left-[-100vw] font-semibold rounded-r-lg  duration-1000	 out-in-ease">
            <h2 className="text-black">Páginas</h2>
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
          </div>
          <img
            src="../src/assets/images/logo.png"
            alt="logo e-rede"
            className="h-7 w-[72px]"
          />

          {/*-----------------------------------CART------------------------------------------- */}

          <div className="relative">
            <button className="peer">
              <MdOutlineShoppingCart className="  h-6 w-6" />
              {totalCart > 0 ? (
                <p className="absolute top-3 bg-red-600  text-[16px] rounded-full h-6 w-6 justify-center items-center flex">
                  {totalCart}
                </p>
              ) : null}
            </button>
            <div className="flex flex-col justify-between h-96 w-64 p-8 bg-zinc-50 fixed peer-focus:right-0 top-0 z-50	right-[-100vw] font-semibold rounded-l-lg  duration-1000	 out-in-ease  overflow-auto ">
              <header>
                <h2 className="text-black">Meu Carrinho</h2>
                <div className="border border-black"></div>
              </header>
              <div className="text-black flex flex-col gap-6	justify-around ">
                {pedidos
                  .filter((sapato) => sapato.qtd > 0)
                  .map((p) => (
                    <CartCard key={pedidos.id} p={p} />
                  ))}
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
            </div>
          </div>

          {/* ------------------------------------------PLACEHOLDER------------------------------------------- */}
        </header>
        <main className="flex justify-center  gap-2">
          <label htmlFor="" className="flex relative items-center">
            <IoMdSearch className=" h-4 absolute m-2 text-[#666666DD]" />
            <input
              type="text "
              placeholder="       Buscar"
            //   onChange={handleSearch}
            //   value={search}
              name="email"
              className="w-64 rounded h-8"
            />
          </label>
        </main>
      </section>
    </>
  );
}
