import { json } from "react-router-dom";

export  const arrayDeSapatos = [
    {id:1,modelo: 'Nike Air Force 1', tipo: 'Casual', valor: 199.99, categoria:'a', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:2, modelo: 'Adidas Ultraboost', tipo: 'Corrida', valor: 179.99, categoria:'b' , quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:3,modelo: 'Puma Suede Classic', tipo: 'Casual', valor: 89.99, categoria:'c', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:4, modelo: 'New Balance 990', tipo: 'Esportivo', valor: 229.99 , categoria:'d', quantidade:10, descricao:"xxxxxxxx xxxxxxxxxxxxxxx ccxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxx xxxxxx x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:5, modelo: 'Vans Old Skool', tipo: 'Skate', valor: 69.99 , categoria:'e', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:6, modelo: 'Reebok Classic Leather', tipo: 'Casual', valor: 79.99 , categoria:'f', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:7,modelo: 'Converse Chuck Taylor', tipo: 'Casual', valor: 59.99 , categoria:'a', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:8, modelo: 'ASICS Gel-Kayano', tipo: 'Corrida', valor: 159.99 , categoria:'b', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:9, modelo: 'Under Armour HOVR Phantom', tipo: 'Corrida', valor: 129.99 , categoria:'c', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:10, modelo: 'Skechers Go Walk', tipo: 'Conforto', valor: 49.99, categoria:'d' , quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:11,modelo: 'Merrell Moab 2', tipo: 'Trilha', valor: 139.99 , categoria:'e', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxxxxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxx xxxxxxxxxxx xxxxxxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:12, modelo: 'Timberland 6-Inch Premium', tipo: 'Botas', valor: 189.99, categoria:'f' , quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:13, modelo: 'Dr. Martens 1460', tipo: 'Botas', valor: 149.99 , categoria:'a', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:14, modelo: 'Fila Disruptor', tipo: 'Casual', valor: 89.99 , categoria:'b', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:15, modelo: 'Salomon Speedcross', tipo: 'Trilha', valor: 129.99, categoria:'c' , quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:16, modelo: 'Brooks Ghost', tipo: 'Corrida', valor: 119.99 , categoria:'d', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:17, modelo: 'Mizuno Wave Rider', tipo: 'Corrida', valor: 169.99 , categoria:'e', quantidade:10, descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x" },
    {id:18, modelo: 'Lacoste Carnaby Evo', tipo: 'Casual', valor: 109.99 , categoria:'f', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:19, modelo: 'Etnies Jameson 2 Eco', tipo: 'Skate', valor: 59.99, categoria:'a' , quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"},
    {id:20, modelo: 'Clarks Desert Boot', tipo: 'Botas', valor: 129.99 , categoria:'b', quantidade:10 , descricao:"xxxxxxxx  x x x x x  xxx x x xxxxxxx xxxxx xxxxxxx xxxxxx xxxxxx x"}
    // Adicione mais objetos conforme necessário
  ];

//   const baseURL = "http://localhost:3000"
//   const api ={
//     getProducts: async()=>{
//         //const token = localStorage.getItem("token")
//         return fetch(`${baseURL}/products`,
//         {
//            method:"GET",
// //             headers:{
// //                 "Authorization":`Bearer `
// //             }
//         })
//     },
//     postLogin: async(username, password)=>{
//         console.log(username, password)
//         return fetch(`${baseURL}/login`,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({username:username, password:password})
//         })
//     }
// }
const baseUrl = "http://localhost:3000"
// export const getProducts = async () =>{
//     const response = await fetch(`${baseUrl}/products`);
//     const products = await response.json();

//     return products;
//  }

 const api={
  getProducts: async () =>{
    return  fetch(`${baseUrl}/products`);
 },
 getCategories: async ()=>{
  return fetch(`${baseUrl}/categories`)
 }
}
// // 
 export default api
  