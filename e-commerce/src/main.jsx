import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartTotalProvider from "./contexts/CartTotalContext/index.jsx";
import PedidosProvider from "./contexts/PedidosContext/index.jsx";
import UsersProvider  from "./contexts/UserContext/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersProvider>
    <PedidosProvider>
      <CartTotalProvider>
        <App />
      </CartTotalProvider>
    </PedidosProvider>
  </UsersProvider>
);
