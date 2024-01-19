import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header(){
    return(
        // <div className="bg-[#1E3A8A] w-full ">
        //     <main className="flex justify-around items-center h-36">
        //         <img src="../src/assets/images/logo.png" alt="logo e-rede" />

        //         <label htmlFor="" className="flex"><IoMdSearch/>
        //             <input type="text" placeholder="Buscar"/>
        //         </label>

        //         <article className="flex text-[white]">
        //             <button>Cadastre-se</button>
        //             <button>Entrar</button>
        //             <MdOutlineShoppingCart/>
        //         </article>
        //     </main>
        //     <footer>
        //         <nav className="text-[white]">
        //             <button >Home</button>
        //             <button>Produtos</button>
        //             <button>Categorias</button>
        //             <button>Meus Pedidos</button>
        //         </nav>
        //     </footer>
        // </div>
        <>
        <section className="bg-[#1E3A8A] flex flex-col h-36 p-8	gap-3">
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