export default function Cadastro(){
    return(
        <main className="flex flex-col md:flex-row">
            <section className="h-screen  md:w-1/2 bg-slate-100">
                <div className="flex flex-col bg-white justify-center my-64">
                    <h2>Cadastre-se</h2>
                    <label htmlFor="">Nome:*
                        <input type="text" placeholder="Digite seu nome" className="bg-slate-100"/>
                    </label>
                    <label htmlFor="">E-mail:*
                        <input type="text" placeholder="Digite seu e-mail" className="bg-slate-100 "/>
                    </label>
                    <label htmlFor="">Senha:*
                        <input type="text" placeholder="Digite sua senha" className="bg-slate-100" />
                    </label>

                </div>

            </section>
            <section className="bg-azul-escuro text-white h-screen w-screen md:w-1/2">
                <p className="hidden md:flex">Sua nove experiência em compras online</p>
                <img src="../src/assets/images/logo.png" alt="" />
            </section>
        </main>
    )
}