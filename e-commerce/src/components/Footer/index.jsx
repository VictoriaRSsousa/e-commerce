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
                <section className="flex flex-col">
                    <h5>Informações</h5>
                    <button>Sobre o E-Rede Store</button>
                    <button>Segurança</button>
                    <button>Lista de desejos</button>
                    <button>Trabalhe Conosco</button>
                </section>
                <section className="flex flex-col">
                    <h5>Informações</h5>
                    <button>Tênis</button>
                    <button>Camiseta</button>
                    <button>Acessório</button>
                    <button>Esportivo</button>
                </section>

            </div>
            <div>
                <h5>Localização</h5>
                <p>Rua Martinho Rodrigues, 331</p>
                <p>Bairro de Fátima, Fortaleza-CE</p>

            </div>
            <footer className="">
                <p>2023 Irede</p>
            </footer>
        </section>
    )
}