import { Link } from "react-router-dom"

export default function loginEmulate(user){

    const {email,password} = user
    if(email==="victoria@email.com" && password==="senha") {
        console.log("autenticado")
        

    }else
        console.log("nao autenticado")
}