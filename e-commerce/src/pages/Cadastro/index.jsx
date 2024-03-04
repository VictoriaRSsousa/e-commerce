import { Link } from "react-router-dom";
import { useContext, useEffect ,useState} from "react";
import { UsersContext } from "../../contexts/UserContext";
import api from "../../api";
export default function Cadastro() {
  // const {user, setUser} = useContext(UsersContext);

  const [user,setUser] = useState({name:"",email:"", password:""})

  async function handleCadastro(){
    const response = await api.cadastro(user.name,user.email,user.password)
    const result = await response.json()
    console.log(result, "cadastro");
    alert(result.message)
    
 
  } 


  console.log(user);


  function handleform(event) {
    setUser((preview) => ({
      ...preview,
      [event.target.name]: event.target.value,
    }));
    // console.log(user);
  }
  function handleSubmit(event) {
    //para n ter o comportamento padrao do formulario e recarregar a pagina
    event.preventDefault();
     setUser({name: "", email: "",password:""});
    // console.log(user.name)
  }

  useEffect(()=>{
    
  },[user])

  return (
    <main className="flex flex-col md:flex-row relative items-center   font-Inter text-base ">
      <section className="h-3/4 md:h-screen md:w-1/2  md:bg-slate-100 absolute md:relative mt-20 md:mt-0   flex items-center justify-center">
        <div className="flex flex-col bg-white items-center gap-4 p-3 md:w-3/5">
          <h2 className="font-semibold text-2xl">Cadastre-se</h2>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" className="flex flex-col font-semibold  ">
              Nome:*
              <input
                type="text"
                onChange={handleform}
                placeholder="   Digite seu nome"
                name="name"
                className="bg-slate-100 h-10 rounded-lg w-64 font-medium placeholder-stone-500"
                value={user.name}
              />
            </label>
            <label className="flex flex-col font-semibold ">
              E-mail:*
              <input
                type="email"
                onChange={handleform}
                placeholder="   Digite seu e-mail"
                name="email"
                className="bg-slate-100 h-10 rounded-lg w-64 font-medium placeholder-stone-500"
                value={user.email}
              />
            </label>
            <label className="flex flex-col font-semibold ">
              Senha:*
              <input
                type="password"
                onChange={handleform}
                placeholder="   Digite sua senha"
                name="password"
                className="bg-slate-100 h-10 rounded-lg w-64 font-medium placeholder-stone-500"
                value={user.password}
              />
            </label>
            <button
              type="submit"
              className="bg-laranja text-white rounded-lg h-14 w-64 px-5 "
              onClick={handleCadastro}
            >
              Cadastrar
            </button>
          </form>
          <span className="flex gap-2">
            <p>Ja possui Cadastro? </p>
            <Link to="/login" className="text-laranja">
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
