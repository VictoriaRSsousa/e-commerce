import {BrowserRouter,Link,Route,Routes} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Cart from "./pages/Cart"
import Pedidos from "./pages/Pedidos"
// import Produtos from "./pages/Produtos"
// import Categorias from "./pages/Categorias"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/cadastro/*" element={<Cadastro/>}/>
        <Route path="/cart/*" element={<Cart/>}/>
        <Route path="/pedidos/*" element={<Pedidos/>}/>
        {/* <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/categorias" element={<Categorias/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
