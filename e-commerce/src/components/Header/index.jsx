import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header(){
    return(
        
        <>
        <section className="hidden md:flex">
        <div className="bg-[#1E3A8A] w-full ">
            <main className="flex justify-around items-center h-36">
                <img src="../src/assets/images/logo.png" alt="logo e-rede" />
            
                    <label htmlFor="" className="flex justify-center absolute text-[#666666DD]"><IoMdSearch/>
                        <input type="text" placeholder="         Buscar"/>
                    </label>
                <article className="flex text-[white] ">
                    <button>Cadastre-se</button>
                    <button>Entrar</button>
                    <MdOutlineShoppingCart/>
                </article>
            </main>
            <footer>
                <nav className="text-[white] flex justify-center gap-10">
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
                <GiHamburgerMenu className="h-8"/>
                <img src="../src/assets/images/logo.png" alt="logo e-rede" className="h-7"/>
                <MdOutlineShoppingCart className="h-8"/>
            </header>
            <main className="flex justify-center  gap-2">
                
                <label htmlFor="">
                    <IoMdSearch className=" h-4 absolute text-[#666666DD]"/>
                    <input type="text " placeholder="     Buscar" />
                </label>
            </main>
        </section>
        </>
    )
}