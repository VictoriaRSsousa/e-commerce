import { Link } from "react-router-dom"
export default function MenuHamburguer(){
    return(
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
          {name?
              <button onClick={handleSair} className="text-white bg-laranja w-20 h-10 rounded-lg "> Sair </button>
              : <section> <div className="border border-black w-full"></div>
             <div className="my-3 flex justify-around items-center">
             <Link to="/cadastro/" className="text-stone-500 text-xs">
               Cadastre-se
             </Link>
             <button className="text-white bg-azul-escuro w-24 h-7 rounded-lg font-medium">
               <Link to="/login">Login</Link>
             </button>
           </div></section> }
        
         
        </footer>
      </div>
    )
}