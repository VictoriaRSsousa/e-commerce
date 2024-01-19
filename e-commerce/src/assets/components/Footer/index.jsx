import { FaFacebook, FaInstagram,FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return(
        <section className="bg-[#1E3A8A] text-white">
            <span className="flex gap-2">
                <img src="../src/assets/images/logo.png" alt=""  className="h-7"/>
                <p>Lorem ipsum lorem ipsum lorem lorem ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum</p>
            </span>
            <span className="flex ">
                <FaFacebook/>
                <FaInstagram/>
                <FaWhatsapp/>
            </span>
            <div className="flex">
                <section>
                    <p>Informações</p>
                    <button>Sobre o E-Rede Store</button>
                    <button>Segurança</button>
                    <button>Lista de desejos</button>
                    <button>Trabalhe Conosco</button>
                </section>
                <section>
                    <p>Informações</p>
                    <button>Tênis</button>
                    <button>Camiseta</button>
                    <button>Acessório</button>
                    <button>Esportivo</button>
                </section>
            </div>
        </section>
    )
}