import React from "react";
import "../hojas-de-estilo/Producto.css";
function Producto({nombre, cantidad, precio}){
    return(
       <>	
			 		<tr>
						<td>{nombre}</td>
						<td>{cantidad}</td>
						<td>{precio}</td>
						<td>eliminar</td>
					</tr>
          </>


    );
}


export default Producto;