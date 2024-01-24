import Destaque from "../../components/Destaque";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home(){
    return(
        <>
            <Header/>
            <div className="flex items-end justify-center md:justify-end  ">
            <img src="../src/assets/images/promocaoDesktop.png" alt="" className="hidden md:flex" />
            <button className="absolute text-white text-Inter-600 bg-laranja  rounded-none md:rounded-lg w-72 md:w-80 h-10 md:h-16 mb-7 md:mb-32 md:mr-28"> Aproveitar Oferta </button>
            <img src="../src/assets/images/promocaoMobile.png" alt="" className="w-full flex md:hidden " />
            </div>
            <h2 className="text-azul-escuro ml-5 md:ml-28 mt-6 md:mt-8 ">Destaques</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-5 p-3 md:p-20">
                
                <Destaque/>
                <Destaque/>
                <Destaque/>
                <Destaque/>                
                <Destaque/>
                <Destaque/>               
                <Destaque/>
                <Destaque/>             
                <Destaque/>
                <Destaque/>               
                <Destaque/>
                <Destaque/>
            </div>
            <Footer/>
            
        </>
    )
}