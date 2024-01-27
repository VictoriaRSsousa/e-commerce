import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Cadastro from "../../pages/Cadastro"
import { Link, useLocation } from "react-router-dom";


export default function Header(){
    const loc = useLocation()
    const routeHome = loc.pathname==="/"
    console.log(loc.pathname)
    console.log(routeHome)

    return(
        
        <>
        <section className="hidden md:flex mt-0">
        <div className="bg-[#1E3A8A] w-full ">
            <main className="flex justify-around items-center h-36">
                <img src="../src/assets/images/logo.png" alt="logo e-rede" className="h-8 w-20"/>  
                <label htmlFor="" className="flex items-center  ">
                    <IoMdSearch className=" h-6 w-6 m-2 absolute text-cinza-medio"/>
                    <input type="text " placeholder="         Buscar" className="flex h-10 text-Inter font-normal text-stone-500 w-[520px]"/>
                </label>
                <article className="flex text-[white] fonr-semibold gap-5 items-center">
                    <Link to="/cadastro">
                    <a className="">Cadastre-se</a></Link>
                    
                    <Link to="/login">
                    <button className="bg-laranja rounded-lg w-28 h-10">Entrar</button>
                    </Link>
                    <MdOutlineShoppingCart className="w-6 h-6"/>
                </article>
            </main>
            <footer>
                <nav className="text-[white] flex justify-center gap-10 font-semibold text-base">
                    <Link className={`${loc.pathname==="/"?"text-laranja":"text-white"} `} to="/"> Home</Link>
                    <Link className={`${loc.pathname==="/produtos"?"text-laranja":"text-white"} `} to="/produtos">Produtos</Link>
                    <Link className={`${loc.pathname==="/categorias"?"text-laranja":"text-white"} `} to="/categorias">Categorias</Link>
                    <Link className={`${loc.pathname==="/pedidos"?"text-laranja":"text-white"} `} to="/pedidos">Meus Pedidos</Link>
                </nav>
            </footer>
        </div>
        </section>
        <section className="bg-[#1E3A8A] flex flex-col h-36 p-8 gap-3 md:hidden" >
            <header className="flex text-[white] justify-around "> 
            <button className="peer">
            <GiHamburgerMenu className="h-6 w-7"/>
            </button>
                <aside className="h-screen w-screen bg-slate-100 fixed peer-focus:left-0 top-0 z-50	 left-[100vw] ">
                    <h2 className="text-black">Páginas</h2>
                    <nav className="text-black flex flex-col">
                        
                        <Link to="/"> Home</Link>
                        <Link to="/produtos">Produtos</Link>
                        <Link to="/categorias">Categorias</Link>
                        <Link to="/pedidos"><button className="focus:text-laranja bg-slate-100">Meus Pedidos</button></Link>
                        
                    </nav>
                   
                </aside>

                <img src="../src/assets/images/logo.png" alt="logo e-rede" className="h-7 w-[72px]"/>
                <MdOutlineShoppingCart className="h-6 w-6"/>
            </header>
            <main className="flex justify-center  gap-2">
                
                <label htmlFor="" className="flex items-center">
                    <IoMdSearch className=" h-4 absolute m-2 text-[#666666DD]"/>
                    <input type="text " placeholder="       Buscar" className="w-64 rounded h-8"/>
                </label>
            </main>
        </section>
        </>
    )
}