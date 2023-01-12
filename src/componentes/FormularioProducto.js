import React, { useState } from "react";

function FormularioProducto(props){

	let producto;
	let cantidad; 
	let precio;
	

	const obtenerDatos = e =>{
	
		if (e.target.id == "producto"){
			console.log(e.target.value);
		  producto = e.target.value;
		}else if(e.target.id == "cantidad"){
			console.log(e.target.value);
			cantidad = e.target.value;
		}else if(e.target.id == "precio"){
			console.log(e.target.value);
			precio = e.target.value;
		}
		console.log(producto, cantidad, precio);
	}

	const enviarDatos = e =>{
		e.preventDefault();
		const nuevoProducto = {
			 Producto:producto,
			 Cantidad:cantidad,
			 Precio:precio
		}
		props.objeto(nuevoProducto)


	}

	
	return(
		
		<form onSubmit={enviarDatos}>
		<label>Nombre Producto:</label>	
		<input  className ="form-control" type="text" id="producto"  onChange={obtenerDatos} name="producto" required/>
		<label>Cantidad:</label>
		<input  className ="form-control" type="text"  id="cantidad" onChange={obtenerDatos}  name="cantidad" required/>
		<label>Precio:</label>
		<input  className ="form-control" type="text" id="precio"  onChange={obtenerDatos}  name="precio" required/><br/>
		<div className="text-center">
			<input className="btn btn-default border p-3" type="submit" name="submit"/>
		</div>
		

	</form>
	);

}

export default FormularioProducto;