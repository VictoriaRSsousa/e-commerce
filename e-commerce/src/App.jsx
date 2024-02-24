import {BrowserRouter,Link,Route,Routes} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Pedidos from "./pages/Pedidos"
import Produtos from "./pages/Produtos"
import Categorias from "./pages/Categorias"
import Produto from "./pages/Produto"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/cadastro/*" element={<Cadastro/>}/>
        <Route path="/pedidos/*" element={<Pedidos/>}/>
        <Route path="/produtos/*" element={<Produtos/>}/>
        <Route path="/categorias/*" element={<Categorias/>}/>
        <Route path="/produto/:id" element={<Produto/>}/>

        <Route path="*" element={<div>Pagina nao encontrada</div>}/>
 
      </Routes>
    </BrowserRouter>
  )
}

export default App
