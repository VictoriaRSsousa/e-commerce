import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UsersContext } from "../../contexts/UserContext";
import { useContext } from "react"
import api from "../../api";


export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const {user,setUser} = useContext(UsersContext);
  const { setToken} = useContext(UsersContext)

  const navigate = useNavigate();

  async function handleLogin(){
    const response = await api.login(userLogin.email,userLogin.password)
    const result = await response.json()
    if(!result.value){
      return alert(result)
    }
   // localStorage.setItem("token",result.token)
   setToken(result.token)
    setUser({name:result.value.nameUser,email:result.value.emailUser,idUser:result.value.idUser})

    navigate('/')

 
  }


  function handleSubmit(event) {
    //No manipulador de eventos onSubmit, chame o método preventDefault()
    // para impedir o comportamento padrão de envio do formulário
    event.preventDefault();
  }

  function handleInfoChanges(event) {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  }

  return (
    <main className="flex flex-col md:flex-row relative items-center   font-Inter text-base ">
      <section className="h-3/4 md:h-screen md:w-1/2  md:bg-slate-100 absolute md:relative mt-20 md:mt-0   flex items-center justify-center">
        <div className="flex flex-col items-center bg-white gap-4 p-3 md:w-[31vw]">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <h2 className="font-semibold text-2xl">Fazer Login</h2>

            <label className="flex flex-col font-semibold ">
              E-mail:*
              <input
                type="email"
                placeholder="   Digite seu e-mail"
                onChange={handleInfoChanges}
                value={userLogin.email}
                name="email"
                className="bg-slate-100 h-10 rounded-lg md:w-[23vw] font-medium placeholder-stone-500"
              />
            </label>
            <label className="flex flex-col font-semibold ">
              Senha:*
              <input
                type="password"
                placeholder="   Digite sua senha"
                onChange={handleInfoChanges}
                value={userLogin.password}
                name="password"
                className="bg-slate-100 h-10 rounded-lg  md:w-[23vw] font-medium placeholder-stone-500"
              />
            </label>
            <button
              type="submit"
              className="bg-laranja text-white rounded-lg h-14  md:w-[23vw] px-5  "
              onClick={handleLogin}
            >
              Fazer Login
            </button>
          </form>
          <span className="flex gap-2  md:w-[23vw]">
            <p>Não possui Cadastro? </p>
            <Link to="/cadastro" className="text-laranja">
              Clique aqui
            </Link>
          </span>
        </div>
      </section>
      <section className="bg-azul-escuro text-white h-screen w-screen flex flex-col justify-start md:justify-center items-center md:w-1/2">
        <div className="h-7 md:h-36 w-16 md:w-72 items-start md:items-center">
          <p className="hidden md:flex text-xl">
            Sua nove experiência em compras online
          </p>
          <img
            src="../src/assets/images/logoCadastrro.png"
            alt=""
            className="flex my-8 md:m-auto "
          />
        </div>
      </section>
    </main>
  );
}
