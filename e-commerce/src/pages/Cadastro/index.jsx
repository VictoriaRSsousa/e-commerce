import {Link} from "react-router-dom"
export default function Cadastro(){
    return(
        <main className="flex flex-col md:flex-row relative items-center   font-Inter text-base " >
            <section className="h-3/4 md:h-screen md:w-1/2  md:bg-slate-100 absolute md:relative mt-20 md:mt-0   flex items-center justify-center">
                <div className="flex flex-col bg-white items-center gap-4 p-3 md:w-3/5">
                    <h2 className="font-semibold text-2xl">Cadastre-se</h2>
                    <label htmlFor="" className="flex flex-col font-semibold  ">Nome:*
                        <input type="text" placeholder="   Digite seu nome" className="bg-slate-100 h-10 rounded-lg w-64 font-medium placeholder-stone-500"/>
                    </label>
                    <label className="flex flex-col font-semibold ">E-mail:*
                        <input type="text" placeholder="   Digite seu e-mail" className="bg-slate-100 h-10 rounded-lg w-64 font-medium placeholder-stone-500"/>
                    </label>
                    <label className="flex flex-col font-semibold ">Senha:*
                        <input type="text" placeholder="   Digite sua senha" className="bg-slate-100 h-10 rounded-lg w-64 font-medium placeholder-stone-500" />
                    </label>
                    <button type="submit" className="bg-laranja text-white rounded-lg h-14 w-64 px-5 ">Cadastrar</button>
                    <span className="flex gap-2">
                        <p>Ja possui Cadastro? </p>
                        <Link to="/login">
                            <a className="text-laranja"> Clique aqui</a>
                        </Link>
                    </span>
                </div>
            </section>
            <section className="bg-azul-escuro text-white h-screen w-screen flex flex-col justify-start md:justify-center items-center md:w-1/2">
                <div className="h-7 md:h-36 w-16 md:w-72 items-start md:items-center">
                <p className="hidden md:flex text-xl">Sua nove experiência em compras online</p>
                <img src="../src/assets/images/logoCadastrro.png" alt=""  className="flex my-8 md:m-auto "/>
                </div>
            </section>
        </main>
    )
}