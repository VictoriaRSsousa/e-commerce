import Destaque from "../../components/Destaque";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home(){
    const arrayDeSapatos = [
        { modelo: 'Nike Air Force 1', tipo: 'Casual', valor: 199.99 },
        { modelo: 'Adidas Ultraboost', tipo: 'Corrida', valor: 179.99 },
        { modelo: 'Puma Suede Classic', tipo: 'Casual', valor: 89.99 },
        { modelo: 'New Balance 990', tipo: 'Esportivo', valor: 229.99 },
        { modelo: 'Vans Old Skool', tipo: 'Skate', valor: 69.99 },
        { modelo: 'Reebok Classic Leather', tipo: 'Casual', valor: 79.99 },
        { modelo: 'Converse Chuck Taylor', tipo: 'Casual', valor: 59.99 },
        { modelo: 'ASICS Gel-Kayano', tipo: 'Corrida', valor: 159.99 },
        { modelo: 'Under Armour HOVR Phantom', tipo: 'Corrida', valor: 129.99 },
        { modelo: 'Skechers Go Walk', tipo: 'Conforto', valor: 49.99 },
        { modelo: 'Merrell Moab 2', tipo: 'Trilha', valor: 139.99 },
        { modelo: 'Timberland 6-Inch Premium', tipo: 'Botas', valor: 189.99 },
        { modelo: 'Dr. Martens 1460', tipo: 'Botas', valor: 149.99 },
        { modelo: 'Fila Disruptor', tipo: 'Casual', valor: 89.99 },
        { modelo: 'Salomon Speedcross', tipo: 'Trilha', valor: 129.99 },
        { modelo: 'Brooks Ghost', tipo: 'Corrida', valor: 119.99 },
        { modelo: 'Mizuno Wave Rider', tipo: 'Corrida', valor: 169.99 },
        { modelo: 'Lacoste Carnaby Evo', tipo: 'Casual', valor: 109.99 },
        { modelo: 'Etnies Jameson 2 Eco', tipo: 'Skate', valor: 59.99 },
        { modelo: 'Clarks Desert Boot', tipo: 'Botas', valor: 129.99 }
        // Adicione mais objetos conforme necessário
      ];
    return(
        <>
            <Header/>
            <div className="flex items-end justify-center md:justify-end  ">
                <img src="../src/assets/images/promocaoDesktop.png" alt="" className="hidden md:flex w-screen" />
                <button className="absolute text-white text-Inter font-semibold bg-laranja  rounded-none md:rounded-lg w-72 md:w-80 h-10 md:h-16 mb-7 md:mb-32 md:mr-28"> Aproveitar Oferta </button>
                <img src="../src/assets/images/promocaoMobile.png" alt="" className="w-full flex md:hidden " />
            </div>
            <section className="p-3 md:p-24 ">
                <h2 className="text-azul-escuro mb-5 md:mb-6  ml-3 md:ml-5 text-Inter font-semibold text-xl">Destaques</h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-10">
                    
                {arrayDeSapatos.map((sapato)=>(<Destaque sapato={sapato}/>))}
                </div>
            </section>

            <Footer/>
            
        </>
    )
}