// import { useState, useEffect } from "react";
// import axios from "axios";

// import "./datos.css";

// function Datos() {
//   const [rows2, setRows2] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://api.escuelajs.co/api/v1/products");
//       const data = response.data;
//       console.log(data);
//       setRows2(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Productos</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Precio</th>
//             <th>Imagen</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows2.map((row) => (
//             <tr key={row.id}>
//               <td>{row.title}</td>
//               <td>{row.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Datos;
