import Destaque from "../../components/Destaque";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { arrayDeSapatos } from "../../api";

import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Home(){
 const [total,setTotal] =  useState(0)
const {cart} = useContext(CartContext)
console.log(cart)
    return(
        <>
            <Header total={total} />
            <div className="flex items-end justify-center md:justify-end  ">
                <img src="../src/assets/images/promocaoDesktop.png" alt="" className="hidden md:flex w-screen" />
                <button className="absolute text-white text-Inter font-semibold bg-laranja  rounded-none md:rounded-lg w-72 md:w-80 h-10 md:h-16 mb-7 md:mb-32 md:mr-28"> Aproveitar Oferta </button>
                <img src="../src/assets/images/promocaoMobile.png" alt="" className="w-full flex md:hidden " />
            </div>
            <section className="p-3 md:p-24 ">
                <h2 className="text-azul-escuro mb-5 md:mb-6  ml-3 md:ml-5 text-Inter font-semibold text-xl">Destaques</h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-10">
                    
                {arrayDeSapatos.map((sapato)=>(<Destaque key={sapato.id} sapato={sapato} setTotal={setTotal}/>))}
                </div>
            </section>

            <Footer/>
            
        </>
    )
}