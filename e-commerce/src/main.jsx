import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PedidosProvider from "./contexts/PedidosContext/index.jsx";
import UsersProvider  from "./contexts/UserContext/index.jsx";
import ProdutosProvider from "./contexts/ProdutosContext/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProdutosProvider>
  <UsersProvider>
    <PedidosProvider>
        <App />
    </PedidosProvider>
  </UsersProvider>
  </ProdutosProvider>
);
