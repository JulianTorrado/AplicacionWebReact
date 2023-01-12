import React, { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import Producto from './Producto';

function ListaProductos(){
    //Estado 
    const [productos, setProducto] = useState([]);

    const agregarProducto = producto =>{
        
      
          
                const productosActualizados = [producto,...productos];
                setProducto(productosActualizados);
                console.log(producto.Producto)
          
          
        
    }

    

    return(
			<>
        <table className="table">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accíon</th>
                </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto) =>
                        <Producto
                        nombre={producto.Producto}
                        cantidad ={producto.Cantidad}
                        precio = {producto.Precio}/>
                        )
                    }
                    
                   
                </tbody>
            </table>
            <FormularioProducto objeto={agregarProducto}/>
			</>
    );
}


export default ListaProductos;