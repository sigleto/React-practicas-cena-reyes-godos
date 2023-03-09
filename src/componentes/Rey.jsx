import React ,{ useState } from "react";
import '../estilos/Rey.css'


function Rey({propiedades}){
   
    function Comprar(elemento){

        const valor=propiedades[2]
        propiedades[3]((e)=>e+valor)
        elemento.target.parentNode.parentNode.style.display="none"
       
    }


    return(


    <div className="cuadro" style={{backgroundColor:propiedades[1]}} > 
        
        <div className="nombre">{propiedades[0]}</div>
        <div className="precio">Precio:  {propiedades[2]}</div>
        <button onClick={Comprar}>comprar</button>       
    </div>       

    )
    
}
Rey.defaultProps={
    nombre:"rey Godo",
    color:"pink",
    precio:10
}
export default Rey