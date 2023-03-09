import { useState } from 'react'
import Rey from './componentes/Rey'
import './App.css'

function App() {

  const [total,setTotal]=useState(0);
    
  const reyes=[{nombre:"Felipe",color:"red",precio:45},
  {nombre:"Ludovico",color:"green",precio:148},
  {nombre:"Fernando",color:"blue",precio:200},
  {nombre:"Juan",color:"yellow",precio:90},]

  const[cantidad,setCantidad]=useState(0);
  return(
    <><p>Total: </p><div>{total}</div> 
    <div className='casa'> 
    
    <div className="corte"><Rey propiedades={[reyes[0].nombre,reyes[0].color,reyes[0].precio,setTotal]}/></div>
    <div className="corte"><Rey propiedades={[reyes[1].nombre,reyes[1].color,reyes[1].precio,setTotal]}/>/</div>
    <div className="corte"><Rey propiedades={[reyes[2].nombre,reyes[2].color,reyes[2].precio,setTotal]}/>/</div>
    <div className="corte"><Rey propiedades={[reyes[3].nombre,reyes[3].color,reyes[3].precio,setTotal]}/>/</div>
    
    
    
    
    
   </div>
   </>
  )
}

export default App
