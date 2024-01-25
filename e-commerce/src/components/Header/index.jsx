import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Cadastro from "../../pages/Cadastro"


export default function Header(){
    return(
        
        <>
        <section className="hidden md:flex">
        <div className="bg-[#1E3A8A] w-full ">
            <main className="flex justify-around items-center h-36">
                <img src="../src/assets/images/logo.png" alt="logo e-rede" className="h-8 w-20"/>  
                <label htmlFor="" className="flex items-center  ">
                    <IoMdSearch className=" h-6 w-6 m-2 absolute text-cinza-medio"/>
                    <input type="text " placeholder="         Buscar" className="flex h-10 text-Inter font-normal text-stone-500 w-[520px]"/>
                </label>
                <article className="flex text-[white] fonr-semibold gap-5 items-center">

                    <button className="">Cadastre-se</button>
                    
                    <button className="bg-laranja rounded-lg w-28 h-10">Entrar</button>
                    <MdOutlineShoppingCart className="w-6 h-6"/>
                </article>
            </main>
            <footer>
                <nav className="text-[white] flex justify-center gap-10 font-semibold text-base">
                    <button className="focus:text-[#EA580C]" >Home</button>
                    <button className="focus:text-[#EA580C]">Produtos</button>
                    <button className="focus:text-[#EA580C]">Categorias</button>
                    <button className="focus:text-[#EA580C]">Meus Pedidos</button>
                </nav>
            </footer>
        </div>
        </section>
        <section className="bg-[#1E3A8A] flex flex-col h-36 p-8 gap-3 md:hidden" >
            <header className="flex text-[white] justify-around ">
                <GiHamburgerMenu className="h-6 w-7"/>
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