import { FaFacebook, FaInstagram,FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return(
        <>
        <section className="hidden md:flex bg-azul-escuro text-white text-xs font-Inter flex-col ">
            <main className="flex mt-12">
                <section className="flex flex-col ml-52 w-1/5">
                    <span className="flex gap-7  font-normal	">
                        <img src="../src/assets/images/logo.png" alt=""  className="h-8 w-20"/>
                        <p className="">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum  </p>
                    </span>
                    <span className="flex gap-6">
                        <FaFacebook className="w-4 h-4"/>
                        <FaInstagram className="w-4 h-4"/>
                        <FaWhatsapp className="w-4 h-4"/>
                    </span>
                </section>
                <section className="flex flex-col gap-1 ml-24 ">
                        <h5 className="font-semibold mb-2">Informações</h5>
                        <a>Sobre o E-Rede Store</a>
                        <a>Segurança</a>
                        <a>Lista de desejos</a>
                        <a>Trabalhe Conosco</a>
                </section>
                <section className="flex flex-col gap-1 mb-2 ml-16 ">
                        <h5 className="font-semibold">Informações</h5>
                        <a>Tênis</a>
                        <a>Camiseta</a>
                        <a>Acessório</a>
                        <a>Esportivo</a>
                </section>       
                <section className="flex flex-col gap-1 mb-2 ml-28">
                        <h5 className="font-semibold mb-2">Localização</h5>
                        <p>Rua Martinho Rodrigues, 331</p>
                        <p>Bairro de Fátima, Fortaleza-CE</p>
                </section>
            </main>
            
            <footer className=" flex flex-col justify-center mt-28	 ">
                <div className="flex  border-t border-white  mx-24 "> </div>  
                <p className="flex items-center justify-center p-8">2023 Irede</p>
            </footer>

        </section>
        
        <section className="bg-[#1E3A8A] text-white p-6 font-Inter text-[10px] md:hidden">
            <span className="flex gap-5 pb-6 font-normal	">
                <img src="../src/assets/images/logo.png" alt=""  className="h-7 w-[72px]"/>
                <p className="">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum  </p>
            </span>
            <span className="flex gap-6 my-5">
                <FaFacebook className="w-4 h-4"/>
                <FaInstagram className="w-4 h-4"/>
                <FaWhatsapp className="w-4 h-4"/>
            </span>
            <div className="flex gap-8 ">
                <section className="flex flex-col text-justify gap-2">
                    <h5 className="font-semibold">Informações</h5>
                    <a>Sobre o E-Rede Store</a>
                    <a>Segurança</a>
                    <a>Lista de desejos</a>
                    <a>Trabalhe Conosco</a>
                </section>
                <section className="flex flex-col gap-2">
                    <h5 className="font-semibold">Informações</h5>
                    <a>Tênis</a>
                    <a>Camiseta</a>
                    <a>Acessório</a>
                    <a>Esportivo</a>
                </section>

            </div>
            <div className="my-5 flex flex-col gap-2">
                <h5 className="font-semibold">Localização</h5>
                <p>Rua Martinho Rodrigues, 331</p>
                <p>Bairro de Fátima, Fortaleza-CE</p>

            </div>
         
            <div className="border-t"></div>
            <footer className="p-4 flex justify-center">
                <p className="">2023 Irede</p>
            </footer>
        </section>
        </>
    )
}