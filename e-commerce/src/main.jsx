import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './contexts/CartContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>

)
